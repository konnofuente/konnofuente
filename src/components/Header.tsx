import { useIntl } from "react-intl";
import konnoLogo from "../asssets/konnoFuente-logo-type-white.png";

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
    <div className="">
      <div className="bg-primary p-4">
        <div className="flex py-130 px-10 justify-between items-center">
          <div>
            <img src={konnoLogo} alt="Logo" className="h-114 mr-115" />
          </div>
          <div>
            <ul className="flex py-20px items-center gap-24">
            {navItems.map((navItem, index) => (
              <li  key={index}>
                <span className="text-white hover:text-gray-300">
                {navItem.item}
                </span>
              </li>
              ))}
              
            </ul>
          </div>
        </div>
      </div>
      <span>{formatMessage({ id: "bonjour" })}</span>
    </div>
  );
}
