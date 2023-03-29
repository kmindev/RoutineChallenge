import { useState, useEffect } from "react";
import { Outlet } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }
  useEffect(()=>{
      window.addEventListener('scroll', updateScroll);
  });


  return (
    <div>
      <header>
        <div className={scrollPosition < 100 ? "original_header" : "change_header"}>
          <nav className="nav">
            <ul className='nav-left'>
              <li className="l01"><a href="#about">ABOUT</a></li>
              <li className="l01"><a href="/challenge">CHALLENGE</a></li>
              <li className="l02"><a href="#about">ABOUT</a></li>
              <li className="l02"><a href="/challenge">CHALLENGE</a></li>
            </ul>
            <ul className='nav-center'>
              <li className="logo1"><a href="#"><img src={process.env.PUBLIC_URL + "/image/logo/logo_white.png"} alt="logo1" /></a></li>
              <li className="logo2"><a href="#"><img src={process.env.PUBLIC_URL + "/image/logo/logo.png"} alt="logo2" /></a></li>
            </ul>
            <ul className='nav-right'>
              <li className="l01"><a href="/myPage">MY PAGE</a></li>
              <li className="l01"><a href="/login">LOGIN</a></li>
              <li className="l01"><a href="/join">JOIN</a></li>
              <li className="l02"><a href="/myPage">MY PAGE</a></li>
              <li className="l02"><a href="/login">LOGIN</a></li>
              <li className="l02"><a href="/join">JOIN</a></li>
            </ul>
          </nav>        
        </div>
      </header>
    </div>
  );
};

export default Header;