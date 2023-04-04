import './Header3.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Header3 = () => {
  const [user, setUser] = useState({});
  const member_id = window.sessionStorage.getItem("member_id");
  const getUser = () => {
    axios
      .get("/get_member", {
        params: {
          member_id: member_id,
        },
      })
      .then((res) => setUser(res.data))
      .catch((e) => {
        console.error(e);
      });
  };
  useEffect(() => {
    getUser();
  }, []);

  const navigate = useNavigate(); 

  const linkToMain = () => {
    navigate("/");
  };

  const handleLogout = () => {
    console.log("handleLogout");
    window.sessionStorage.clear();
    console.log(
      "handleLogout: window.sessionStorage(login_id) =>",
      window.sessionStorage.getItem("member_id")
    );
    alert('내일 또 만나요!');
  };

  
  return (
    <div>
      <header>
        <section className="header3">
          <div className="logoText">
            <p onClick={linkToMain}><a href="/"><img src={process.env.PUBLIC_URL + "/image/logo/logo.png"} alt="logo" /></a></p>          
            <p><span>{user.member_nickname}</span> 챌린저의 하루를 응원합니다!</p>
          </div>
          <div className='rNav'>
            <ul className='nav'>
              <li className='l04'><a href="/#about">ABOUT</a></li>
              <li className='l04'><a href="/challenge">CHALLENGE</a></li>
              <li className='l04'><a href="#" onClick={handleLogout}>LOGOUT</a></li>
            </ul>
          </div>        
        </section>
      </header>
    </div>
  );
};

export default Header3;