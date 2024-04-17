import { useTranslation } from "react-i18next";
import konnoLogo from "../../../assets/logos/konnoFuente-logo-type-white.png";

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
    <div className="header-section">
      <header>
        <nav className=" bg-primaryNormal flex  py-2.5  px-32  justify-between items-center ">
          <div>
            <img src={konnoLogo} alt="Logo" />
          </div>
          <div>
            <ul className=" hidden md:flex  py-20px items-center gap-24 ">
              {navItems.map((navItem, index) => (
                <li key={index} className="">
                  <span className="text-white font-raleway text-base font-normal leading-normal hover:text-gray-300">
                    {t(`${navItem.item}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
