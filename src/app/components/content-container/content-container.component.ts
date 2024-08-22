import { Component, ViewChild } from '@angular/core';
import { IgxButtonModule, IgxFlexDirective, IgxIconModule, IgxNavDrawerItemDirective, IgxNavigationDrawerComponent, IgxNavigationDrawerModule } from 'igniteui-angular';
import { DexoFooterComponent } from "../footer/footer.component";
import { DexViewPanelComponent } from "../../dex/components/dex-view-panel/dex-view-panel.component";
import { DexoHeaderComponent } from "../header/header.component";
import { DexEntry } from '../../dex/models/dex-entry';

@Component({
  selector: 'dexo-content-container',
  standalone: true,
  templateUrl: './content-container.component.html',
  styleUrl: './content-container.component.scss',
  imports: [IgxButtonModule, IgxIconModule, IgxNavigationDrawerModule, IgxNavDrawerItemDirective, IgxFlexDirective, DexoFooterComponent, DexViewPanelComponent, DexoHeaderComponent]
})
export class DexoContentContainerComponent  {
  @ViewChild(IgxNavigationDrawerComponent, { static: true }) public navDrawer!: IgxNavigationDrawerComponent;
  public open: boolean = true;
  public selected: number = 0;

  public entryItems: DexEntry[] = [
    new DexEntry(0,   'Dex Entry'),
    new DexEntry(1,   'Dex Entry'),
    new DexEntry(2,   'Dex Entry'),
    new DexEntry(3,   'Dex Entry'),
    new DexEntry(4,   'Dex Entry'),
    new DexEntry(5,   'Dex Entry'),
    new DexEntry(6,   'Dex Entry'),
    new DexEntry(7,   'Dex Entry'),
    new DexEntry(8,   'Dex Entry'),
    new DexEntry(9,   'Dex Entry'),
    new DexEntry(10,  'Dex Entry'),
    new DexEntry(11,  'Dex Entry'),
    new DexEntry(12,  'Dex Entry'),
    new DexEntry(13,  'Dex Entry'),
    new DexEntry(14,  'Dex Entry'),
    new DexEntry(15,  'Dex Entry'),
    new DexEntry(16,  'Dex Entry'),
    new DexEntry(17,  'Dex Entry'),
    new DexEntry(18,  'Dex Entry'),
    new DexEntry(19,  'Dex Entry'),
    new DexEntry(20,  'Dex Entry'),
    new DexEntry(21,  'Dex Entry'),
    new DexEntry(22,  'Dex Entry'),
    new DexEntry(23,  'Dex Entry'),
    new DexEntry(24,  'Dex Entry'),
  ];

  public navigate(item: { entryNumber: number}) {
    this.selected = item.entryNumber;
  }
}