import Header3 from './Header3';
import Footer2 from './Footer2';
import { Outlet } from 'react-router-dom';
import Sidebar from '../MyPage/Sidebar';

const Layout3 = () => {
  return (
    <>
      <Header3 />
      <Sidebar />
      <Outlet />
      <Footer2 />
    </>
  );
};

export default Layout3;