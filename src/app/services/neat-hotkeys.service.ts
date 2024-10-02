import { Injectable } from '@angular/core';
import { HotkeysService } from '@ngneat/hotkeys';

@Injectable({
  providedIn: 'root'
})
export class HotkeysDirective {
  constructor(private hotkeys: HotkeysService) {}

  ngOnInit() {
    this.hotkeys.addShortcut({ keys: 'meta.a' }).subscribe(e => console.log('Hotkey', e));
    this.hotkeys.addSequenceShortcut({ keys: 'alt>e>m' }).subscribe(e => console.log('Hotkey', e));
  }
}