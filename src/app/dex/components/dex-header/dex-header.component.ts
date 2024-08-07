import { Component } from '@angular/core';
import { IgxIconModule, IgxButtonModule, IgxToggleActionDirective, IgxDropDownItemNavigationDirective, IgxNavbarComponent, IgxNavbarActionDirective } from 'igniteui-angular';

@Component({
  selector: 'dex-header',
  standalone: true,
  imports: [ IgxIconModule, IgxButtonModule, IgxNavbarComponent, IgxNavbarActionDirective, IgxToggleActionDirective, IgxDropDownItemNavigationDirective],
  templateUrl: './dex-header.component.html',
  styleUrl: './dex-header.component.scss'
})
export class DexHeaderComponent {

}
