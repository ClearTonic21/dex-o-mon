import { Component, ViewChild, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DexoFooterComponent } from './components/footer/footer.component';
import { DexoViewPanelComponent } from "./components/app-layout/dexo-view-panel.component";
import { DexoHeaderComponent } from "./components/header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, DexoFooterComponent, DexoViewPanelComponent, DexoHeaderComponent]
})
export class AppComponent {
  @ViewChild("viewPanel") public viewPanel!: DexoViewPanelComponent;

  // And of course add the key line to our navigate function
  title = 'Dex-o-Mon';

  public toggleNavDrawer(): void {
    this.viewPanel.navDrawer.toggle();
  }
}
