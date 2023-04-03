import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {FullPage,Slide} from "https://cdn.skypack.dev/react-full-page@0.1.12";
import './ViewFindId.css';

const ViewFindId = () => {

  const input_name = useRef();  
  const input_email = useRef();
  const input_btn = useRef();

  const navigate = useNavigate();

  const handleFindId = () => {
    if (input_name.current.value === "" || input_name.current.value === undefined) {
      alert("이름을 입력하세요.");
      input_name.current.focus();
      return false;
    }
    if (input_email.current.value === "" || input_email.current.value === undefined) {
      alert("이메일을 입력하세요.");
      input_email.current.focus();
      return false;
    }

    axios
      .post("/find_id", {
        member_name: input_name.current.value,
        member_email: input_email.current.value,
      })
      .then((res) => {
        console.log("handleFindId =>", res);
        if (res.data.length > 0) {
          alert("회원님의 아이디는 " + res.data + "입니다");
          navigate("/login");
        } else {
          alert("일치하는 정보가 없습니다. 이름과 이메일을 확인해주세요.");
          navigate("/viewFindId");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      if (e.target.name ==="name") {
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
        <div className="find-id">
          <div className='inner'>
            <div className='box'>
              <h2>ID 찾기</h2>
              <div className='top'>
                <p>
                  <input 
                    ref={input_name}
                    type="text"
                    name="name"
                    placeholder="Name"
                    //value={name}
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
                  <li className='searchPW'><a href="/viewFindPw">비밀번호 찾기</a></li>
                </ul>
                <button ref={input_btn} onClick={handleFindId}>ID 찾기</button>
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


export default ViewFindId;