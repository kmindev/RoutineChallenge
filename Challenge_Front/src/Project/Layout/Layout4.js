import Header4 from './Header4';
import Footer2 from './Footer2';
import { Outlet } from 'react-router-dom';

const Layout4 = () => {
  return (
    <>
      <Header4 />
      <Outlet />
      <Footer2 />
    </>
  );
};

export default Layout4;