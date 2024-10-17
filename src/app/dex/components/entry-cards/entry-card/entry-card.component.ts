import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { EntryCard } from '../../../models/entry-card.model';
import { EntryCardType } from '../../../../enums/EntryCardType';
import { TextEntryCardComponent } from '../text-entry-card/text-entry-card.component';
import { ImageEntryCardComponent } from '../image-entry-card/image-entry-card.component';

@Component({
  selector: 'entry-card',
  standalone: true,
  imports: [ ImageEntryCardComponent, TextEntryCardComponent, NgIf ],
  templateUrl: './entry-card.component.html',
  styleUrl: './entry-card.component.scss'
})
export class EntryCardComponent {
  @Input() public entryCard!: EntryCard;
  @Input() public entryEditMode: boolean = false;

  public isTextEntryCard(): boolean {
    return this.entryCard.entryCardType === EntryCardType.Text;
  }

  public isImageEntryCard(): boolean {
    return this.entryCard.entryCardType === EntryCardType.Image;
  }
}
