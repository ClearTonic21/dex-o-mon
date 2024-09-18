import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxButtonModule, IgxFlexDirective, IgxIconModule, IgxNavDrawerItemDirective, IgxNavigationDrawerComponent, IgxNavigationDrawerModule } from 'igniteui-angular';
import { DexoFooterComponent } from "../footer/footer.component";
import { DexoHeaderComponent } from "../header/header.component";
import { DexEntry } from '../../dex/models/dex-entry';
import { DexEntryComponent } from "../../dex/components/dex-entry/dex-entry.component";
import { ExampleDexEntries } from '../../models/example-dex-entries';

@Component({
  selector: 'dexo-content-container',
  standalone: true,
  templateUrl: './content-container.component.html',
  styleUrl: './content-container.component.scss',
  imports: [IgxButtonModule, IgxIconModule, IgxNavigationDrawerModule, IgxNavDrawerItemDirective, IgxFlexDirective, DexoFooterComponent, DexoHeaderComponent, DexEntryComponent]
})
export class DexoContentContainerComponent implements OnInit {
  @ViewChild(IgxNavigationDrawerComponent, { static: true }) public navDrawer!: IgxNavigationDrawerComponent;
  public collapsed: boolean = true;
  public selected!: number;
  // public selectedEntry!: DexEntry;

  public entryItems: DexEntry[] = ExampleDexEntries.dexEntries;

  public ngOnInit(): void {
    this.selected = this.entryItems[0].entryNumber;
    // this.selectedEntry = this.entryItems[0];
  }

  public navigate(item: { entryNumber: number}) {
    this.selected = item.entryNumber;
    const index = this.entryItems.find( ei => ei.entryNumber === item.entryNumber)
    // this.selectedEntry = this.entryItems.filter( ei => ei.entryNumber === item.entryNumber)[0] || undefined;
  }

  public toggleNavDrawer() {
    this.collapsed = !this.collapsed;
    this.navDrawer.toggle();
  }
}