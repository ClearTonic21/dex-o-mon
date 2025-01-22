import { Component, Input, OnInit } from '@angular/core';
import { ConnectedPositioningStrategy, HorizontalAlignment, IgxDropDownComponent, IgxDropDownItemComponent, IgxIconComponent, IgxToggleActionDirective, ISelectionEventArgs, VerticalAlignment } from 'igniteui-angular';
import { ListCard } from '../../../models/entry-card.model';

@Component({
  selector: 'list-entry-card',
  standalone: true,
  imports: [ IgxIconComponent, IgxDropDownComponent, IgxDropDownItemComponent, IgxToggleActionDirective ],
  templateUrl: './list-entry-card.component.html',
  styleUrl: './list-entry-card.component.scss'
})
export class ListEntryCardComponent implements OnInit {
  @Input() public listCard!: ListCard;
  @Input() public editMode: boolean = false;
  public selected: string = '';

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
