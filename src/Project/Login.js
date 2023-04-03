import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {FullPage,Slide} from "https://cdn.skypack.dev/react-full-page@0.1.12";
import './Login.css';

const Login = () => {

  //const [inputId, setInputId] = useState();
  //const [inputPw, setInputPw] = useState("");

  const input_id = useRef();
  const input_pw = useRef();
  const input_btn = useRef();

  const navigate = useNavigate();

  const handleLogin = () => {
    if (input_id.current.value === "" || input_id.current.value === undefined) {
      alert("아이디를 입력하세요.");
      input_id.current.focus();
      return false;
    }
    if (input_pw.current.value === "" || input_pw.current.value === undefined) {
      alert("패스워드를 입력하세요.");
      input_pw.current.focus();
      return false;
    }

    axios
      .post("/login", {
        member_id: input_id.current.value,
        member_password: input_pw.current.value,
      })
      .then((res) => {
        console.log("handleLogin =>", res);
        if (res.data === 1) {
          alert(input_id.current.value + "님 오늘도 반갑습니다!");
          window.sessionStorage.setItem("input_id", input_id.current.value);
          navigate("/");
        } else {
          alert("로그인에 실패하셨습니다!");
          navigate("/login");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      if (e.target.name ==="id") {
        input_pw.current.focus();  
      } else if (e.target.name ==="pw") {
        input_btn.current.focus();
      }
    }
  }
  
  
  return (
    <div>
    <FullPage controls controlsProps={{className:"slide"}}>
      <Slide>
        <div className="login">
          <div className='inner'>
            <div className='box'>
              <h2>로그인</h2>
              <div className='top'>
                <p>
                  <input 
                    ref={input_id}
                    type="text"
                    name="id"
                    placeholder="UserID"
                    //value={inputId}
                    //onChange={(e) => {setInputId(e.target.value);}}
                    onKeyPress={onKeyPress}
                  />
                </p>
                <p>
                  <input 
                    ref={input_pw}
                    type="password"
                    name="pw"
                    placeholder="Password"
                    //value={inputPw}
                    //onChange={(e) => {setInputPw(e.target.value);}}
                    onKeyPress={onKeyPress}
                  />
                </p>
              </div>
              <div className='bottom'>
                <ul className='search'>
                  <li className='searchID'><a href="viewFindId">ID 찾기</a></li>
                  <li>l</li>
                  <li className='searchPW'><a href="viewFindPw">비밀번호 찾기</a></li>
                </ul>
                <button ref={input_btn} onClick={handleLogin}>LOGIN</button>
                <p><a href="/join">회원가입</a></p>
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


export default Login;