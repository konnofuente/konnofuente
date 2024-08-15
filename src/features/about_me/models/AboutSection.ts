export class AboutSection {
  title: string;
  description: string;
  image: string;
  imageLeft: boolean;

  constructor(
    title: string,
    description: string,
    image: string,
    imageLeft: boolean
  ) {
    this.title = title;
    this.description = description;
    this.image = image;
    this.imageLeft = imageLeft;
  }
}
