import { ISocialIcon } from './ISocialIcon';

export class SocialIcon implements ISocialIcon {
  id: number;
  name: string;
  url: string;
  src: string;
  alt: string;
//   src: string;

  constructor(id: number, name: string, url: string, src: string) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.src = src;
    this.alt = name + " icon";
  }
}
