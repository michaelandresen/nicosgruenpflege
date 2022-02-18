import { DOCUMENT } from '@angular/common';
import { AfterContentInit, AfterViewInit, ChangeDetectionStrategy, Component, ContentChild, ContentChildren, ElementRef, Inject, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { AbstractControl, DefaultValueAccessor, FormControl, FormControlDirective, FormControlName, FormGroup, Validators } from '@angular/forms';
import { LabeledInputComponent } from './labeled-input/labeled-input.component';

@Component({
  selector: 'nicosgruenpflege-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KontaktComponent implements AfterViewInit {
  public readonly form = new FormGroup({
    name: new FormControl(undefined, Validators.required),
    strasse: new FormControl(),
    email: new FormControl(),
    plz: new FormControl(),
    ort: new FormControl(),
    telefon: new FormControl(),
    nachricht: new FormControl(undefined, Validators.required),
  });

  private readonly document: Document;

  @ViewChild('frm')
  private formElement!: ElementRef<HTMLFormElement>;

  public constructor(
    @Inject(DOCUMENT) document: unknown,
    ) {
    this.document = document as Document;
  }

  public ngAfterViewInit(): void {
    console.log('formElement:', this.formElement);
  }

  public submit(): void {
    if (this.form.invalid) {
      this.scrollToFirstInvalidElement();
    } else {
      this.sendEmail();
    }
  }

  private scrollToFirstInvalidElement(): void {
    const invalidElement = this.formElement.nativeElement.querySelector('.ng-invalid');
    if (invalidElement) {
      if (invalidElement instanceof HTMLInputElement || invalidElement instanceof HTMLTextAreaElement) {
        invalidElement.focus();
      }
    }
  }

  private sendEmail(): void {
    const lineSeparator = '\r\n';
    const header = Object.entries(this.form.value)
      .filter(([key, value]) => !!value && key !== 'nachricht')
      .map(
        ([key, value]) =>
          `${key.substring(0, 1).toUpperCase()}${key.substring(1)}: ${value}`
      )
      .join(lineSeparator);
    const message = encodeURIComponent(
      `${header}${lineSeparator}` +
        `-------------------------` +
        `${lineSeparator}${this.form.value.nachricht}`
    );
    const link = document.createElement('a');
    link.href = `mailto:nico.andresen@gmx.de?subject=Kontaktanfrage&body=${message}`;
    link.click();
  }
}
