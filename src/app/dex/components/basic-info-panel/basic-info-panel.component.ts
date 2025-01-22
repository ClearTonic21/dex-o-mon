import { Component, Input, OnInit, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { IgxIconComponent, IgxExpansionPanelBodyComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelTitleDirective, IgxExpansionPanelIconDirective, IgxDragDropModule, IgxDragDirective } from 'igniteui-angular';
import { EntryCard } from '../../models/entry-card.model';
import { EntryCardListComponent } from '../entry-card-list/entry-card-list.component';

@Component({
  selector: 'basic-info-panel',
  standalone: true,
  imports: [EntryCardListComponent, IgxIconComponent, IgxExpansionPanelBodyComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelTitleDirective, IgxExpansionPanelIconDirective, IgxDragDropModule, IgxDragDirective],
  templateUrl: './basic-info-panel.component.html',
  styleUrl: './basic-info-panel.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class BasicInfoPanelComponent implements OnInit {
  @ViewChildren('dragDirRef', { read: IgxDragDirective }) public dragDirs!: QueryList<IgxDragDirective>;
  @ViewChild(IgxExpansionPanelComponent, { read: IgxExpansionPanelComponent, static: true }) public panel!: IgxExpansionPanelComponent;
  @Input() public basicInfoCards: EntryCard[] = [];
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

