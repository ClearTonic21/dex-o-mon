import { Component, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DexoFooterComponent } from './components/footer/footer.component';
import { DexoContentContainerComponent } from "./components/content-container/content-container.component";
import { DexoHeaderComponent } from "./components/header/header.component";
import { IgxTooltipModule } from 'igniteui-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, DexoFooterComponent, DexoContentContainerComponent, DexoHeaderComponent, IgxTooltipModule],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild("contentContainer") public contentContainer!: DexoContentContainerComponent;
  @Output() public title: string = 'Dex-o-Mon';

  public toggleNavDrawer(): void {
    this.contentContainer.toggleNavDrawer();
  }
}
