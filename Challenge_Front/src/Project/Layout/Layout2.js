import Header2 from './Header2';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout2 = () => {
  return (
    <>
      <Header2 />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout2;