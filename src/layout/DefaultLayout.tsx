import Header from "../components/layout/Header/Header";
// import HomePage from "../pages/HomePage";
import MaintenancePage from "../pages/MaintenancePage";

const DefaultLayout = () => {
  return (
    <div className=''>
      <div className="fixed top-0 w-full  z-50">
      <Header />
      </div >

      <div  className="">
      {/* <HomePage></HomePage> */}
      <MaintenancePage></MaintenancePage>
      </div>
    </div>
  );
};

export default DefaultLayout;
