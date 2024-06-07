import Header from "../components/layout/Header/Header";
// import HomePage from "../pages/HomePage";
import MaintenancePage from "../pages/MaintenancePage";

const DefaultLayout = () => {
  return (
    <div className='overflow-hidden'>
      <Header />
      {/* <HomePage></HomePage> */}
      <MaintenancePage></MaintenancePage>
    </div>
  );
};

export default DefaultLayout;
