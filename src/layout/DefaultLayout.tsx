import Header from "../components/layout/Header/Header";
import LandingPage from "../pages/Landing";

const DefaultLayout = () => {
  return (
    <div className='overflow-hidden'>
      <Header />
      <LandingPage></LandingPage>
    </div>
  );
};

export default DefaultLayout;
