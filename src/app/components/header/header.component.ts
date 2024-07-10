import { Component, EventEmitter, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { IgxButtonModule, IgxIconModule, IgxNavbarComponent, IgxNavbarModule } from 'igniteui-angular';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'dexo-header',
  standalone: true,
  imports: [ IgxIconModule, IgxNavbarModule, IgxButtonModule ],
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html'
})
export class DexoHeaderComponent {
    @ViewChild(IgxNavbarComponent) public navBar!: IgxNavbarComponent;
    @Output( ) public menuClick: EventEmitter<void> = new EventEmitter<void>;
}