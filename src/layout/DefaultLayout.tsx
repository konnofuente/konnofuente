import Header from "../shared/components/Header";
import { Outlet } from "react-router-dom";
import { ProjectProvider } from "../shared/context/ProjectContext";
// import HomePage from "../pages/HomePage";

const DefaultLayout: React.FC = () => {
  return (
    <div className="">
      <div className="fixed top-0 w-full z-50">
        <Header />
      </div>

      <div className="mt-[70px] sm:mt-[80px]">
        <ProjectProvider>
          <Outlet />
        </ProjectProvider>
      </div>
    </div>
  );
};

export default DefaultLayout;
