import { Component, HostListener, ViewChild } from '@angular/core';
import { IgxButtonModule, IgxExpansionPanelModule, IgxFlexDirective, IgxIconModule, IgxNavDrawerItemDirective, IgxNavigationDrawerComponent, IgxNavigationDrawerModule } from 'igniteui-angular';
import { DexoFooterComponent } from "../footer/footer.component";
import { DexoIcon } from '../../enums/DexoIcon';
import { DexViewPanelComponent } from "../../dex/components/dex-view-panel/dex-view-panel.component";
import { DexoExpansionPanelComponent } from "../../lib/expansion-panel/expansion-panel.component";
import { DexoHeaderComponent } from "../header/header.component";

interface EntryItem {
  entryNumber: EntryNumber;
  imgIconSrc?: string;
  name?: string;
  header?: boolean;
  disabled?: boolean;
}

interface EntryNumber {
  idNumber: number;
  seperator?:  string;
  altNumber?: number;
}

@Component({
    selector: 'dexo-nav-drawer',
    standalone: true,
    templateUrl: './nav-drawer.component.html',
    styleUrl: './nav-drawer.component.scss',
    imports: [IgxButtonModule, IgxIconModule, IgxNavigationDrawerModule, IgxNavDrawerItemDirective, IgxFlexDirective, DexoFooterComponent, DexViewPanelComponent, DexoExpansionPanelComponent, DexoHeaderComponent]
})
export class DexoNavDrawerComponent  {
  @ViewChild(IgxNavigationDrawerComponent, { static: true }) public drawer!: IgxNavigationDrawerComponent;
  @ViewChild("dexViewPanel") public dexViewPanel!: DexoExpansionPanelComponent;
  public open: boolean = true;
  public selected: number = 0;

  public entryItems: EntryItem[] = [
    { entryNumber:  {idNumber: 0},    imgIconSrc: `${DexoIcon.Image}`,  name: 'dexEntry'  },
    { entryNumber:  {idNumber: 1},    imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry'	},
    { entryNumber:  {idNumber: 2},    imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry'	},
    { entryNumber:	{idNumber: 3}, 	  imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry'	},
    { entryNumber:	{idNumber: 4}, 	  imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry'	},
    { entryNumber:	{idNumber: 5}, 	  imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry'	},
    { entryNumber:	{idNumber: 6}, 	  imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry'	},
    { entryNumber:	{idNumber: 7}, 	  imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry'	},
    { entryNumber:	{idNumber: 8}, 	  imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry'	},
    { entryNumber:	{idNumber: 9}, 	  imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry'	},
    { entryNumber:	{idNumber: 11}, 	imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry'	},
    { entryNumber:	{idNumber: 12}, 	imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry'	},
    { entryNumber:	{idNumber: 13}, 	imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry'	},
    { entryNumber:	{idNumber: 14}, 	imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry'	},
    { entryNumber:	{idNumber: 15}, 	imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry'	},
    { entryNumber:	{idNumber: 16}, 	imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry'	},
    { entryNumber:	{idNumber: 17}, 	imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry'	},
    { entryNumber:	{idNumber: 18}, 	imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry'	},
    { entryNumber:	{idNumber: 19}, 	imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry'	},
    { entryNumber:	{idNumber: 20}, 	imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry'	},
    { entryNumber:	{idNumber: 20}, 	imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry'	},
    { entryNumber:	{idNumber: 21}, 	imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry'	},
    { entryNumber:	{idNumber: 22}, 	imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry'	},
    { entryNumber:	{idNumber: 23}, 	imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry'	}
  ];

  public navigate(item: { entryNumber: { idNumber: number}}) {
    this.selected = item.entryNumber.idNumber;
  }
}