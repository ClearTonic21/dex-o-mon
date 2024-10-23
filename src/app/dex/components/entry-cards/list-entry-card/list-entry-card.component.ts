import { Component, Input, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { ConnectedPositioningStrategy, HorizontalAlignment, IgxDropDownComponent, IgxDropDownItemComponent, IgxIconComponent, IgxInputGroupComponent, IgxLabelDirective, IgxListActionDirective, IgxListItemComponent, IgxToggleActionDirective, ISelectionEventArgs, VerticalAlignment } from 'igniteui-angular';
import { EntryCard, ListCard } from '../../../models/entry-card.model';

@Component({
  selector: 'list-entry-card',
  standalone: true,
  imports: [ NgIf, IgxIconComponent, IgxDropDownComponent, IgxDropDownItemComponent, IgxToggleActionDirective, IgxInputGroupComponent, IgxLabelDirective, IgxListActionDirective, IgxListItemComponent ],
  templateUrl: './list-entry-card.component.html',
  styleUrl: './list-entry-card.component.scss'
})
export class ListEntryCardComponent implements OnInit {
  @Input() public listCard!: ListCard;
  @Input() public editMode: boolean = false;
  public selected: string= '';

  ngOnInit(): void {
    this.selected = this.listCard.value;
  }

  public dropdownOverlaySettings = {
    positionStrategy: new ConnectedPositioningStrategy({
      horizontalStartPoint: HorizontalAlignment.Right + 0.025,
      verticalStartPoint: VerticalAlignment.Top
    }),
  }

  public handleSelection(ev: ISelectionEventArgs): void {
    const newselection = ev.newSelection.value;
    this.selected = newselection;
    this.listCard.value = newselection;
  }
}
