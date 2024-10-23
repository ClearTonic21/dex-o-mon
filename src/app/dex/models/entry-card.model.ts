import { DexoIcon } from "../../enums/DexoIcon";
import { EntryCardType } from "../../enums/EntryCardType";
import { Guid, newGuid } from "../../models/guid";

export class EntryCard {
  public guid: Guid;
  public index: number;
  public entryCardType: EntryCardType;
  public title: string;
  public value: string;

  constructor(index: number = -1, title: string, value: string, entryType?: EntryCardType ) {
    this.guid = newGuid();
    this.index = index;
    this.entryCardType = entryType || EntryCardType.Text;
    this.title = title;
    this.value = value || '';
  }

  public toString = () : string => {
    return this.value;
  }
}

export class ImageCard extends EntryCard {
  constructor(index: number, title: string, value: string = `${DexoIcon.Image}`) {
    super(index, title, value, EntryCardType.Image);
  }
}

export class ListCard extends EntryCard {
  public items: string[] = [];
  constructor(index: number, title: string, value: string, items: string[] = ['default']) {
    super(index, title, items[0], EntryCardType.List);
    this.items = items;
  }

  public getItems(): string[] {
    return this.items;
  }
}