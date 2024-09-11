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
  @Input() public defaultValue: boolean = true;
  @Output() public editMode: boolean = true;
  @Output() public viewMode: boolean = false;

  public ngOnInit(): void {
    this.editMode = this.defaultValue;
    this.viewMode = !this.defaultValue;
  }

  public visibilityClick(): void {
    this.editMode = false;
    this.viewMode = true;
  }

  public editClick(): void {
    this.editMode = true;
    this.viewMode = false;
  }
}
