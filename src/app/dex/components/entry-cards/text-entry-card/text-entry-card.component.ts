import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { IgxInputGroupComponent, IgxLabelDirective, IgxListActionDirective, IgxListItemComponent } from 'igniteui-angular';
import { EntryCard } from '../../../models/entry-card.model';

@Component({
  selector: 'text-entry-card',
  standalone: true,
  imports: [ NgIf, IgxListActionDirective, IgxInputGroupComponent, IgxListItemComponent, IgxLabelDirective ],
  templateUrl: './text-entry-card.component.html',
  styleUrl: './text-entry-card.component.scss'
})
export class TextEntryCardComponent {
  @Input() public textCard!: EntryCard;
  @Input() public editMode: boolean = false;
}
