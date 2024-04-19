import { useTranslation } from "react-i18next";
import konnoLogo from "../../../assets/logos/konnoFuente-logo-type-white.png";
import menuIcon from "../../../assets/icons/menu.svg"

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
    <div className="header-section w-full">
      <header>
        <nav className=" bg-primaryNormal flex  sm:py-2.5  sm:px-32 px-4 py-2 justify-between items-center w-full">
          <div>
            <img src={konnoLogo} alt="Logo" className="sm:w-28 w-20"/>
          </div>
          <div>
            <ul className=" hidden lg:flex  py-20px items-center gap-24 ">
              {navItems.map((navItem, index) => (
                <li key={index} className="">
                  <span className="text-white font-raleway text-base font-normal leading-normal hover:text-gray-300">
                    {t(`${navItem.item}`)}
                  </span>
                </li>
              ))}
            </ul>
            <img src={menuIcon} alt="" className="visible md:invisible"/>
          </div>

        </nav>
      </header>
    </div>
  );
}
