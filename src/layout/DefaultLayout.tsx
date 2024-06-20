import Header from "../shared/components/Header";
import { Outlet } from "react-router-dom";
// import HomePage from "../pages/HomePage";

const DefaultLayout = () => {
  return (
    <div className="">
      <div className="fixed top-0 w-full  z-50">
        <Header />
      </div>

      <div className="  mt-[70px] sm:mt-[80px] ">
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
