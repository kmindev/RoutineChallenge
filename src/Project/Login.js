import React, { Component } from 'react';
import {FullPage,Slide} from "https://cdn.skypack.dev/react-full-page@0.1.12";
import './Login.css';

class Login extends Component {

  input_id = React.createRef();  //ref 설정: createRef함수
  input_pw = React.createRef();
  input_btn = React.createRef();

  onChange = e => {
    console.log(e.target.name,":",e.target.value);
  };

  onKeyPress = (e) => {
    if (e.key === "Enter") {
      if (e.target.name ==="id") {
        this.input_pw.current.focus();  //ref 조회: createRef함수(.current)
      } else if (e.target.name ==="pw") {
        this.input_btn.current.focus();
      }
    }
  }

  onClick = () => {
    alert(
      this.input_id.current.value + '님 오늘도 반갑습니다!'
    );
    
      this.input_id.current.value = '';
  };
  
  render() {
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
                      ref={this.input_id}
                      type="text"
                      name="id"
                      placeholder="UserID"
                      //value={id}
                      onChange={this.onChange}
                      onKeyPress={this.onKeyPress}
                    />
                  </p>
                  <p>
                    <input 
                      ref={this.input_pw}
                      type="password"
                      name="pw"
                      placeholder="Password"
                      //value={pw}
                      onChange={this.onChange}
                      onKeyPress={this.onKeyPress}
                    />
                  </p>
                </div>
                <div className='bottom'>
                  <ul className='search'>
                    <li className='searchID'><a href="#">ID 찾기</a></li>
                    <li>l</li>
                    <li className='searchPW'><a href="#">비밀번호 찾기</a></li>
                  </ul>
                  <button ref={this.input_btn} onClick={this.onClick}>LOGIN</button>
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
};


export default Login;