import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IgxButtonGroupComponent, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'view-edit-button',
  standalone: true,
  imports: [IgxButtonGroupComponent, NgClass, IgxIconComponent],
  templateUrl: './view-edit-button.component.html',
  styleUrl: './view-edit-button.component.scss'
})

export class ViewEditButtonComponent implements OnInit {
  @Input() public defaultValue = false;
  @Output() public editModeOut: EventEmitter<boolean> = new EventEmitter<boolean>();
  editMode: boolean = false;

  public ngOnInit(): void {
    this.editMode = this.defaultValue;
  }

  public visibilityClick(): void {
    this.editModeOut.emit(false);
    this.editMode = false;
  }

  public editClick(): void {
    this.editModeOut.emit(true);
    this.editMode = true;
  }
}
