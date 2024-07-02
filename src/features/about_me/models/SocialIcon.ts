import { ISocialIcon } from './ISocialIcon';

export class SocialIcon implements ISocialIcon {
  id: number;
  name: string;
  url: string;
  iconPath: string;

  constructor(id: number, name: string, url: string, iconPath: string) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.iconPath = iconPath;
  }
}
