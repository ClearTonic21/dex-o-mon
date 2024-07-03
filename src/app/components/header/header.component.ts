import { Component } from '@angular/core';
import { DexoNavbarComponent } from '../../lib/dexo-navbar/navbar.component';

@Component( {
    standalone: true,
    selector: 'app-header',
    imports: [DexoNavbarComponent],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}