import { Component, ViewChild } from '@angular/core';
import { IgxButtonModule, IgxFlexDirective, IgxIconComponent, IgxIconModule, IgxNavDrawerItemDirective, IgxNavigationDrawerComponent, IgxNavigationDrawerModule } from 'igniteui-angular';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
    selector: 'dexo-nav-drawer',
    standalone: true,
    templateUrl: './nav-drawer.component.html',
    styleUrl: './nav-drawer.component.css',
    imports: [IgxButtonModule, IgxIconModule, IgxNavigationDrawerModule, IgxNavigationDrawerModule, IgxNavDrawerItemDirective, HeaderComponent, IgxFlexDirective, FooterComponent]
})

export class DexoNavDrawerComponent  {
  @ViewChild(IgxNavigationDrawerComponent, { static: true })
  public drawer!: IgxNavigationDrawerComponent;

  public navItems = [
    { name: 'account_circle', text: 'Dex' },
    { name: 'error', text: 'References' },
    { name: 'group_work', text: 'Defaults' }
  ];

  public selected = 'Dex';

  public navigate(item: { text: string; }) {
    this.selected = item.text;
  }
}