import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { IDragBaseEventArgs, IDragMoveEventArgs, IgxDragDirective, IgxDragDropModule, IgxDragLocation, IgxIconComponent, IgxListActionDirective, IgxListComponent, IgxListItemComponent } from 'igniteui-angular';
import { EntryScrollBarComponent } from "../../../lib/entry-scroll-bar/entry-scroll-bar.component";
import { ViewEditButtonComponent } from "../../../lib/view-edit-button/view-edit-button.component";
import { EntryCard, ImageCard } from '../../models/entry-card';

@Component({
  selector: 'dex-entry',
  standalone: true,
  imports: [IgxIconComponent, IgxListComponent, IgxListItemComponent, IgxDragDropModule, EntryScrollBarComponent, ViewEditButtonComponent],
  templateUrl: './dex-entry.component.html',
  styleUrl: './dex-entry.component.scss'
})
export class DexEntryComponent {
  @ViewChild('cardListContainer', { read: ElementRef }) public cardListContainer!: ElementRef;
  @ViewChildren('dragDirRef', { read: IgxDragDirective }) public dragDirs!: QueryList<IgxDragDirective>;

  public entryCards: EntryCard[] = [
    new EntryCard( 0, 'Name', 'Unown' ),
    new EntryCard( 1, 'Type', 'Psychic' ),
    new EntryCard( 2, 'Category', 'The Symbol Pokémon' ),
  ];

  public imageCards: ImageCard[] = [
    new ImageCard( 0, 'New'),
    new ImageCard( 1, 'New'),
  ];

  public newIndex: any = null;
  public animationDuration = 0.3;
  private listItemHeight = 92;
  public editMode: boolean = false;

  // Drag & Drop methods

  public getDragDirectiveRef(id: number): any {
    return this.dragDirs.find((item) => item.data.id === id);
  }

  public onDragStart(event: IDragBaseEventArgs, dragIndex: number) {
    // Record the current index as basis for moving up/down.
    this.newIndex = dragIndex;
    // Sets specific class when dragging.
    event.owner.data.dragged = true;
  }

  public onDragEnd(event: IDragBaseEventArgs, itemIndex: number) {
    if (this.newIndex !== null) {
      // When we have moved the dragged element up/down, animate it to its new location.
      const moveDown = this.newIndex > itemIndex;
      // If the new position is below add the height moved down, otherwise subtract it.
      const prefix = moveDown ? 1 : -1;
      // The height that the new position differs from the current. We know that each item is 55px height.
      const movedHeight = prefix * Math.abs(this.newIndex - itemIndex) * this.listItemHeight;
      const originLocation = event.owner.originLocation;
      event.owner.transitionTo(
        new IgxDragLocation(originLocation.pageX, originLocation.pageY + movedHeight),
        { duration: this.animationDuration }
      );
    } else {
      // Otherwise animate it to its original position, since it is unchanged.
      event.owner.transitionToOrigin({ duration: this.animationDuration });
    }
  }

  public onTransitioned(event: IDragBaseEventArgs, itemIndex: number) {
    // We can have other items transitioned when they move to free up space where the dragged element would be.
    if (event.owner.data.dragged && this.newIndex != null && this.newIndex !== itemIndex) {
      // If the element finished transitioning is the one were dragging,
      // We can update all elements their new position in the list.
      this.shiftElements(itemIndex, this.newIndex);
      event.owner.setLocation(event.owner.originLocation);
      this.newIndex = null;
    }
    // Disables the specific class when dragging.
    event.owner.data.dragged = false;
  }

  public onDragMove(event: IDragMoveEventArgs, itemIndex: number) {
    const containerPosY = this.cardListContainer.nativeElement.getBoundingClientRect().top;
    // Relative position of the dragged element to the list container.
    const relativePosY = event.nextPageY - containerPosY;

    let newIndex = Math.floor(relativePosY / this.listItemHeight);
    newIndex = newIndex < 0 ? 0 : (newIndex >= this.entryCards.length ? this.entryCards.length - 1 : newIndex);
    if (newIndex === this.newIndex) {
      // If the current new index is unchanged do nothing.
      return;
    }

    const movingDown = newIndex > itemIndex;
    if (movingDown && newIndex > this.newIndex ||
      (!movingDown && newIndex < this.newIndex && newIndex !== itemIndex)) {
      // If we are moving the dragged element down and the new index is bigger than the current
      // this means that the element we are stepping into is not shifted up and should be shifted.
      // Same if we moving the dragged element up and the new index is smaller than the current.
      const elementToMove = this.getDragDirectiveRef(this.entryCards[newIndex].index);
      const currentLocation = elementToMove.location;
      const prefix = movingDown ? -1 : 1;
      elementToMove.transitionTo(
        new IgxDragLocation(currentLocation.pageX, currentLocation.pageY + prefix * this.listItemHeight),
        { duration: this.animationDuration }
      );
    } else {
      // Otherwise if are moving up but the new index is still bigger than the current, this means that
      // the item we are stepping into is already shifted and should be returned to its original position.
      // Same if we are moving down and the new index is still smaller than the current.
      const elementToMove = this.getDragDirectiveRef(this.entryCards[this.newIndex].index);
      elementToMove.transitionToOrigin({ duration: this.animationDuration });
    }

    this.newIndex = newIndex;
  }

  private shiftElements(draggedIndex: number, targetIndex: number) {
    // Move the dragged element in DOM to the new position.
    const movedElem = this.entryCards.splice(draggedIndex, 1);
    this.entryCards.splice(targetIndex, 0, movedElem[0]);

    this.dragDirs.forEach((dir) => {
      if (this.entryCards[targetIndex].index !== dir.data.index) {
        // Reset each element its location since it will be repositioned in the DOM except the element we drag.
        dir.setLocation(dir.originLocation);
        dir.data.shifted = false;
      }
    });
  }

  // component methods
  public addEntryCard(): void {
    this.entryCards.push(new EntryCard (this.entryCards.length, 'New', 'Undefined'));
  }

  public deleteEntryCard(index: number): void {
    if (index >= 0) {
      this.entryCards.splice(index, 1);
    }
  }

  public addImageCard(): void {
    this.imageCards.push( new ImageCard( this.imageCards.length, 'New'));
  }
}
