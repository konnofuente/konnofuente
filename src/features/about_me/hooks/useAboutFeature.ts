import { useEffect, useState } from "react";
import { SocialIcon } from "../models/SocialIcon";
import assets from "../../../assets/assets";
import { AboutSection } from "../models/AboutSection";

export const useAboutFeature =()=>{
    const [socialIcon, setSocialIcon] = useState<SocialIcon[]>([]);
    const [dailySections, setDailySections] = useState<AboutSection[]>([]);
    const [finalizeSections, setFinalizeSections] = useState<AboutSection[]>([]);

    useEffect(() => {
        setSocialIcon([
          new SocialIcon(
            1,
            "Github",
            "https://github.com/konnofuente",
            assets.Icons.githubGreyIcon
          ),
          new SocialIcon(
            1,
            "linkdIn",
            "www.linkedin.com/in/konno-meli-arnaud-fuente-42b9b824b",
            assets.Icons.linkedinGreyIcon
          ),
          new SocialIcon(
            1,
            "medium",
            "https://medium.com/@konomelifuente",
            assets.Icons.mediumGreyIcon
          ),
          new SocialIcon(
            1,
            "instagram",
            "https://www.instagram.com/fuente_hov/",
            assets.Icons.instagramGreyIcon
          ),
        ]);

        setDailySections(
          [
            {
              title: "Day Scheduling",
              description:
                "I start my day at 3 AM by scheduling and planning. I check my emails, ensure all tasks are updated in Google Calendar, and organize my day and team activities using Trello. I set up my workspace with GitHub, VS Code, and Figma. With a coffee by my side, I’m ready to start the day.",
              image: assets.Images.scheduleChart,
              imageLeft: false,
            },
            {
              title: "Coding",
              description:
                "Following my Trello plan, I open VS Code and dive into coding with my Rize app open for productivity. I work on web applications using ReactJS or VueTS, or I’m immersed in a mobile application project, which I particularly enjoy with Flutter and React Native.",
              image: assets.Images.myStackPc,
              imageLeft: true,
            },
            {
              title: "Seeking Knowledge",
              description:
                "After several hours of work, I take a break to seek new knowledge. I open LinkedIn to share tips or engage with courses and books on software architecture, clean coding, or other topics to enhance my skills. Alternatively, I relax with YouTube videos on sports or other interesting topics.",
              image: assets.Images.seekingKnowledge,
              imageLeft: false,
            }
          ]
        )

        setFinalizeSections(
          [
            {
              title: "Passion for Entrepreneurship",
              description:
                "I have a deep interest in the entrepreneurial lifestyle. I am passionate about creating and growing innovative solutions. I enjoy brainstorming new ideas, working on business strategies, and networking with other entrepreneurs. This entrepreneurial spirit drives me to continuously improve and stay ahead in the tech industry.",
              image: assets.Images.entrepreneurPassion,
              imageLeft: false,
            },
            {
              title: "Weekends and Leisure",
              description:
                "On weekends, I love to travel and explore new places. My most fancy hobby is baking and cooking, and I enjoy making vlogs about it to share my culinary adventures. I spend quality time with friends, whether it's visiting new spots, watching sports matches together, or just hanging out. These activities help me relax and recharge for the upcoming week.",
              image: assets.Images.weekendLeisure,
              imageLeft: false,
            }
          ]
        )

      }, []);


      return{
        socialIcon,finalizeSections,dailySections
      }
}