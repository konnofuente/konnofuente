import { ProjectLabel } from "../enums/ProjectLabels";
import { Project, Technology } from "../models";
import { ProjectCategory } from "../utils/constants/enum";

export const fetchProjects = async (): Promise<Project[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); 

  const data: Project[] = [
    new Project(
      'Most Recent Project 1',
      'Client A',
      'http://example.com',
      ['path/to/image1.jpg', 'path/to/image2.jpg'],
      new Date(2023, 1, 1),
      [new Technology(1, 'React', 'path/to/react-logo.png')],
      ProjectCategory.MostRecent,
      [ProjectLabel.Wordpress, ProjectLabel.ReactTs]
    ),
    new Project(
      'Web Dev Project 1',
      'Client B',
      'http://example.com',
      ['path/to/image3.jpg', 'path/to/image4.jpg'],
      new Date(2023, 1, 1),
      [new Technology(2, 'Vue', 'path/to/vue-logo.png')],
      ProjectCategory.Designs
    ),
    new Project(
      'Web Dev Project 1',
      'Client B',
      'http://example.com',
      ['path/to/image3.jpg', 'path/to/image4.jpg'],
      new Date(2023, 1, 1),
      [new Technology(2, 'Vue', 'path/to/vue-logo.png')],
      ProjectCategory.Mobile
    ),
    new Project(
      'Web Dev Project 1',
      'Client B',
      'http://example.com',
      ['path/to/image3.jpg', 'path/to/image4.jpg'],
      new Date(2023, 1, 1),
      [new Technology(2, 'Vue', 'path/to/vue-logo.png')],
      ProjectCategory.MostRecent
    ),
    new Project(
      'Web Dev Project 1',
      'Client B',
      'http://example.com',
      ['path/to/image3.jpg', 'path/to/image4.jpg'],
      new Date(2023, 1, 1),
      [new Technology(2, 'Vue', 'path/to/vue-logo.png')],
      ProjectCategory.MostRecent
    ),
    new Project(
      'Web Dev Project 1',
      'Client B',
      'http://example.com',
      ['path/to/image3.jpg', 'path/to/image4.jpg'],
      new Date(2023, 1, 1),
      [new Technology(2, 'Vue', 'path/to/vue-logo.png')],
      ProjectCategory.Conference
    ),
  ];

  return data;
};
