import './Header3.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header3 = () => {

  const navigate = useNavigate(); 

  const linkToMain = () => {
    navigate("/");
  };

  const logout = () => {
    alert(
      '내일 또 만나요!'
    );
  };
  
  return (
    <div>
      <header>
        <section className="header3">
          <div className="logoText">
            <p onClick={linkToMain}><a href="/"><img src={process.env.PUBLIC_URL + "/image/logo/logo.png"} alt="logo" /></a></p>          
            <p><span>루챌</span> 챌린저의 하루를 응원합니다!</p>
          </div>
          <div className='rNav'>
            <ul className='nav'>
              <li className='l04'><a href="/#about">ABOUT</a></li>
              <li className='l04'><a href="/challenge">CHALLENGE</a></li>
              <li className='l04'><a href="#" onClick={logout}>LOGOUT</a></li>
            </ul>
          </div>        
        </section>
      </header>
    </div>
  );
};

export default Header3;