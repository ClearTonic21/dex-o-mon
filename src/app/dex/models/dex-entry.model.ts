import { DexoIcon } from "../../enums/DexoIcon";
import { Guid, newGuid } from "../../models/guid";
import { EntryCard, ImageCard } from "./entry-card.model";

export class DexEntry {
  public guid: Guid;
  public entryNumber: number;
  public entryNumberSuffix!: string;
  public name: string;
  public iconSrc: string = `${DexoIcon.Image}`;
  public basicInfoCards?: EntryCard[] = [];
  public entryCards?: EntryCard[] = [];
  public imageCards?: ImageCard[] = [];

  constructor(entryNum: number,name?: string, entryNumberSuffix?: string, iconSrc?: string, basicInfoCards?: EntryCard[], entryCards?: EntryCard[], imageCards?: ImageCard[]) {
    this.guid = newGuid();
    this.entryNumber = entryNum;
    this.entryNumberSuffix = entryNumberSuffix || '';
    this.name = name || 'undefined';
    this.iconSrc = iconSrc || `${DexoIcon.Image}`;
    this.basicInfoCards = basicInfoCards || [];
    this.entryCards = entryCards || [];
    this.imageCards = imageCards || [];
  }
}