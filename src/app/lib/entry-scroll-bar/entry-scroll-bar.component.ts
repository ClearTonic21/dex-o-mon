import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { EntryCard } from '../../dex/models/entry-card.model';

export interface INavigation {
  id: number;
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
  @Input() public scrollbarList: EntryCard[] = [];
  @Input() public selectedItemCount!: number;
  @Input() public batchedFilter: string[] = [];
  public hasItems: boolean = false;
  public isBatchEdit: boolean = false;
  public selectedNav: string = '';
  public navList: INavigation[] = [];

  public ngOnChanges(): void {
    this.navList = this.scrollbarList?.map((item) => ({ id: item.index, title: item.title }));
    this.selectedNav = this.scrollbarList[0]?.title || '';
  }

  public scrollTo(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }
}
