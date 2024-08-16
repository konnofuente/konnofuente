import { ProjectLabel } from "../enums/ProjectLabels";
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
    labels?: ProjectLabel[];
    
    constructor(
      name: string,
      client: string,
      livelink: string,
      images: string[],
      created: Date,
      technologies: Technology[],
      category: ProjectCategory,
      labels?: ProjectLabel[],
    ) {
      this.name = name;
      this.client = client;
      this.livelink = livelink;
      this.images = images;
      this.created = created;
      this.technologies = technologies;
      this.category = category;
      this.labels = labels;
    }
  }