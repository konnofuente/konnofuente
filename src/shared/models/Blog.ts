export class Blog {
    title: string;
    content: string;
    publishedDate: Date;
    author: string;
  
    constructor(title: string, content: string, publishedDate: Date, author: string) {
      this.title = title;
      this.content = content;
      this.publishedDate = publishedDate;
      this.author = author;
    }
  }