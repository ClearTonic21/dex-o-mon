import { NgClass } from '@angular/common';
import { Component, Input, OnInit, Output, ViewEncapsulation, forwardRef } from '@angular/core';
import { FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IgxButtonGroupComponent, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'view-edit-button',
  standalone: true,
  imports: [IgxButtonGroupComponent, NgClass, IgxIconComponent],
  templateUrl: './view-edit-button.component.html',
  styleUrl: './view-edit-button.component.scss'
})

export class ViewEditButtonComponent implements OnInit {
  @Input() public formControlName!: string;
  @Input() public formGroup!: FormGroup;
  @Input() public id!: string;
  @Input() public label!: string;
  @Input() public labelPosition: 'left' | 'right' = 'left';
  @Input() public required: boolean = false;
  @Input() public invert: boolean = false; // This.invert ensures that this.value is inverted. True will show Hidden instead of Visible.
  @Output() public editMode: boolean = false;
  // @Input() public valueSetters?: IControlValueSetters;

  public visibleLabel = '';
  public hiddenLabel = '';
  public control!: FormControl;
  public viewValue!: boolean;
  public editValue!: boolean;
  public defaultValue!: boolean;
  public value!: boolean;
  public disabled: boolean = false;
  public mixed: boolean = false;
  public onChanged!: (value?: any) => void;
  public onTouched!: (event: any) => void;

  public ngOnInit(): void {
    this.value = this.defaultValue;
    this.viewValue = this.value;
    this.editValue = !this.value;
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
    this.viewValue = !this.value;
    this.editValue = this.value;
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
    if (this.viewValue) {
      return 'selected';
    } else {
      return 'clear';
    }
  }

  public getHiddenState(): string {
    if (this.mixed) {
      return 'mixed';
    }
    if (this.editValue) {
      return 'selected';
    } else {
      return 'clear';
    }
  }
}
