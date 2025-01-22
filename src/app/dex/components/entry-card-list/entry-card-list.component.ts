
import { Component, ElementRef, Input, QueryList, ViewChild, ViewChildren, signal } from '@angular/core';
import { BlockScrollStrategy, ConnectedPositioningStrategy, HorizontalAlignment, IDragBaseEventArgs, IDragMoveEventArgs, IgxDividerDirective, IgxDragDirective, IgxDragDropModule, IgxDragLocation, IgxDropDirective, IgxDropDownComponent, IgxDropDownItemComponent, IgxDropDownModule, IgxEmptyListTemplateDirective, IgxIconComponent, IgxIconModule, IgxListActionDirective, IgxListComponent, IgxListItemComponent, IgxListModule, IgxToggleModule, ISelectionEventArgs, OverlaySettings, Point, VerticalAlignment } from 'igniteui-angular';
import { EntryCard} from '../../models/entry-card.model';
import { CommonModule, NgClass } from '@angular/common';
import { EntryActions, EntryActionType } from '../../models/entry-actions.model';
import { EntryCardType } from '../../../enums/EntryCardType';
import { EntryCardComponent } from '../entry-cards/entry-card/entry-card.component';

@Component({
  selector: 'entry-card-list',
  standalone: true,
  imports: [CommonModule, NgClass, IgxListActionDirective, IgxDropDirective, IgxDropDownModule, IgxIconModule, IgxEmptyListTemplateDirective, IgxListModule, IgxToggleModule, IgxDragDropModule, EntryCardComponent],
  templateUrl: './entry-card-list.component.html',
  styleUrl: './entry-card-list.component.scss',
})
export class EntryCardListComponent {
  @ViewChild('cardListContainer', { read: ElementRef }) public cardListContainer!: ElementRef;
  @ViewChild('actionDropdown') public actionDropdown!: IgxDropDownComponent;
  @ViewChild('entryCardTypeDropdown') public entryCardTypeDropdown!: IgxDropDownComponent;
  @ViewChildren('dragDirRef', { read: IgxDragDirective }) public dragDirs!: QueryList<IgxDragDirective>;
  @Input() listEditMode: boolean = false;
  @Input() entryCards: EntryCard[] = [];
  @Input() infoColumn: boolean = false;

  public entryActions: EntryActions[] = [
    { value: EntryActionType.Switch, label: 'Switch Entry Type', iconName: 'flip' },
    { value: EntryActionType.Duplicate, label: 'Duplicate', iconName: 'control_point_duplicate' },
    { value: EntryActionType.Delete, label: 'Delete', iconName: 'delete', isDelete: true }
  ];

  public entryCardClicked = signal<EntryCard>(this.entryCards[0]);
  public entryActionTypes = EntryActionType;
  public entryCardTypes: EntryCardType[] = Object.values(EntryCardType);

  public newIndex: any = null;
  public animationDuration = 0.6;
  private _listItemHeight = 93;

  // component method
  public editCard(entry: EntryCard): void {

  }

  public addEntryCard(): void {
    this.entryCards.push(new EntryCard (this.entryCards.length, 'New', 'Undefined',));
  }

  public deleteEntryCard(): void {
    const indexToDelete = this.entryCardClicked().index
    if (indexToDelete >= 0) {
      this.entryCards.splice(indexToDelete, 1);
    }
  }

  public duplicateEntryCard(): void {
    if (this.entryCardClicked().index >= 0) {
      this.entryCards.push(new EntryCard (
        this.entryCards.length, this.entryCardClicked().title,
        this.entryCardClicked().value,
        this.entryCardClicked().entryCardType
      ));
    }
  }

  public switchEntryCardType(): void {

  }

  // public get clickedEntryCardType(): EntryCardType {
  //   return this.entryCardClicked().entryCardType;
  // }

  // Drag & Drop methods
  public getDragDirectiveRef(id: number): any {
    return this.dragDirs.find((item) => item.data.id === id);
  }

  public onDragStart(event: IDragBaseEventArgs, dragIndex: number) {
    if (!this.listEditMode) {
      return;
    }
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
      const movedHeight = prefix * Math.abs(this.newIndex - itemIndex) * this._listItemHeight;
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

    let newIndex = Math.floor(relativePosY / this._listItemHeight);
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
        new IgxDragLocation(currentLocation.pageX, currentLocation.pageY + prefix * this._listItemHeight),
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
}
