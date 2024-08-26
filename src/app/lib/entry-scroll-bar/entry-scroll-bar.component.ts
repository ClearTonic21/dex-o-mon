import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface INavigation {
  id: string;
  title: string;
}

@Component({
  selector: 'entry-scroll-bar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './entry-scroll-bar.component.html',
  styleUrl: './entry-scroll-bar.component.scss'
})
export class EntryScrollBarComponent {
  @Input() public scrollbarList: any[] = [];
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
