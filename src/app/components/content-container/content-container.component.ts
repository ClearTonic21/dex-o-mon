import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxButtonModule, IgxIconModule, IgxListComponent, IgxListItemComponent, IgxRippleDirective, IgxSplitterComponent, IgxSplitterPaneComponent, IgxSuffixDirective } from 'igniteui-angular';
import { DexEntry } from '../../dex/models/dex-entry.model';
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
  imports: [ NgClass, IgxSuffixDirective, IgxRippleDirective, IgxListComponent, IgxListItemComponent, IgxSplitterComponent,  IgxSplitterPaneComponent, IgxButtonModule, IgxIconModule, DexEntryComponent],
  templateUrl: './content-container.component.html',
  styleUrl: './content-container.component.scss',
})
export class DexoContentContainerComponent implements OnInit {
  @ViewChild('dexEntryContainer') public dexEntryContainer!: DexEntryComponent;
  private dexEntries = ExampleDexEntries.dexEntries;
  public selected: number = 0;
  public selectedDexEntry!: DexEntry;
  public collapsed: boolean = false;

  public navItems: NavigationItem[] = [];

  public ngOnInit(): void {
    this.dexEntries.forEach(de => {
      this.navItems.push(new NavigationItem(de))
    });
    this.navItems[0].selected = true;
    this.selectedDexEntry = this.navItems[0].object;
  }

  public onSelect(item: { entryNumber: number}) {
    if (this.selected === item.entryNumber) {
      return;
    }
    this.navItems[item.entryNumber].selected = true;
    this.navItems[this.selected].selected = false;
    this.selected = item.entryNumber;
    this.selectedDexEntry = this.dexEntries[item.entryNumber];
    this.dexEntryContainer.setDexEntry(this.selectedDexEntry);
  }

  public toggleNavDrawer() {
    this.collapsed = !this.collapsed;
  }
}