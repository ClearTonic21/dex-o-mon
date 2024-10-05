import { Component, Input } from '@angular/core';
import { EntryCard } from '../../models/entry-card.model';

@Component({
  selector: 'entry-card',
  standalone: true,
  imports: [],
  templateUrl: './entry-card.component.html',
  styleUrl: './entry-card.component.scss'
})
export class DexEntryCardComponent {
  @Input() public entryCard!: EntryCard;
}
