import { useIntl } from "react-intl";
import konnoLogo from "../../../assets/logos/konnoFuente-logo-type-white.png";

export interface INavItem {
  item: string;
  route: string;
}

export default function Header() {
  const { formatMessage } = useIntl();
  const navItems: INavItem[] = [
    { item: "HOME", route: "/" },
    { item: "ABOUT", route: "/about-us" },
    { item: "MY EXPERTISE", route: "/expertise" },
    { item: "PROJECT", route: "/project" },
    { item: "EXPERIENCE", route: "/experience" },
  ];

  return (
    <div className="header-section">
      <header>
        <nav className=" bg-primaryNormal flex  py-2.5  px-32  justify-between items-center sm:py-2.5 ">
          <div className="w-[114px] md:w-[114px]">
            <img src={konnoLogo} alt="Logo" />
          </div>
          <div className="md:static md:w-auto md:h-auto md:items-center md:py-0">
            <ul className="flex py-20px items-center gap-24 md:flex-row md:items-center md:gap-[2vw]">
              {navItems.map((navItem, index) => (
                <li key={index} className="">
                  <span className="text-white font-raleway text-base font-normal leading-normal hover:text-gray-300">
                    {navItem.item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
      <span>{formatMessage({ id: "bonjour" })}</span>
    </div>
  );
}
