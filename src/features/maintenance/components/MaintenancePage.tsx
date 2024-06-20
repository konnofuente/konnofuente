import React from "react";
import MaintenanceLoader from "./MaintenanceLoader";

const MaintenancePage: React.FC = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-green-200">
      <MaintenanceLoader></MaintenanceLoader>
      
    </div>
  );
};

export default MaintenancePage;
