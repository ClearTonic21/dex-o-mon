import { NgClass } from '@angular/common';
import { Component, Input, OnInit, ViewEncapsulation, forwardRef } from '@angular/core';
import { FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IgxButtonGroupComponent, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'toggle-button',
  standalone: true,
  imports: [IgxButtonGroupComponent, NgClass, IgxIconComponent],
  templateUrl: './toggle-button.component.html',
  styleUrl: './toggle-button.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleButtonComponent),
      multi: true
    }
  ]
})

export class ToggleButtonComponent implements OnInit {
  @Input()  public formControlName!: string;
  @Input() public formGroup!: FormGroup;
  @Input() public id!: string;
  @Input() public label!: string;
  @Input() public labelPosition: 'left' | 'right' = 'left';
  @Input() public required: boolean = false;
  @Input() public invert: boolean = false; // This.invert ensures that this.value is inverted. True will show Hidden instead of Visible.
  // @Input() public valueSetters?: IControlValueSetters;
  public visibleLabel = '';
  public hiddenLabel = '';
  public control!: FormControl;
  public visibleValue!: boolean;
  public hiddenValue!: boolean;
  public defaultValue!: boolean;
  public value!: boolean;
  public disabled: boolean = false;
  public mixed: boolean = false;
  public onChanged!: (value?: any) => void;
  public onTouched!: (event: any) => void;

  public ngOnInit(): void {
    this.value = this.defaultValue;
    this.visibleValue = this.value;
    this.hiddenValue = !this.value;
    this.mixed = this.value === null;

    this.control.valueChanges.subscribe(value => {
      this.mixed = value === null;
    });
  }

  public handleClick(inputVector: string = ''): void {
    if (this.mixed) {
      this.value = inputVector === this.hiddenLabel ? this.invert : !this.invert;
    } else {
      this.value = !this.value;
    }

    this.onChanged(this.value);
    this.writeValue(this.value);
    // this.handleValueSetters(this.value);
  }

  // public handleValueSetters(value: boolean): void {
  //   if (!this.valueSetters) {
  //     return;
  //   }

  //   Object.keys(this.valueSetters).forEach(key => {
  //     const control = this.formGroup.get(key);
  //     if (control) {
  //       const val = this.valueSetters[key].valueSetter(value);
  //       control.setValue(val);
  //       control.markAsDirty();
  //       control.markAllAsTouched();
  //     }
  //   });
  // }

  /**
   * Control Value Accessor Functions
   */

  public writeValue(value: boolean): void {
    if (value === null) {
      return;
    }

    this.value = value;
    this.visibleValue = !this.value;
    this.hiddenValue = this.value;
  }

  public registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public getVisibleState(): string {
    if (this.mixed) {
      return 'mixed';
    }
    if (this.visibleValue) {
      return 'selected';
    } else {
      return 'clear';
    }
  }

  public getHiddenState(): string {
    if (this.mixed) {
      return 'mixed';
    }
    if (this.hiddenValue) {
      return 'selected';
    } else {
      return 'clear';
    }
  }
}
