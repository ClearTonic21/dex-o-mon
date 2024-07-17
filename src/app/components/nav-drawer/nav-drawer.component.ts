import { Component, HostListener, ViewChild } from '@angular/core';
import { IgxButtonModule, IgxExpansionPanelModule, IgxFlexDirective, IgxIconModule, IgxNavDrawerItemDirective, IgxNavigationDrawerComponent, IgxNavigationDrawerModule } from 'igniteui-angular';
import { DexoFooterComponent } from "../footer/footer.component";
import { DexoIcon } from '../../enums/DexoIcon';
import { DexViewPanelComponent } from "../../dex/components/dex-view-panel/dex-view-panel.component";
import { DexoExpansionPanelComponent } from "../../lib/expansion-panel/expansion-panel.component";
import { DexoHeaderComponent } from "../header/header.component";

interface EntryItem {
  index: number;
  imgIconSrc?: string;
  entryNumber?: string;
  name?: string;
  header?: boolean;
  disabled?: boolean;
}

@Component({
    selector: 'dexo-nav-drawer',
    standalone: true,
    templateUrl: './nav-drawer.component.html',
    styleUrl: './nav-drawer.component.scss',
    imports: [IgxButtonModule, IgxIconModule, IgxNavigationDrawerModule, IgxNavDrawerItemDirective, IgxFlexDirective, DexoFooterComponent, DexViewPanelComponent, DexoExpansionPanelComponent, DexoHeaderComponent],
    providers: [IgxExpansionPanelModule]
})
export class DexoNavDrawerComponent  {
  @ViewChild(IgxNavigationDrawerComponent, { static: true }) public drawer!: IgxNavigationDrawerComponent;
  @ViewChild("dexViewPanel") public dexViewPanel!: DexoExpansionPanelComponent;
  public open: boolean = true;
  public selected: number = 0;

  public entryItems: EntryItem[] = [
    { index:  0,  imgIconSrc: `${DexoIcon.Image}`,  name: 'dexEntry', entryNumber:  '00'  },
    {	index:	1,	imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry',	entryNumber:	'01'	},
    {	index:	2,	imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry',	entryNumber:	'02'	},
    {	index:	3,	imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry',	entryNumber:	'03'	},
    {	index:	4,	imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry',	entryNumber:	'04'	},
    {	index:	5,	imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry',	entryNumber:	'05'	},
    {	index:	6,	imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry',	entryNumber:	'06'	},
    {	index:	7,	imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry',	entryNumber:	'07'	},
    {	index:	8,	imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry',	entryNumber:	'08'	},
    {	index:	9,	imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry',	entryNumber:	'09'	},
    {	index:	10,	imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry',	entryNumber:	'10'	},
    {	index:	11,	imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry',	entryNumber:	'11'	},
    {	index:	12,	imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry',	entryNumber:	'12'	},
    {	index:	13,	imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry',	entryNumber:	'13'	},
    {	index:	14,	imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry',	entryNumber:	'14'	},
    {	index:	15,	imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry',	entryNumber:	'15'	},
    {	index:	16,	imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry',	entryNumber:	'16'	},
    {	index:	17,	imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry',	entryNumber:	'17'	},
    {	index:	18,	imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry',	entryNumber:	'18'	},
    {	index:	19,	imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry',	entryNumber:	'19'	},
    {	index:	20,	imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry',	entryNumber:	'20'	},
    {	index:	21,	imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry',	entryNumber:	'21'	},
    {	index:	22,	imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry',	entryNumber:	'22'	},
    {	index:	23,	imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry',	entryNumber:	'23'	},
    {	index:	24,	imgIconSrc:	`${DexoIcon.Image}`,	name:	'dexEntry',	entryNumber:	'24'	}
  ];

  public navigate(item: { index: number; }) {
    this.selected = item.index;
  }
}