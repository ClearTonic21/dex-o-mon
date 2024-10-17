import { Component, Input } from '@angular/core';
import { EntryCard } from '../../../models/entry-card.model';
import { IgxIconComponent, IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective, IgxListActionDirective, IgxListComponent, IgxListItemComponent } from 'igniteui-angular';
import { NgIf } from '@angular/common';

@Component({
  selector: 'image-entry-card',
  standalone: true,
  imports: [ NgIf, IgxListActionDirective, IgxIconComponent, IgxInputDirective, IgxInputGroupComponent, IgxListComponent, IgxListItemComponent, IgxLabelDirective ],
  templateUrl: './image-entry-card.component.html',
  styleUrl: './image-entry-card.component.scss'
})
export class ImageEntryCardComponent {
  @Input() public imageCard!: EntryCard;
  @Input() public editMode: boolean = false;

  public addImageCard(): void {
    this.imageCard.value = 'image';
  }
}
