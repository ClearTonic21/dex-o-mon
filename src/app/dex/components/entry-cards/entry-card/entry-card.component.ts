import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { EntryCardType } from '../../../../enums/EntryCardType';
import { TextEntryCardComponent } from '../text-entry-card/text-entry-card.component';
import { ImageEntryCardComponent } from '../image-entry-card/image-entry-card.component';
import { DropdownEntryCardComponent } from "../dropdown-entry-card/dropdown-entry-card.component";
import { IExpansionPanelEventArgs, IgxExpansionPanelModule, IgxIconModule } from 'igniteui-angular';

@Component({
  selector: 'entry-card',
  standalone: true,
  imports: [IgxIconModule, IgxExpansionPanelModule, ImageEntryCardComponent, TextEntryCardComponent, DropdownEntryCardComponent],
  templateUrl: './entry-card.component.html',
  styleUrl: './entry-card.component.scss'
})
export class EntryCardComponent {
  @Input() public entryCard!: any;
  @Input() public dexEditMode: boolean = false;
  @Output() public contentExpanded = new EventEmitter<boolean>(false);
  public cardEditMode = signal<boolean>( false);

  public handleExpanding(e: IExpansionPanelEventArgs): void {
    if (!this.dexEditMode) {
      e.event.stopPropagation();
      e.event.preventDefault();
    }
  }

  public handleExpand(e: IExpansionPanelEventArgs): void {
    this.cardEditMode.set(true);
    this.contentExpanded.emit(true);
  }

  public handleCollapse(e: IExpansionPanelEventArgs): void {
    // Save changes then
    this.cardEditMode.set(false)
  }

  public isTextEntryCard(): boolean {
    return this.entryCard.entryCardType === EntryCardType.Text;
  }

  public isImageEntryCard(): boolean {
    return this.entryCard.entryCardType === EntryCardType.Image;
  }

  public isDropdownEntryCard(): boolean {
    return this.entryCard.entryCardType === EntryCardType.List;
  }
}
