import { Component, Input, OnInit } from '@angular/core';
import { ConnectedPositioningStrategy, HorizontalAlignment, IgxDropDownComponent, IgxDropDownItemComponent, IgxIconComponent, IgxToggleActionDirective, ISelectionEventArgs, VerticalAlignment } from 'igniteui-angular';
import { DropdownCard } from '../../../models/entry-card.model';

@Component({
  selector: 'dropdown-entry-card',
  standalone: true,
  imports: [ IgxIconComponent, IgxDropDownComponent, IgxDropDownItemComponent, IgxToggleActionDirective ],
  templateUrl: './dropdown-entry-card.component.html',
  styleUrl: './dropdown-entry-card.component.scss'
})
export class DropdownEntryCardComponent implements OnInit {
  @Input() public dropdownCard!: DropdownCard;
  @Input() public editMode: boolean = false;
  public selected: string = '';

  ngOnInit(): void {
    this.selected = this.dropdownCard.value;
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
    this.dropdownCard.value = newselection;
  }
}
