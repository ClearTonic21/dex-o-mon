import { Component, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DexoFooterComponent } from './components/footer/footer.component';
import { DexoContentContainerComponent } from "./components/content-container/content-container.component";
import { DexoHeaderComponent } from "./components/header/header.component";
import { AllowInElement, HotkeysService } from '@ngneat/hotkeys';

interface Options {
  // The group name
  group: string;
  // hotkey target element (defaults to `document`)
  element: HTMLElement;
  // The type of event (defaults to `keydown`)
  trigger: 'keydown' | 'keyup';
  // Allow input, textarea and select as key event sources (defaults to []).
  // It can be 'INPUT', 'TEXTAREA', 'SELECT' or 'CONTENTEDITABLE'.
  allowIn: AllowInElement[];
  // hotkey description
  description: string;
  // Included in the shortcut list to be display in the help dialog (defaults to `true`)
  showInHelpMenu: boolean;
  // Whether to prevent the default behavior of the event. (defaults to `true`)
  preventDefault: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, DexoFooterComponent, DexoContentContainerComponent, DexoHeaderComponent],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild("contentContainer") public contentContainer!: DexoContentContainerComponent;
  @Output() public title: string = 'Dex-o-Mon';

  public toggleNavDrawer(): void {
    this.contentContainer.toggleNavDrawer();
  }

  constructor(private hotkeys: HotkeysService) {}

  ngOnInit() {
    this.hotkeys.addShortcut({ keys: 'meta.a' }).subscribe(e => console.log('Hotkey', e));
    this.hotkeys.addSequenceShortcut({ keys: 'g>i' }).subscribe(e => console.log('Hotkey', e));
  }
}
