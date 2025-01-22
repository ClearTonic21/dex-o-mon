import { Component, Input } from '@angular/core';
import { ImageCard } from '../../../models/entry-card.model';
import { IgxIconComponent, IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective, IgxListActionDirective, IgxListComponent, IgxListItemComponent } from 'igniteui-angular';

@Component({
  selector: 'image-entry-card',
  standalone: true,
  imports: [IgxIconComponent, IgxInputDirective],
  templateUrl: './image-entry-card.component.html',
  styleUrl: './image-entry-card.component.scss'
})
export class ImageEntryCardComponent {
  @Input() public imageCard!: ImageCard;
  @Input() public editMode: boolean = false;

  public addImageCard(): void {
    this.imageCard.value = 'image';
  }
}
