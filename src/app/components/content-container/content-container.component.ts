import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxButtonModule, IgxFlexDirective, IgxIconModule, IgxNavDrawerItemDirective, IgxNavigationDrawerComponent, IgxNavigationDrawerModule } from 'igniteui-angular';
import { DexoFooterComponent } from "../footer/footer.component";
import { DexoHeaderComponent } from "../header/header.component";
import { DexEntry } from '../../dex/models/dex-entry';
import { DexEntryComponent } from "../../dex/components/dex-entry/dex-entry.component";

@Component({
  selector: 'dexo-content-container',
  standalone: true,
  templateUrl: './content-container.component.html',
  styleUrl: './content-container.component.scss',
  imports: [IgxButtonModule, IgxIconModule, IgxNavigationDrawerModule, IgxNavDrawerItemDirective, IgxFlexDirective, DexoFooterComponent, DexoHeaderComponent, DexEntryComponent]
})
export class DexoContentContainerComponent implements OnInit {
  @ViewChild(IgxNavigationDrawerComponent, { static: true }) public navDrawer!: IgxNavigationDrawerComponent;
  public open: boolean = true;
  public selected!: number;
  // public selectedEntry!: DexEntry;

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

  public ngOnInit(): void {
    this.selected = this.entryItems[0].entryNumber;
    // this.selectedEntry = this.entryItems[0];
  }

  public navigate(item: { entryNumber: number}) {
    this.selected = item.entryNumber;
    const index = this.entryItems.find( ei => ei.entryNumber === item.entryNumber)
    // this.selectedEntry = this.entryItems.filter( ei => ei.entryNumber === item.entryNumber)[0] || undefined;
  }
}