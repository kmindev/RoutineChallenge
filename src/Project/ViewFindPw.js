import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {FullPage,Slide} from "https://cdn.skypack.dev/react-full-page@0.1.12";
import './ViewFindPw.css';

const ViewFindPw = () => {

  const input_id = useRef(); 
  const input_email = useRef();
  const input_btn = useRef();

  const navigate = useNavigate();

  const handleFindPw = () => {
    if (input_id.current.value === "" || input_id.current.value === undefined) {
      alert("아이디를 입력하세요.");
      input_id.current.focus();
      return false;
    }
    if (input_email.current.value === "" || input_email.current.value === undefined) {
      alert("이메일을 입력하세요.");
      input_email.current.focus();
      return false;
    }

    axios
      .post("/find_pw", {
        member_id: input_id.current.value,
        member_email: input_email.current.value,
      })
      .then((res) => {
        console.log("handleFindPw =>", res);
        if (res.data.length > 0) {
          alert("회원님의 패스워드는 " + res.data + "입니다");
          navigate("/login");
        } else {
          alert("일치하는 정보가 없습니다. 아이디와 email을 확인해주세요.");
          navigate("/viewFindPw");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };


  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      if (e.target.name ==="id") {
        input_email.current.focus();
      } else if (e.target.name ==="email") {
        input_btn.current.focus();
      }
    }
  }
  

  return (
    <div>
    <FullPage controls controlsProps={{className:"slide"}}>
      <Slide>
        <div className="find-pw">
          <div className='inner'>
            <div className='box'>
              <h2>Password 찾기</h2>
              <div className='top'>
                <p>
                  <input 
                    ref={input_id}
                    type="text"
                    name="id"
                    placeholder="User ID"
                    //value={id}
                    onKeyPress={onKeyPress}
                  />
                </p>
                <p>
                  <input 
                    ref={input_email}
                    type="text"
                    name="email"
                    placeholder="E-mail"
                    //value={email}
                    onKeyPress={onKeyPress}
                  />
                </p>
              </div>
              <div className='bottom'>
                <ul className='search'>
                  <li className='searchID'><a href="/viewFindId">ID 찾기</a></li>
                </ul>
                <button ref={input_btn} onClick={handleFindPw}>Password 찾기</button>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </FullPage>

    <div id='footer'></div>

    </div>
  );
};


export default ViewFindPw;