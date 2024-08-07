import { Component } from '@angular/core';
import { INavigation } from '../../../lib/dexo-navigation-bar/dexo-scroll-bar.component';

@Component({
  selector: 'dex-entry-card',
  standalone: true,
  imports: [],
  templateUrl: './dex-entry-card.component.html',
  styleUrl: './dex-entry-card.component.scss'
})
export class DexEntryCardComponent {
  public categoriesCards: INavigation[] = [
    { id: 'general-card', name: 'General', displayName: 'General' },
    { id: 'display-card', name: 'Display', displayName:'Display' },
    { id: 'behavior-card', name: 'Behavior', displayName: 'Behavior' },
    {
      id: 'information-card',
      name: 'Information',
      displayName: 'Information'
    }
  ];
}
