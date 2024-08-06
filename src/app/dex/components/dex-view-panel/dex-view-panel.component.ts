import { Component } from '@angular/core';
import { DexEntryComponent } from "../dex-entry/dex-entry.component";

@Component({
  selector: 'dex-view-panel',
  standalone: true,
  imports: [ DexEntryComponent],
  templateUrl: './dex-view-panel.component.html',
  styleUrl: './dex-view-panel.component.scss'
})
export class DexViewPanelComponent {

}
