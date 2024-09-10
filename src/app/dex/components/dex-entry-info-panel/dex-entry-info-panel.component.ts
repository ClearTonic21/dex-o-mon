import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { IgxIconComponent, IgxExpansionPanelBodyComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelTitleDirective, IgxExpansionPanelIconDirective, IgxDividerDirective, IgxListComponent, IgxListItemComponent, IgxDragDropModule } from 'igniteui-angular';
import { EntryScrollBarComponent } from '../../../lib/entry-scroll-bar/entry-scroll-bar.component';
import { ViewEditButtonComponent } from '../../../lib/view-edit-button/view-edit-button.component';
import { InfoSection } from '../../models/entry-card';

@Component({
  selector: 'entry-info-panel',
  standalone: true,
  imports: [IgxIconComponent, IgxExpansionPanelBodyComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelTitleDirective, IgxExpansionPanelIconDirective, IgxDividerDirective, IgxListComponent, IgxListItemComponent, IgxDragDropModule, EntryScrollBarComponent, ViewEditButtonComponent],
  templateUrl: './dex-entry-info-panel.component.html',
  styleUrl: './dex-entry-info-panel.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DexEntryInfoPanelComponent implements OnInit{
  @Input() public infoSections!: InfoSection[];
  @ViewChild(IgxExpansionPanelComponent, { read: IgxExpansionPanelComponent, static: true }) public panel!: IgxExpansionPanelComponent;

  public ngOnInit(): void {
    this.panel.collapsed = false;
  }

  public addInfoSec(): void {
    this.infoSections.push(new InfoSection(this.infoSections?.length, 'New', ''))
  }
}

