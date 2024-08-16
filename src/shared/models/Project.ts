import { Stack } from "../enums/Stacks";
import { ProjectCategory } from "../utils/constants/enum";
import { Technology } from "./Technology";


export class Project {
    name: string;
    client: string;
    description?: string;
    livelink?: string;
    images: string[];
    created: Date;
    technologies: Technology[];
    category: ProjectCategory;
    labels?: Stack[];
    
    constructor(
      name: string,
      client: string,
      description: string,
      livelink: string,
      images: string[],
      created: Date,
      technologies: Technology[],
      category: ProjectCategory,
      labels?: Stack[],
    ) {
      this.name = name;
      this.client = client;
      this.description = description;
      this.livelink = livelink;
      this.images = images;
      this.created = created;
      this.technologies = technologies;
      this.category = category;
      this.labels = labels;
    }
  }