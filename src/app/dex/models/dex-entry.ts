import { DexoIcon } from "../../enums/DexoIcon";
import { Guid, newGuid } from "../../models/guid";
import { EntryCard } from "./entry-card";

export class DexEntry {
  public guid: Guid;
  public entryNumber: number;
  public entryNumberSuffix!: string;
  public name: string;
  public iconSrc: string = `${DexoIcon.Image}`;
  public imageSrc: string = `${DexoIcon.Image}`
  public entryCards?: EntryCard[] = [];

  constructor(entryNum: number, name?: string, entryNumberSuffix?: string, iconSrc?: string, imageSrc?: string, entryCards?: EntryCard[]) {
    this.guid = newGuid();
    this.entryNumber = entryNum;
    this.entryNumberSuffix = entryNumberSuffix || '';
    this.name = name || 'undefined';
    this.iconSrc = iconSrc || `${DexoIcon.Image}`;
    this.imageSrc = imageSrc || `${DexoIcon.Image}`;
    this.entryCards = entryCards || [];
  }
}