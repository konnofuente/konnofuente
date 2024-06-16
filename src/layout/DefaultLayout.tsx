import Header from "../components/common/Header/Header";
import HomePage from "../pages/HomePage";
// import HomePage from "../pages/HomePage";

const DefaultLayout = () => {
  return (
    <div className=''>
      <div className="fixed top-0 w-full  z-50">
      <Header />
      </div >

      <div  className="  mt-[70px] sm:mt-[80px] ">
      <HomePage></HomePage>
      {/* <MaintenancePage></MaintenancePage> */}
      </div>
    </div>
  );
};

export default DefaultLayout;
