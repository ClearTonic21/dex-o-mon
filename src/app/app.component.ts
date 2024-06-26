import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SelectionListComponent } from './components/selection-list/selection-list.component';
import { ViewPanelComponent } from './components/view-panel/view-panel.component';
import { Entry } from './dex/models/entry';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SelectionListComponent, ViewPanelComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Dex-o-Mon';
  public selectedEntries: Entry[] = [];
}
