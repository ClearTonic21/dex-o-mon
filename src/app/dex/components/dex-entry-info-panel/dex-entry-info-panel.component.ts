import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { IgxIconComponent, IgxExpansionPanelBodyComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelTitleDirective, IgxExpansionPanelIconDirective, IgxDividerDirective, IgxListComponent, IgxListItemComponent, IgxDragDropModule } from 'igniteui-angular';
import { EntryScrollBarComponent } from '../../../lib/entry-scroll-bar/entry-scroll-bar.component';
import { ViewEditButtonComponent } from '../../../lib/view-edit-button/view-edit-button.component';
import { EntryCard } from '../../models/entry-card';
import { EntryCardsListComponent } from '../entry-cards-list/entry-cards-list.component';

@Component({
  selector: 'basic-info-panel',
  standalone: true,
  imports: [ EntryCardsListComponent, IgxIconComponent, IgxExpansionPanelBodyComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelTitleDirective, IgxExpansionPanelIconDirective, IgxDividerDirective, IgxListComponent, IgxListItemComponent, IgxDragDropModule, EntryScrollBarComponent, ViewEditButtonComponent],
  templateUrl: './dex-entry-info-panel.component.html',
  styleUrl: './dex-entry-info-panel.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DexEntryInfoPanelComponent implements OnInit {
  @ViewChild(IgxExpansionPanelComponent, { read: IgxExpansionPanelComponent, static: true }) public panel!: IgxExpansionPanelComponent;
  @Input() public basicInfoCards!: EntryCard[];
  @Input() infoEditMode: boolean = false;
  @Input() entryName: string = '';
  public collapsed: boolean = false;

  public ngOnInit(): void {
    this.panel.collapsed = false;
  }

  // component methods
  public addInfoCard(): void {
    this.basicInfoCards.push(new EntryCard (this.basicInfoCards.length, 'New', 'Undefined'));
  }

  public deleteInfoCard(index: number): void {
    if (index >= 0) {
      this.basicInfoCards.splice(index, 1);
    }
  }

  public clickHeader(e: Event): void {
    e.stopPropagation();
    e.preventDefault();
  }
}

