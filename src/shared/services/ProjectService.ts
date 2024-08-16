import { Stack } from "../enums/Stacks";
import { Project, Technology } from "../models";
import { ProjectCategory } from "../utils/constants/enum";

export const fetchProjects = async (): Promise<Project[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const data: Project[] = [
    //most recent
    new Project(
      "Meloaude",
      "A landing page dedicated to illustrate the meloaude project  features which is an e-commerce application ",
      "client",
      "https://meloaude.com/",
      ["path/to/image1.jpg", "path/to/image2.jpg"],
      new Date(2023, 1, 1),
      [new Technology(1, Stack.Wordpress)],
      ProjectCategory.MostRecent,
      [Stack.Wordpress, Stack.Figma]
    ),
    new Project(
      "Residat by map and rank",
      "A platform that aim in Connecting communities to actionable climate and environmental data.",
      "Meloaude Enterprise",
      "https://www.residat.com/",
      ["path/to/image1.jpg", "path/to/image2.jpg"],
      new Date(2023, 1, 1),
      [new Technology(1, Stack.Wordpress)],
      ProjectCategory.MostRecent,
      [Stack.VueJS, Stack.Figma, Stack.HtmlCss]
    ),
    new Project(
      "Manzon ",
      "A mobile application that aims to streamline the management of association and his members ",
      "CamaireTech",
      "",
      ["path/to/image1.jpg", "path/to/image2.jpg"],
      new Date(2023, 1, 1),
      [new Technology(1, Stack.Wordpress)],
      ProjectCategory.MostRecent,
      [Stack.Flutter, Stack.Figma]
    ),

    // Web development
    new Project(
      "Residat by map and rank",
      "A platform that aim in Connecting communities to actionable climate and environmental data.",
      "Meloaude Enterprise",
      "https://www.residat.com/",
      ["path/to/image1.jpg", "path/to/image2.jpg"],
      new Date(2023, 1, 1),
      [new Technology(1, Stack.Wordpress)],
      ProjectCategory.Web,
      [Stack.VueJS, Stack.Figma, Stack.Vitest]
    ),
    new Project(
      "Taxiliz, Landing Page",
      "A landing page dedicated in showcasing the Taxiliz mobile application which is a VTC solution centric",
      "Meloaude Enterprise",
      "https://taxiliz.com/",
      ["path/to/image1.jpg", "path/to/image2.jpg"],
      new Date(2023, 1, 1),
      [new Technology(1, Stack.Wordpress)],
      ProjectCategory.Web,
      [Stack.HtmlCss, Stack.Javascript]
    ),
    new Project(
      "Larosee, E-commerce Platform",
      "An e-commerce platform that enable users to do online command and purchase.",
      "laroseellc",
      "https://laroseellc.shop/",
      ["path/to/image1.jpg", "path/to/image2.jpg"],
      new Date(2023, 1, 1),
      [new Technology(1, Stack.Wordpress)],
      ProjectCategory.Web,
      [Stack.Wordpress, Stack.Elementor, Stack.WooCommerce]
    ),
    new Project(
      "Stay Focus, E-commerce Platform",
      "An e-commerce platform that enable different vendor to have their shops and sell on the platform.",
      "Nauge Reel Enterprise",
      "http://stayfocusmall.com/",
      ["path/to/image1.jpg", "path/to/image2.jpg"],
      new Date(2023, 1, 1),
      [new Technology(1, Stack.Wordpress)],
      ProjectCategory.Web,
      [Stack.Wordpress, Stack.Elementor, Stack.WooCommerce]
    ),
    new Project(
      "Meloaude",
      "A landing page dedicated to illustrate the meloaude project  features which is an e-commerce application ",
      "client",
      "https://meloaude.com/",
      ["path/to/image1.jpg", "path/to/image2.jpg"],
      new Date(2023, 1, 1),
      [new Technology(1, Stack.Wordpress)],
      ProjectCategory.Web,
      [Stack.Wordpress]
    ),
    new Project(
      "Plumeox, Enterprise Website",
      "Plumeox is an enterprise which offers tech services. This website aimed in showcasing  the enterprise.",
      "client",
      "https://plumeox.com/",
      ["path/to/image1.jpg", "path/to/image2.jpg"],
      new Date(2023, 1, 1),
      [new Technology(1, Stack.Wordpress)],
      ProjectCategory.Web,
      [Stack.Wordpress]
    ),


    //mobile development 
    new Project(
      "Taxiliz Mobile App (IOS/Andriode)",
      "A mobile application that permit Investors and Drivers to meet in the VTC domain.",
      "client",
      "",
      ["path/to/image1.jpg", "path/to/image2.jpg"],
      new Date(2023, 1, 1),
      [new Technology(1, Stack.ReactNativeTS)],
      ProjectCategory.Mobile,
      [Stack.ReactNativeTS, Stack.Expo]
    ),
    new Project(
      "Manzon ",
      "A mobile application that aims to streamline the management of association and his members ",
      "CamaireTech",
      "",
      ["path/to/image1.jpg", "path/to/image2.jpg"],
      new Date(2023, 1, 1),
      [new Technology(1, Stack.Flutter)],
      ProjectCategory.Mobile,
      [Stack.Flutter, Stack.Figma]
    ),
    new Project(
      "Hope Home ",
      "A Real estate platform that permit lessor to sell or rent thier appartment and land to potential buyers and tenant.",
      "CamaireTech",
      "",
      ["path/to/image1.jpg", "path/to/image2.jpg"],
      new Date(2023, 1, 1),
      [new Technology(1, Stack.Flutter)],
      ProjectCategory.Mobile,
      [Stack.Flutter, Stack.Firebase]
    ),


    //Design
    new Project(
      "My Portfolio",
      "In this figma project you will find the complete UI/UX of my portfolio with the whole design system",
      "Konno Meli",
      "https://www.figma.com/design/6PUp0SDx2CerrMUvjHVcHH/Fuente-Portfolio?node-id=974-3045&t=aSht44ei0PDAqu9P-1",
      ["path/to/image1.jpg", "path/to/image2.jpg"],
      new Date(2023, 1, 1),
      [new Technology(1, Stack.Figma)],
      ProjectCategory.Designs,
      [Stack.Figma, ]
    ),
    new Project(
      "Meloaude Website Design",
      "Here i had to deign the whole UI/UX of the meloaude site implementing design system, component, colorimetry ",
      "Konno Meli",
      "https://www.figma.com/design/TVuaj9Am9zIYhWhw7KMZnU/Meloaude-Website-Presentation?node-id=0-1&t=Wi5e1JVt8gJqHpEF-1",
      ["path/to/image1.jpg", "path/to/image2.jpg"],
      new Date(2023, 1, 1),
      [new Technology(1, Stack.Figma)],
      ProjectCategory.Designs,
      [Stack.Figma, ]
    ),



    //Wordpress
    new Project(
      "Meloaude",
      "A landing page dedicated to illustrate the meloaude project  features which is an e-commerce application ",
      "client",
      "https://meloaude.com/",
      ["path/to/image1.jpg", "path/to/image2.jpg"],
      new Date(2023, 1, 1),
      [new Technology(1, Stack.Wordpress)],
      ProjectCategory.Wordpress,
      [Stack.Wordpress]
    ),

    new Project(
      "Plumeox, Enterprise Website",
      "Plumeox is an enterprise which offers tech services. This website aimed in showcasing  the enterprise.",
      "client",
      "https://plumeox.com/",
      ["path/to/image1.jpg", "path/to/image2.jpg"],
      new Date(2023, 1, 1),
      [new Technology(1, Stack.Wordpress)],
      ProjectCategory.Wordpress,
      [Stack.Wordpress]
    ),

    new Project(
      "Larosee, E-commerce Platform",
      "An e-commerce platform that enable users to do online command and purchase.",
      "laroseellc",
      "https://laroseellc.shop/",
      ["path/to/image1.jpg", "path/to/image2.jpg"],
      new Date(2023, 1, 1),
      [new Technology(1, Stack.Wordpress)],
      ProjectCategory.Wordpress,
      [Stack.Wordpress, Stack.Elementor, Stack.WooCommerce]
    ),
    new Project(
      "Stay Focus, E-commerce Platform",
      "An e-commerce platform that enable different vendor to have their shops and sell on the platform.",
      "Nauge Reel Enterprise",
      "http://stayfocusmall.com/",
      ["path/to/image1.jpg", "path/to/image2.jpg"],
      new Date(2023, 1, 1),
      [new Technology(1, Stack.Wordpress)],
      ProjectCategory.Wordpress,
      [Stack.Wordpress, Stack.Elementor, Stack.WooCommerce]
    ),
  ];

  return data;
};
