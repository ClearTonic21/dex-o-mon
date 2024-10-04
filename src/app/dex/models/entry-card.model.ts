import { DexoIcon } from "../../enums/DexoIcon";
import { EntryType } from "../../enums/EntryType";
import { Guid, newGuid } from "../../models/guid";

export class EntryCard {
  public guid: Guid;
  public index: number;
  public entryType: EntryType;
  public title: string;
  public value: string;

  constructor(index: number = -1, title: string, value: string, entryType?: EntryType ) {
    this.guid = newGuid();
    this.index = index;
    this.entryType = entryType || EntryType.Text;
    this.title = title;
    this.value = value || '';
  }

  public toString = () : string => {
    return this.value;
  }
}

export class ImageCard extends EntryCard {
  constructor(index: number, title: string, value: string = `${DexoIcon.Image}`) {
    super(index, title, value, EntryType.Image);
  }
}

export class DropdownCard extends EntryCard {
  public options: string[] = [];
  constructor(index: number, title: string, value: string, options: string[] = ['default']) {
    super(index, title, value, EntryType.Dropdown);
    this.options = options;
  }
}