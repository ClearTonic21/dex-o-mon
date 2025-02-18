import { Component, Input } from '@angular/core';
import { EntryCardType } from '../../../../enums/EntryCardType';
import { TextEntryCardComponent } from '../text-entry-card/text-entry-card.component';
import { ImageEntryCardComponent } from '../image-entry-card/image-entry-card.component';
import { ListEntryCardComponent } from "../list-entry-card/list-entry-card.component";
import { IgxExpansionPanelModule, IgxIconModule } from 'igniteui-angular';

@Component({
  selector: 'entry-card',
  standalone: true,
  imports: [IgxIconModule, IgxExpansionPanelModule, ImageEntryCardComponent, TextEntryCardComponent, ListEntryCardComponent],
  templateUrl: './entry-card.component.html',
  styleUrl: './entry-card.component.scss'
})
export class EntryCardComponent {
  @Input() public entryCard!: any;
  @Input() public cardEditMode: boolean = false;

  public clickHeader(e: Event): void {
    e.stopPropagation();
    e.preventDefault();
  }

  public isTextEntryCard(): boolean {
    return this.entryCard.entryCardType === EntryCardType.Text;
  }

  public isImageEntryCard(): boolean {
    return this.entryCard.entryCardType === EntryCardType.Image;
  }

  public isListEntryCard(): boolean {
    return this.entryCard.entryCardType === EntryCardType.List;
  }
}
