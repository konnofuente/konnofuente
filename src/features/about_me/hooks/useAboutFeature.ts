import { useEffect, useState } from "react";
import { SocialIcon } from "../models/SocialIcon";
import assets from "../../../assets/assets";

export const useAboutFeature =()=>{
    const [socialIcon, setSocialIcon] = useState<SocialIcon[]>([]);

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
      }, []);


      return{
        socialIcon
      }
}