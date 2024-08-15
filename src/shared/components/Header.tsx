import { useTranslation } from "react-i18next";
import assets from "../../assets/assets";
import { motion } from "framer-motion";
import animationConfig from "../../config/animationConfig";
import { Button } from "./buttons";
import { APP_ROUTE_PATH } from "../../routes/app_route_path";
import { Link } from "react-router-dom";
// import ButtonIcon from "../../base/Buttons/ButtonIcon";

const { delays, durations, easing } = animationConfig;

export interface INavItem {
  item: string;
  route: string;
}

export default function Header() {
  const [t] = useTranslation("message");

  const navItems: INavItem[] = [
    { item: "header.home", route: "/" },
    { item: "header.about", route: APP_ROUTE_PATH.about },
    // { item: "header.myExpertise", route: "/expertise" },
    // { item: "header.project", route: "/project" },
    // { item: "header.experience", route: "/experience" },
  ];

  return (
    <motion.header 
    initial={{ y: -100 }}  
    animate={{ y: 0 }}     
    transition={{ duration: durations.short ,delay:delays.initial ,ease: easing.easeIn}} 
    className="w-full overflow-none ">
      <div className="bg-primaryNormal flex  sm:py-2  lg:px-32 md:px-16 px-4 py-2 justify-between items-center w-full">
      <motion.div 
    >
      <img
        src={assets.Logos.whiteLogo}
        alt="Logo"
        className="w-14 sm:w-16 md:w-20 h-auto"
      />
    </motion.div>
        

        <div className="w-2/4 hidden lg:flex overflow-hidden shrink-0 justify-center flex-row items-center p-5 box-border gap-[30px]">
          <ul className=" hidden lg:flex  py-20px items-center justify-center space-x-4  w-full ">
            {navItems.map((navItem, index) => (
              <li key={index} className="cursor-pointer">
                <Link to={navItem.route}>
                  <span className="text-stone-50 text-lg font-normal font-Poppins leading-[35px] text-center items-center hover:text-gray-300">
                    {t(`${navItem.item}`)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        


        <div className="hidden lg:flex justify-start w-auto">
          <Button
            textButton="Contact Me"
            isFilled={false}
            link="https://linktr.ee/konnofuente"
            hoverEffect="bg-blue-100 text-blue-700"
          />
        </div>

        {/* <div className="flex lg:hidden justify-end w-1/4">
          <ButtonIcon icon={assets.Icons.menuRoundIcon} />
        </div> */}
      </div>
    </motion.header>
  );
}
