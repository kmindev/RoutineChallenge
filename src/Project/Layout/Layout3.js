import Header3 from './Header3';
import Footer2 from './Footer2';
import { Outlet } from 'react-router-dom';

const Layout3 = () => {
  return (
    <>
      <Header3 />
      <Outlet />
      <Footer2 />
    </>
  );
};

export default Layout3;