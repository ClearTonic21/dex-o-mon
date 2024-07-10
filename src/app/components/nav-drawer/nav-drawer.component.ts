import { Component, ViewChild } from '@angular/core';
import { IgxButtonModule, IgxFlexDirective, IgxIconModule, IgxNavDrawerItemDirective, IgxNavigationDrawerComponent, IgxNavigationDrawerModule } from 'igniteui-angular';
import { DexoFooterComponent } from "../footer/footer.component";
import { Page } from '../../enums/Page';
import { DexoIcon } from '../../enums/DexoIcon';
import { DexViewPanelComponent } from "../../dex/components/dex-view-panel/dex-view-panel.component";
import { DexoExpansionPanelComponent } from "../../lib/expansion-panel/expansion-panel.component";
import { DexoHeaderComponent } from "../header/header.component";
@Component({
    selector: 'dexo-nav-drawer',
    standalone: true,
    templateUrl: './nav-drawer.component.html',
    styleUrl: './nav-drawer.component.scss',
    imports: [IgxButtonModule, IgxIconModule, IgxNavigationDrawerModule, IgxNavDrawerItemDirective, IgxFlexDirective, DexoFooterComponent, DexViewPanelComponent, DexoExpansionPanelComponent, DexoHeaderComponent]
})
export class DexoNavDrawerComponent  {
  @ViewChild(IgxNavigationDrawerComponent, { static: true }) public drawer!: IgxNavigationDrawerComponent;

  public navItems = [
    { name: `${DexoIcon.AccountCircle}`, text: `${Page.Dex}`         },
    { name: `${DexoIcon.Error}`,         text: `${Page.References}`  },
    { name: `${DexoIcon.GroupWork}`,     text: `${Page.Defaults}`    }
  ];
  public Page = Page;

  public selected: string = `${Page.Dex}`;

  public navigate(item: { text: string; }) {
    this.selected = item.text;
  }
}