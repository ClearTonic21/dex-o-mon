import { Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { IgxIconComponent, IgxExpansionPanelBodyComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelTitleDirective, IgxExpansionPanelIconDirective, IgxDragDropModule, IgxDragDirective, IgxListModule, IDragBaseEventArgs, IgxDragLocation, IDragMoveEventArgs } from 'igniteui-angular';
import { EntryCard } from '../../models/entry-card.model';
import { BasicInfoCardListComponent } from '../basic-info-card-list/basic-info-card-list.component';

@Component({
  selector: 'basic-info-panel',
  standalone: true,
  imports: [IgxDragDropModule, IgxListModule, IgxIconComponent, IgxExpansionPanelBodyComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelTitleDirective, IgxExpansionPanelIconDirective, IgxDragDropModule, BasicInfoCardListComponent],
  templateUrl: './basic-info-panel.component.html',
  styleUrl: './basic-info-panel.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class BasicInfoPanelComponent implements OnInit {
  @ViewChild(IgxExpansionPanelComponent, { read: IgxExpansionPanelComponent, static: true }) public panel!: IgxExpansionPanelComponent;
  @Input({ required: true }) public basicInfoCards: EntryCard[] = [];
  @Input() infoEditMode: boolean = false;
  @Input() entryName: string = '';
  public collapsed: boolean = false;

  public ngOnInit(): void {
    this.panel.collapsed = false;
  }

  // component method
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

