import { Component, Input } from '@angular/core';
import { EntryCard } from '../../models/entry-card.model';
import { NgIf } from '@angular/common';
import { IgxInputGroupComponent, IgxLabelDirective, IgxListActionDirective, IgxListItemComponent } from 'igniteui-angular';

@Component({
  selector: 'entry-card',
  standalone: true,
  imports: [ NgIf, IgxListActionDirective, IgxInputGroupComponent, IgxListItemComponent, IgxLabelDirective ],
  templateUrl: './entry-card.component.html',
  styleUrl: './entry-card.component.scss'
})
export class DexEntryCardComponent {
  @Input() public entryCard!: EntryCard;
  @Input() editMode: boolean = false;
}
