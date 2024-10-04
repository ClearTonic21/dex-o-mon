import { Component, ElementRef, Signal, Input, OnInit, QueryList, signal, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { IgxButtonGroupComponent, IgxDividerDirective, IgxDragDirective, IgxEmptyListTemplateDirective, IgxIconComponent, IgxListComponent, IgxListItemComponent } from 'igniteui-angular';
import { EntryScrollBarComponent } from "../../../lib/entry-scroll-bar/entry-scroll-bar.component";
import { ViewEditButtonComponent } from "../../../lib/view-edit-button/view-edit-button.component";
import { EntryCard, ImageCard } from '../../models/entry-card.model';
import { DexEntryInfoPanelComponent } from '../dex-entry-info-panel/dex-entry-info-panel.component';
import { EntryCardsListComponent } from "../dex-entry-cards-list/dex-entry-cards-list.component";
import { DexEntry } from '../../models/dex-entry.model';

@Component({
  selector: 'dex-entry',
  standalone: true,
  imports: [IgxIconComponent, IgxButtonGroupComponent, IgxEmptyListTemplateDirective, IgxDragDirective, IgxDividerDirective, IgxListComponent, IgxListItemComponent, EntryScrollBarComponent, ViewEditButtonComponent, DexEntryInfoPanelComponent, EntryCardsListComponent],
  templateUrl: './dex-entry.component.html',
  styleUrl: './dex-entry.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DexEntryComponent implements OnInit{
  @ViewChild('cardListContainer', { read: ElementRef }) public cardListContainer!: ElementRef;
  @ViewChild('viewEditControls', { read: ElementRef }) public viewEditControls!: ViewEditButtonComponent;
  @Input() public initialDexEntry!: DexEntry;
  public dexEntry = signal(new DexEntry(0, 'New'));
  public dexEntryName = signal('New');
  public dexEditMode = signal(true);

  ngOnInit(): void {
    this.dexEntry.set(this.initialDexEntry);
  }

  // component methods
  public addEntryCard(): void {
    this.dexEntry().entryCards!.push(new EntryCard (this.dexEntry().entryCards!.length, 'New', 'Undefined'));
  }

  public deleteEntryCard(index: number): void {
    if (index >= 0) {
      this.dexEntry().entryCards!.splice(index, 1);
    }
  }

  public addImageCard(): void {
    this.dexEntry().imageCards!.push( new ImageCard( this.dexEntry().imageCards!.length, 'New'));
  }

  public enterEditMode(ev: boolean): void {
    this.dexEditMode.set(ev);
  }

  public setDexEntry(selectedDexEntry: DexEntry)  {
    this.dexEntry.set(selectedDexEntry);
  }
}


