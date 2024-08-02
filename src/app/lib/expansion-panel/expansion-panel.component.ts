import { Component, ViewChild } from '@angular/core';
import { IgxExpansionPanelBodyComponent, IgxExpansionPanelComponent, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelHeaderComponent, IgxExpansionPanelModule, IgxExpansionPanelTitleDirective } from 'igniteui-angular';

@Component({
  selector: 'dexo-expansion-panel',
  standalone: true,
  imports: [IgxExpansionPanelComponent, IgxExpansionPanelBodyComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelModule],
  templateUrl: './expansion-panel.component.html',
  styleUrl: './expansion-panel.component.scss'
})
export class DexoExpansionPanelComponent {
  @ViewChild(IgxExpansionPanelComponent, { read: IgxExpansionPanelComponent, static: true }) public panel!: IgxExpansionPanelComponent;
}
