import React from "react";
import { useNavigate } from "react-router-dom";
import assets from "../../assets/assets";
import { APP_ROUTE_PATH } from "../../routes/app_route_path"; 

interface AppLogoProps {
    size: string;
    isLight: boolean;
}

const AppLogo: React.FC<AppLogoProps> = ({ size, isLight }) => {
    const navigate = useNavigate();
    const imageSizeClass = `h-${size} w-${size}`;
    const logo = isLight ? assets.Logos.whiteLogo : assets.Logos.darkLogo;

    const handleClick = () => {
        navigate(APP_ROUTE_PATH.home);
    };

    return (
        <img 
            src={logo} 
            alt="Logo" 
            className={`${imageSizeClass} cursor-pointer`} 
            onClick={handleClick} 
        />
    );
}

export default AppLogo;
