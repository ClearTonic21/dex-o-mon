import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { ConnectedPositioningStrategy, HorizontalAlignment, IgxButtonModule, IgxDropDownComponent, IgxDropDownItemComponent, IgxDropDownItemNavigationDirective, IgxIconModule, IgxNavbarComponent, IgxNavbarModule, IgxSuffixDirective, IgxToggleActionDirective, ISelectionEventArgs, VerticalAlignment } from 'igniteui-angular';
import { DexoIcon } from '../../enums/DexoIcon';
import { Page } from '../../enums/Page';
import { NgFor } from '@angular/common';

interface NavItem {
  icon: string;
  text: string;
  disabled?: boolean;
}

@Component({
  selector: 'dexo-header',
  standalone: true,
  imports: [IgxIconModule, IgxSuffixDirective, IgxNavbarModule, IgxButtonModule, IgxDropDownComponent, IgxDropDownItemComponent, IgxToggleActionDirective, IgxDropDownItemNavigationDirective, NgFor],
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None
})
export class DexoHeaderComponent {
  @Output() public selectionChanged: EventEmitter<Page> = new EventEmitter<Page>();
  public dropdownOverlaySettings = {
  positionStrategy: new ConnectedPositioningStrategy({
    horizontalStartPoint: HorizontalAlignment.Right + 0.025,
    verticalStartPoint: VerticalAlignment.Top
  }),
  }
  public navItems: NavItem[] = [
  { icon: `${DexoIcon.ListAlt}`,     text: `${Page.Dex}`     },
  { icon: `${DexoIcon.Error}`,     text: `${Page.References}`  },
  { icon: `${DexoIcon.GroupWork}`,   text: `${Page.Defaults}`  }
  ];

  public selected: Page = Page.Dex
  public selectedIcon = `${DexoIcon.ListAlt}`;
  public pageNavOpen: boolean = false;

  public handleSelection(ev: ISelectionEventArgs): void {
    const newselection = ev.newSelection.value;
    this.selected = newselection.text;
    this.selectedIcon = newselection.icon;
    this.pageNavOpen = false;
    this.selectionChanged.emit(this.selected);
  }
}