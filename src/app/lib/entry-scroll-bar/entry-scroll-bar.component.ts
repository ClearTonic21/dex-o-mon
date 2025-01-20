import { NgClass } from '@angular/common';
import { Component, Input, signal } from '@angular/core';

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
  public navList = signal<INavigation[]>([]);

  public ngOnChanges(): void {
    this.navList.set(this.scrollbarList?.map((item) => ({ id: item.index.toString(), title: item.title })));
    this.selectedNav = this.scrollbarList[0]?.id || '';
  }

  public scrollTo(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }
}
