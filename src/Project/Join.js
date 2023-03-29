import React, { Component } from 'react';
import './Join.css';

class Join extends Component {

  input_name = React.createRef();  //ref 설정: createRef함수
  input_id = React.createRef();
  input_idCfm = React.createRef();
  input_pw = React.createRef();
  input_pwCfm = React.createRef();
  input_email1 = React.createRef();
  input_email2 = React.createRef();
  input_nick = React.createRef();
  input_profile = React.createRef();
  input_bday = React.createRef();
  input_challenge1 = React.createRef();
  input_challenge2 = React.createRef();
  input_challenge3 = React.createRef();
  input_challenge4 = React.createRef();
  input_challenge5 = React.createRef();
  input_btn = React.createRef();


  onChange = e => {
    console.log(e.target.name,":",e.target.value);
  };

  onKeyPress = (e) => {
    if (e.key === "Enter") {
      if (e.target.name ==="name") {
        this.input_id.current.focus();
      } else if (e.target.name ==="id") {
        this.input_idCfm.current.focus();
      } else if (e.target.name ==="idCfm") {
        this.input_pw.current.focus();
      } else if (e.target.name ==="pw") {
        this.input_pwCfm.current.focus();  
      } else if (e.target.name ==="pwCfm") {
        this.input_email1.current.focus();
      } else if (e.target.name ==="email1") {
        this.input_email2.current.focus();    
      } else if (e.target.name ==="email2") {
        this.input_btn.current.focus();
      }
    }
  }

  idCfm = () => {
    alert(this.input_idCfm.current.value + '사용할 수 있는 아이디입니다.');
    
      this.input_idCfm.current.value = '';
  };

  onClick = () => {
    if (this.input_name.current.value === "" || this.input_name.current.value === undefined) {
      alert("이름을 입력하세요");
      this.input_name.current.focus();
      return false;
    }
    if (
      this.input_id.current.value === "" || this.input_id.current.value === undefined) {
      alert("아이디를 입력하세요");
      this.input_id.current.focus();
      return false;
    }
    if (
      this.input_pw.current.value === "" || this.input_pw.current.value === undefined) {
      alert("비밀번호를 입력하세요");
      this.input_pw.current.focus();
      return false;
    }
    if (
      this.input_pwCfm.current.value === "" || this.input_pw.current.value === undefined) {
      alert("비밀번호확인란에 비밀번호를 입력하세요");
      this.input_pw.current.focus();
      return false;
    }
    if (
      this.input_email1.current.value === "" || this.input_email1.current.value === undefined) {
      alert("이메일을 입력하세요");
      this.input_email1.current.focus();
      return false;
    }
  };

  
  render() {
    return (
      <div className="join">
        <div className='inner'>
          <h2>회원가입</h2>
          <div className='box'>
            <div className='top'>
              <h3>기본정보</h3>
              <ul>
                <li className='left'>이름</li>
                <li className='right'>
                  <input 
                    ref={this.input_name}
                    type="text"
                    name="name"
                    placeholder="이름*"
                    required
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                  />
                </li>
              </ul>
              <ul className='id'>
                <li className='left'>아이디</li>
                <li className='right'>
                  <p className='id01'>
                    <input 
                      ref={this.input_id}
                      type="text"
                      name="id"
                      placeholder="아이디*"
                      required
                      onChange={this.onChange}
                      onKeyPress={this.onKeyPress}
                    />
                  </p>
                  <p className='id02'>
                    <button 
                      ref={this.input_idCfm}
                      name="idCfm"
                      onClick={this.idCfm}
                      onKeyPress={this.onKeyPress}
                    >
                      ID 확인
                    </button>
                  </p>
                </li>
              </ul>
              <ul>
                <li className='left'>비밀번호</li>
                <li className='right'>
                  <input 
                    ref={this.input_pw}
                    type="password"
                    name="pw"
                    placeholder="비밀번호*"
                    required
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                  />
                </li>
              </ul>
              <ul>
                <li className='left'></li>
                <li className='right'>
                  <input 
                    ref={this.input_pwCfm}
                    type="password"
                    name="pwCfm"
                    placeholder="비밀번호확인*"
                    required
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                  />
                </li>
              </ul>
              <ul className='email'>
                <li className='left'>이메일</li>
                <li className='right'>
                  <p className='email01'>
                    <input
                      ref={this.input_email1}
                      type="text"
                      name="email1"
                      placeholder="이메일*"
                      required
                      onChange={this.onChange}
                      onKeyPress={this.onKeyPress}
                    />
                  </p>
                    @
                  <p className='email02'>
                  <select
                    ref={this.input_email2}
                    type="text"
                    name="email2"
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                  >
                    <option value="">도메인 선택</option>
                    <option value="naver.com">naver.com</option>
                    <option value="gmail.com">gmail.com</option>
                    <option value="hanmail.net">hanmail.net</option>
                    <option value="hotmail.com">hotmail.com</option>
                    <option value="korea.com">korea.com</option>
                    <option value="nate.com">nate.com</option>
                    <option value="yahoo.com">yahoo.com</option>
                  </select>
                  </p> 
                </li>
              </ul>
            </div>

            <div className='bottom'>
              <h3>부가정보</h3>
              <ul>
                <li className='left'>닉네임</li>
                <li className='right'>
                  <input 
                    ref={this.input_nick}
                    type="text"
                    name="nickname"
                    placeholder="닉네임"
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                  />
                </li>
              </ul>
              <ul className='profile'>
                <li className='left'>프로필 사진</li>
                <li className='right'>
                  <p className='profile'>
                    <input 
                      ref={this.input_profile}
                      type="file"
                      name="profile"
                      placeholder="선택된 파일 없음"
                      onChange={this.onUploadImage}
                      onKeyPress={this.onKeyPress}
                    />
                  </p> 
                </li>
              </ul>
              <ul>
                <li className='left'>생년월일</li>
                <li className='right'>
                  <input 
                    ref={this.input_bday}
                    type="date"
                    name="bday"
                    data-placeholder="년도/월/일"
                    required
                    aria-required="true"
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                  />
                </li>
              </ul>
              <div>
                <p className='left'>관심 챌린지</p>
                <p className='right'>
                  <div className='favC'>
                    <p>
                      <input 
                        ref={this.input_challenge}
                        type="checkbox"
                        name="challenge1"
                        id='favC01'                    
                        onChange={this.onChange}
                        onKeyPress={this.onKeyPress}
                      />
                      <label for='favC01'><span>자기계발</span></label>
                    </p>
                    <p>
                      <input 
                        ref={this.input_challenge2}
                        type="checkbox"
                        name="challenge2"
                        id='favC02'                     
                        onChange={this.onChange}
                        onKeyPress={this.onKeyPress}
                      />
                      <label for='favC02'><span>학습</span></label>
                    </p>
                    <p>
                      <input 
                        ref={this.input_challenge3}
                        type="checkbox"
                        name="challenge3"
                        id='favC03'                      
                        onChange={this.onChange}
                        onKeyPress={this.onKeyPress}
                      />
                      <label for='favC03'><span>운동</span></label>
                    </p>
                    <p>
                      <input 
                        ref={this.input_challenge4}
                        type="checkbox"
                        name="challenge4"
                        id='favC04'                  
                        onChange={this.onChange}
                        onKeyPress={this.onKeyPress}
                      />
                      <label for='favC04'><span>건강</span></label>
                    </p>
                    <p>
                      <input 
                        ref={this.input_challenge5}
                        type="checkbox"
                        name="challenge5" 
                        id='favC05'                     
                        onChange={this.onChange}
                        onKeyPress={this.onKeyPress}
                      />
                      <label for='favC05'><span>기타</span></label>
                    </p>
                  </div>
                </p>
              </div>
              <button ref={this.input_btn} onClick={this.onClick}>JOIN</button>
            </div>
          </div>
        </div>
      </div> 
    );
  };
};


export default Join;