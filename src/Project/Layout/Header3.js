import './Header3.css';
import React from 'react';

const Header3 = () => {

  const onClick = () => {
    alert(
      '내일 또 만나요!'
    );
  };
  
  return (
    <div>
      <header>
        <section className="header3">
          <div className="logoText">
            <p><a href="/"><img src={process.env.PUBLIC_URL + "/image/logo/logo.png"} alt="logo" /></a></p>          
            <p><span>루챌</span> 챌린저의 하루를 응원합니다!</p>
          </div>
          <div className='rNav'>
            <ul className='nav'>
              <li className='l04'><a href="/#about">ABOUT</a></li>
              <li className='l04'><a href="/challenge">CHALLENGE</a></li>
              <li className='l04'><a href="#" onClick={onClick}>LOGOUT</a></li>
            </ul>
          </div>        
        </section>
      </header>
    </div>
  );
};

export default Header3;