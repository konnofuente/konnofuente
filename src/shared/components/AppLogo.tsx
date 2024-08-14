// import konnoLogoLight from './path_to/konnoLogoLight';
// import konnoLogoDark from './path_to/konnoLogoDark';
import assets  from "../../assets/assets";

interface AppLogoProps {
    size: string;
    isLight: boolean;
}

const AppLogo: React.FC<AppLogoProps> = ({size, isLight}) => {
    const imageSizeClass = `h-${size} w-${size}`;
    const logo = isLight ? assets.Logos.whiteLogo : assets.Logos.darkLogo;

    return (
        <img src={logo} alt="Logo" className={imageSizeClass} />
    );
}

export default AppLogo;
