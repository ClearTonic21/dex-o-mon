import { DexoIcon } from "../../enums/DexoIcon";

export class DexEntry {
  public entryNumber: number;
  public name: string;
  public iconSrc?: string;
  public imageSrc?: string;

  constructor(entryNum: number, name: string, iconSrc?: string, imageSrc?: string, ) {
    this.entryNumber = entryNum;
    this.name = name;
    this.iconSrc = iconSrc || `${DexoIcon.Image}`;
    this.imageSrc = imageSrc || `${DexoIcon.Image}`;
  }
}