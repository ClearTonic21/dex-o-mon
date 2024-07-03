import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgIf } from '@angular/common';
import { IgxNavigationDrawerComponent } from 'igniteui-angular';
import { DexoNavDrawerComponent } from "./lib/nav-drawer/nav-drawer.component";
import { DexoNavbarComponent } from "./lib/dexo-navbar/navbar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, NgIf, DexoNavDrawerComponent, DexoNavbarComponent]
})
export class AppComponent {
  // And of course add the key line to our navigate function
  title = 'Dex-o-Mon';
}
