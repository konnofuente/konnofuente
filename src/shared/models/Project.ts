import { ProjectCategory } from "../utils/constants/enum";
import { Technology } from "./Technology";


export class Project {
    name: string;
    client: string;
    livelink: string;
    images: string[];
    created: Date;
    technologies: Technology[];
    category: ProjectCategory;
  
    constructor(
      name: string,
      client: string,
      livelink: string,
      images: string[],
      created: Date,
      technologies: Technology[],
      category: ProjectCategory
    ) {
      this.name = name;
      this.client = client;
      this.livelink = livelink;
      this.images = images;
      this.created = created;
      this.technologies = technologies;
      this.category = category;
    }
  }