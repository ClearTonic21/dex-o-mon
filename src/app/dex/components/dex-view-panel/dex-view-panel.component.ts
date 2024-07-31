import { Component } from '@angular/core';
import { DexEntrySectionComponent } from "../dex-entry-section/dex-entry-section.component";

@Component({
  selector: 'dex-view-panel',
  standalone: true,
  imports: [DexEntrySectionComponent],
  templateUrl: './dex-view-panel.component.html',
  styleUrl: './dex-view-panel.component.scss'
})
export class DexViewPanelComponent {

}
