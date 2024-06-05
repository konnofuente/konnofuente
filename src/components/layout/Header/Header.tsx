import { useTranslation } from "react-i18next";
import konnoLogo from "../../../assets/logos/konnoFuente-logo-type-white.png";
import menuIcon from "../../../assets/icons/menu.svg";
import { Button } from "../../base";

export interface INavItem {
  item: string;
  route: string;
}

export default function Header() {
  const [t] = useTranslation("message");

  const navItems: INavItem[] = [
    { item: "header.home", route: "/" },
    { item: "header.about", route: "/about-us" },
    { item: "header.myExpertise", route: "/expertise" },
    { item: "header.project", route: "/project" },
    { item: "header.experience", route: "/experience" },
  ];

  return (
    <header className="w-full overflow-none">
      <div className="bg-primaryNormal flex  sm:py-2.5  sm:px-32 px-4 py-2 justify-between items-center w-full">
        <div className="w-1/4">
          <img src={konnoLogo} alt="Logo" className="sm:w-28 w-20" />
        </div>

        <div className="w-2/4 hidden lg:flex overflow-hidden shrink-0  flex-row items-center justify-start p-5 box-border gap-[30px]">
          <ul className=" hidden lg:flex  py-20px items-center space-x-4 justify-between w-full ">
            {navItems.map((navItem, index) => (
              <li key={index} className="">
                <span className="text-stone-50 text-lg font-normal font-Poppins leading-[35px] hover:text-gray-300">
                  {t(`${navItem.item}`)}
                </span>
              </li>
            ))}
          </ul>
        </div>



       <div className="hidden lg:flex justify-end w-1/4">
         <Button
           textButton="Contact Me"
           isFilled={false}
           hoverEffect="bg-blue-100 text-blue-700"
         />
       </div>
       
      </div>
    </header>
  );
}
