import { Component } from '@angular/core';
import { DexoNavbarComponent } from "../../lib/dexo-navbar/navbar.component";

@Component( {
    standalone: true,
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [DexoNavbarComponent]
})
export class HeaderComponent {

}