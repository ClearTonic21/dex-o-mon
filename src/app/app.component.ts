import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgIf } from '@angular/common';
import { DexoNavDrawerMiniComponent } from "./lib/nav-drawer/nav-drawer.component";
import { DexoNavbarComponent } from "./lib/dexo-navbar/navbar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, NgIf, DexoNavDrawerMiniComponent, DexoNavbarComponent]
})
export class AppComponent {
  // And of course add the key line to our navigate function
  title = 'Dex-o-Mon';
}
