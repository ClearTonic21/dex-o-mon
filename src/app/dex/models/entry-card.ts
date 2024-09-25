import { DexoIcon } from "../../enums/DexoIcon";
import { Guid, newGuid } from "../../models/guid";

export class EntryCard {
  public guid: Guid;
  public index: number = -1;
  public title: string = 'new';
  public value: string = '';

  constructor(index: number, title: string, value?: string) {
    this.guid = newGuid();
    this.index = index;
    this.title = title;
    this.value = value || '';
  }
}

export class ImageCard {
  public guid: Guid;
  public index: number = -1;
  public title: string = 'new';
  public source: string = '';

  constructor(index: number, title: string, value?: string) {
    this.guid = newGuid();
    this.index = index;
    this.title = title;
    this.source = value || `${DexoIcon.Image}`;
  }

  public toString = () : string => {
    return this.source;
  }
}