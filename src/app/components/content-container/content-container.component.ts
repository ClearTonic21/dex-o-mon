import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxButtonModule, IgxFlexDirective, IgxIconModule, IgxListComponent, IgxListItemComponent, IgxNavDrawerItemDirective, IgxNavigationDrawerComponent, IgxNavigationDrawerModule, IgxRippleDirective } from 'igniteui-angular';
import { DexoFooterComponent } from "../footer/footer.component";
import { DexoHeaderComponent } from "../header/header.component";
import { DexEntry } from '../../dex/models/dex-entry';
import { DexEntryComponent } from "../../dex/components/dex-entry/dex-entry.component";
import { ExampleDexEntries } from '../../models/example-dex-entries';
import { NgClass } from '@angular/common';

export class NavigationItem {
  selected: boolean = false;
  object: any;

  constructor(object: any) {
    this.object = object;
  }
}

@Component({
  selector: 'dexo-content-container',
  standalone: true,
  templateUrl: './content-container.component.html',
  styleUrl: './content-container.component.scss',
  imports: [ NgClass, IgxRippleDirective, IgxListComponent, IgxListItemComponent, IgxButtonModule, IgxIconModule, IgxNavigationDrawerModule, IgxNavDrawerItemDirective, IgxFlexDirective, DexoFooterComponent, DexoHeaderComponent, DexEntryComponent]
})
export class DexoContentContainerComponent implements OnInit {
  public selected!: number;
  public selectedItem!: NavigationItem;
  public selectedDexEntry!: DexEntry;
  public collapsed: boolean = false;
  private dexEntries = ExampleDexEntries.dexEntries;

  public navItems: NavigationItem[] = [];

  public ngOnInit(): void {
    this.dexEntries.forEach(de => {
      this.navItems.push(new NavigationItem(de))
    });
    this.navItems[0].selected = true;
    this.selected = 0;
    this.selectedItem = this.navItems[0];
    this.selectedDexEntry = this.navItems[0].object;
  }

  public onSelect(item: { entryNumber: number}) {
    if (this.selected === item.entryNumber) {
      return;
    }
    this.navItems[item.entryNumber].selected = true;
    this.navItems[this.selected].selected = false;

    this.selected = item.entryNumber;
    this.selectedItem = this.navItems.filter(ni => ni.object.entryNumber === item.entryNumber)[0];
    this.selectedDexEntry = this.dexEntries[item.entryNumber];
  }

  public toggleNavDrawer() {
    this.collapsed = !this.collapsed;
  }
}