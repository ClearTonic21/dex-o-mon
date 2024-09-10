import { Component, ElementRef, Input, OnInit, Output, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { IDragBaseEventArgs, IDragMoveEventArgs, IgxButtonGroupComponent, IgxDividerDirective, IgxDragDirective, IgxDragDropModule, IgxDragLocation, IgxExpansionPanelBodyComponent, IgxExpansionPanelComponent, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelHeaderComponent, IgxExpansionPanelIconDirective, IgxExpansionPanelTitleDirective, IgxIconComponent, IgxListComponent, IgxListItemComponent } from 'igniteui-angular';
import { EntryScrollBarComponent } from "../../../lib/entry-scroll-bar/entry-scroll-bar.component";
import { ViewEditButtonComponent } from "../../../lib/view-edit-button/view-edit-button.component";
import { EntryCard, ImageCard, InfoSection } from '../../models/entry-card';
import { DexEntryInfoPanelComponent } from '../dex-entry-info-panel/dex-entry-info-panel.component';
import { EntryCardsListComponent } from "../entry-cards-list/entry-cards-list.component";

@Component({
  selector: 'dex-entry',
  standalone: true,
  imports: [IgxIconComponent, IgxButtonGroupComponent, IgxExpansionPanelBodyComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelTitleDirective, IgxExpansionPanelIconDirective, IgxDividerDirective, IgxListComponent, IgxListItemComponent, IgxDragDropModule, EntryScrollBarComponent, ViewEditButtonComponent, DexEntryInfoPanelComponent, EntryCardsListComponent],
  templateUrl: './dex-entry.component.html',
  styleUrl: './dex-entry.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DexEntryComponent {
  @ViewChild('cardListContainer', { read: ElementRef }) public cardListContainer!: ElementRef;
  @ViewChildren('dragDirRef', { read: IgxDragDirective }) public dragDirs!: QueryList<IgxDragDirective>;
  @Output() editing: boolean = false;
  // @Input() public dexEntry!: DexEntry;

  // public entryGuid!: Guid;
  // public entryNumber!: number;
  // public name!: string;
  // public iconSrc: string = `${DexoIcon.Image}`;
  // public imageSrc: string = `${DexoIcon.Image}`
  // public primaryInformation =

  public dexEntryCards: EntryCard[] = [
    new EntryCard( 0, 'Moves', 'Hidden Power, Power Trip, Stored Energy' ),
    new EntryCard( 1, 'Ability 1', 'Levitate' ),
  ];

  public imageCards: ImageCard[] = [
    new ImageCard( 0, 'New'),
    new ImageCard( 1, '../../../../../public/SPINOMIRE.png'),
  ];

  public dexBasicInfoCards: EntryCard[] = [
    new EntryCard(0, 'Name', 'Unown'),
    new EntryCard( 1, 'Type', 'Psychic' ),
    new EntryCard( 2, 'Category', 'The Symbol Pokémon' ),
  ];

  public editMode: boolean = false;

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
