import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'nicosgruenpflege-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss'],
})
export class KontaktComponent {
  public readonly form = new FormGroup({
    anrede: new FormControl('', Validators.required),
    vorname: new FormControl(undefined, Validators.required),
    nachname: new FormControl(undefined, Validators.required),
    plz: new FormControl(undefined),
    ort: new FormControl(undefined),
    strasse: new FormControl(undefined),
    telefon: new FormControl(undefined),
    email: new FormControl(undefined),
    nachricht: new FormControl(undefined, Validators.required),
  });

  private readonly document: Document;

  public constructor(@Inject(DOCUMENT) document: unknown) {
    this.document = document as Document;
  }

  public submit(): void {
    if (this.form.invalid) {
      return;
    }
    console.log('submit:', this.form.value);
    const message = encodeURIComponent(
      Object.entries(this.form.value)
      .filter(([, value]) => !!value)
      .map(([key, value]) => `${key.substring(0, 1).toUpperCase()}${key.substring(1)}: ${value}`)
      .join('\n')
    );
    const link = document.createElement('a');
    link.href = `mailto:nico.andresen@gmx.de?subject=Kontaktanfrage&body=${message}`;
    link.click();
  }
}
