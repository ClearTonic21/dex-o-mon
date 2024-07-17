import { Component, ViewChild, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DexoFooterComponent } from './components/footer/footer.component';
import { DexoNavDrawerComponent } from "./components/nav-drawer/nav-drawer.component";
import { DexoHeaderComponent } from "./components/header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, DexoFooterComponent, DexoNavDrawerComponent, DexoHeaderComponent]
})
export class AppComponent {
  @ViewChild("navDrawer") public navDrawer!: DexoNavDrawerComponent;

  // And of course add the key line to our navigate function
  title = 'Dex-o-Mon';

  public toggleNavDrawer(): void {
    this.navDrawer.drawer.toggle();
  }
}
