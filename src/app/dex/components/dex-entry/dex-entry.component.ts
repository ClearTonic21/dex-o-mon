import { Component, ElementRef, Input, OnChanges, OnInit, Output, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { IgxButtonGroupComponent, IgxDividerDirective, IgxDragDirective, IgxDragDropModule, IgxExpansionPanelBodyComponent, IgxExpansionPanelComponent, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelHeaderComponent, IgxExpansionPanelIconDirective, IgxExpansionPanelTitleDirective, IgxIconComponent, IgxListComponent, IgxListItemComponent } from 'igniteui-angular';
import { EntryScrollBarComponent } from "../../../lib/entry-scroll-bar/entry-scroll-bar.component";
import { ViewEditButtonComponent } from "../../../lib/view-edit-button/view-edit-button.component";
import { EntryCard, ImageCard } from '../../models/entry-card';
import { DexEntryInfoPanelComponent } from '../dex-entry-info-panel/dex-entry-info-panel.component';
import { EntryCardsListComponent } from "../entry-cards-list/entry-cards-list.component";
import { DexoIcon } from '../../../enums/DexoIcon';
import { DexEntry } from '../../models/dex-entry';
import { Guid } from '../../../models/guid';

@Component({
  selector: 'dex-entry',
  standalone: true,
  imports: [IgxIconComponent, IgxButtonGroupComponent, IgxExpansionPanelBodyComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelTitleDirective, IgxExpansionPanelIconDirective, IgxDividerDirective, IgxListComponent, IgxListItemComponent, IgxDragDropModule, EntryScrollBarComponent, ViewEditButtonComponent, DexEntryInfoPanelComponent, EntryCardsListComponent],
  templateUrl: './dex-entry.component.html',
  styleUrl: './dex-entry.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DexEntryComponent implements OnChanges, OnInit{
  @ViewChild('cardListContainer', { read: ElementRef }) public cardListContainer!: ElementRef;
  @ViewChildren('dragDirRef', { read: IgxDragDirective }) public dragDirs!: QueryList<IgxDragDirective>;
  @ViewChild('viewEditControls', { read: ElementRef }) public viewEditControls!: ViewEditButtonComponent;
  @Output() editMode: boolean = false;
  @Input() public dexEntry!: DexEntry;

  @Input() public entryGuid!: Guid;
  @Input() public entryNumber!: number;
  @Input() public name!: string;
  @Input() public iconSrc: string = `${DexoIcon.Image}`;
  @Input() public imageSrc: string = `${DexoIcon.Image}`
  @Input() public dexBasicInfoCards: EntryCard[] = [];
  @Input() public dexEntryCards: EntryCard[] = [];

  public imageCards: ImageCard[] = [
    new ImageCard( 0, 'New'),
    new ImageCard( 1, '../../../../../public/SPINOMIRE.png'),
  ];

  ngOnInit(): void {
    this.entryGuid =  this.dexEntry.guid;
    this.entryNumber =  this.dexEntry.entryNumber;
    this.name = this.dexEntry.name;
    this.iconSrc = `${DexoIcon.Image}`;
    this.imageSrc = `${DexoIcon.Image}`
    this.dexBasicInfoCards = this.dexEntry.basicInfoCards || [new EntryCard( 0, 'Name', this.dexEntry.name || '')];
    this.dexBasicInfoCards.unshift(new EntryCard( 0, 'Name', this.dexEntry.name || ''))
    this.dexEntryCards = this.dexEntry.entryCards || [];
  }

  ngOnChanges(): void {
    if(this.viewEditControls.editMode) {
      this.editMode = true;
    }
    else {
      this.editMode = false;
    }
  }

  // component methods
  public addEntryCard(): void {
    this.dexEntryCards.push(new EntryCard (this.dexEntryCards.length, 'New', 'Undefined'));
  }

  public deleteEntryCard(index: number): void {
    if (index >= 0) {
      this.dexEntryCards.splice(index, 1);
    }
  }

  public addImageCard(): void {
    this.imageCards.push( new ImageCard( this.imageCards.length, 'New'));
  }
}
