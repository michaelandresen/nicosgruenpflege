import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { Component } from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

interface ViewModel {
  required: boolean;
  type: 'input' | 'textarea';
}

@Component({
  selector: 'nicosgruenpflege-labeled-input',
  templateUrl: './labeled-input.component.html',
  styleUrls: ['./labeled-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: LabeledInputComponent,
    },
  ],
})
export class LabeledInputComponent
  implements ControlValueAccessor, AfterViewInit
{
  @ViewChild(FormControlDirective)
  public set formControlDirective(value: FormControlDirective) {
    console.log('setFormControlDirective:', value);
    this._formControlDirective = value;
    this.deferredControlValueAccessorCalls.forEach((call) => call(this._formControlDirective.valueAccessor!));
    this.deferredControlValueAccessorCalls = [];
  }

  @ViewChild('lbl')
  public labeElement!: ElementRef<HTMLLabelElement>

  @Input()
  public label!: string;

  @Input()
  public name?: string;

  @Input()
  public size = '20';

  @Input()
  public rows = '50';

  @Input()
  public formControlName?: string;

  @Input()
  public formControl?: FormControl;

  @Input()
  public set type(value: 'input' | 'textarea') {
    this.viewModel$.next({
      ...this.viewModel$.value,
      type: value
    });
  }

  public get control(): FormControl {
    let result: FormControl;
    if (this.formControl) {
      result = this.formControl;
    } else {
      result = this.controlContainer.control!.get(
        this.formControlName!
      ) as FormControl;
    }
    return result;
  }

  public viewModel$ = new BehaviorSubject<ViewModel>({ required: false, type: 'input' });

  private _formControlDirective!: FormControlDirective;
  private deferredControlValueAccessorCalls: Array<(target: ControlValueAccessor) => void> = [];

  public constructor(private readonly controlContainer: ControlContainer) {}

  public ngAfterViewInit(): void {
    const ctrl = this.control;
    Promise.resolve().then(() => {
      this.viewModel$.next({
        ...this.viewModel$.value,
        required: ctrl.hasValidator(Validators.required),
      });
    });
    if (!this.name) {
      this.name = this.formControlName;
    }
  }

  public writeValue(obj: unknown): void {
    if (this._formControlDirective) {
      this._formControlDirective.valueAccessor?.writeValue(obj);
    }
    else {
      this.deferredControlValueAccessorCalls.push((target) => target.writeValue(obj));
    }
  }

  public registerOnChange(fn: unknown): void {
    if (this._formControlDirective) {
      this._formControlDirective.valueAccessor?.registerOnChange(fn);
    } else {
      this.deferredControlValueAccessorCalls.push((target) => target.registerOnChange(fn));
    }
  }


  public registerOnTouched(fn: unknown): void {
    if (this._formControlDirective) {
      this._formControlDirective.valueAccessor?.registerOnTouched(fn);
    } else {
      this.deferredControlValueAccessorCalls.push((target) => target.registerOnTouched(fn));
    }
  }

  public focus(): void {
    this.labeElement.nativeElement.focus();
  }
}
