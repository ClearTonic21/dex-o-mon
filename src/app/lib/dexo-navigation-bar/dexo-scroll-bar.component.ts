import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface INavigation {
  id: string;
  name: string;
  displayName: string;
}

@Component({
  selector: 'dexo-scroll-bar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './dexo-scroll-bar.component.html',
  styleUrl: './dexo-scroll-bar.component.scss'
})
export class DexoScrollBarComponent {
  @Input() public scrollbarList: INavigation[] = [];
  @Input() public selectedItemCount!: number;
  @Input() public batchedFilter: string[] = [];
  public hasItems: boolean = false;
  public isBatchEdit: boolean = false;
  public selectedNav: string = '';
  public navList: INavigation[] = [];

  public ngOnChanges(): void {
    this.selectedNav = '';
    this.hasItems = this.selectedItemCount > 0;
    this.isBatchEdit = this.selectedItemCount > 1;
    this.navList = this.isBatchEdit
      ? this.scrollbarList.filter((item: INavigation) => this.batchedFilter.indexOf(item.id) === -1)
      : this.scrollbarList;
    this.selectedNav = this.navList[0]?.id || '';
  }

  public scrollTo(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }
}
