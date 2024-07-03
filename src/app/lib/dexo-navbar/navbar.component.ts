import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { IgxButtonModule, IgxIconModule, IgxNavbarComponent, IgxNavbarModule } from 'igniteui-angular';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'dexo-navbar',
  standalone: true,
  imports: [ IgxIconModule, IgxNavbarModule, IgxButtonModule ],
  styleUrls: ['./navbar.component.scss'],
  templateUrl: './navbar.component.html'
})
export class DexoNavbarComponent {
    @ViewChild(IgxNavbarComponent)
    public navBar!: IgxNavbarComponent;

}