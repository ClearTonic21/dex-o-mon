import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HotkeysService } from '@ngneat/hotkeys';
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

  constructor(private hotkeys: HotkeysService) {}

  public ngOnInit(): void {
    this.editMode = this.defaultValue;
    this.hotkeys.addShortcut({ keys: 'meta.e' }).subscribe(e => console.log('Hotkey', e));
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
