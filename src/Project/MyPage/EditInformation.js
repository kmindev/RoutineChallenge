import { useState, useRef } from "react";
import "./EditInformation.css";

function EditInformation(props) {
  const [user, setUser] = useState({
    name: "성이름",  //이름
    id: "idChallenger00",  //아이디
    password: "현재 비밀번호*",  //현재 비밀번호
    nickName: "루챌",  //닉네임
    bday: "2000/01/01",  //생년월일
    email1: "example",  //이메일
    email2: "naver.com",  //이메일 뒷 주소
    challenges: [],  //관심 챌린지
    image: process.env.PUBLIC_URL + "/image/myPage/profile_icon.png", // 프로필 이미지
  });

  const input_current_password = useRef(""); // 현재 비밀번호 ref
  const input_change_password1 = useRef(""); // 변경할 비밀번호 ref
  const input_change_password2 = useRef(""); // 변경할 비밀번호 확인 ref
  const input_chage_nickname = useRef(""); // 변경할 닉네임 ref
  const input_chage_email = useRef(""); // 이메일 ref

  // 프로필 이미지 변경
  const handleImageUpload = (event) => {
    const selectedImage = event.target.files[0];
    const imageUrl = URL.createObjectURL(selectedImage);

    const nextUser = { ...user };

    nextUser.image = imageUrl;
    setUser(nextUser);
  };

  return (
    <div className="editInfo">
      <div className="sideBar">
        <div className="sideProfile">
          <div id="profile_container">
            <p className="pf-img"><img src={user.image} alt="프로필 사진"/></p>
            <p className="pf-text">{user.nickName}<br/><span>{user.email1}@{user.email2}</span></p>
          </div>
          <img className="line" src={process.env.PUBLIC_URL + "/image/myPage/line.png"} alt="이미지 로드"></img>
          <div id="side-nav">
            <p className="nav-sub"><a href="/myPage">참여중인 챌린지</a></p>
            <p className="nav-sub"><a href="/editInfo">개인정보 수정</a></p>
          </div>
        </div>  
      </div>

      <div className="mainPage">
        <div className='box3'>
          <h1>개인정보 수정</h1>
          <form>
            <ul className="box3ul">
              <li className="editL">이름</li>
              <li className="editR">{user.name}</li>
            </ul>
            <ul className="box3ul">
              <li className="editL">아이디</li>
              <li className="editR">{user.id}</li>
            </ul>
            <ul className="box3ul">
              <li className="editL editL2">현재 비밀번호</li>
              <li className="editR">
                <input
                  type="password"
                  placeholder="현재 비밀번호*"
                  required
                  ref={input_current_password}
                />
              </li>
            </ul>
            <ul className="box3ul">
              <li className="editL editL2">비밀번호 변경</li>
              <li className="editR">
                <input
                  type="password"
                  placeholder="새로운 비밀번호"
                  ref={input_change_password1}
                />
              </li>
            </ul>
            <ul className="box3ul">
              <li className="editL"></li>
              <li className="editR">
                <input
                  type="password"
                  placeholder="새로운 비밀번호 확인"
                  ref={input_change_password2}
                />
              </li>
            </ul>
            <ul className="box3ul">
              <li className="editL editL2">닉네임</li>
              <li className="editR">
                <input
                  type="text"
                  placeholder={user.nickName}
                  ref={input_chage_nickname}
                />
              </li>
            </ul>
            <ul className="box3ul">
              <li className="editL">프로필 사진</li>
              <li className="editR">
                <div className="pro-img"><img src={user.image} alt="프로필 사진"/></div>
                <div id="upload_container">
                  <div className="pro-btn">
                    <label className="profile_btn" for="profile_input">업로드</label>
                  </div>
                  <input
                    type="file"
                    id="profile_input"
                    accept="img"
                    onChange={handleImageUpload}
                  ></input>
                </div>
              </li>
            </ul>
            <ul className="box3ul">
              <li className="editL">생년월일</li>
              <li className="editR">{user.bday}</li>
            </ul>
            <ul className="box3ul">
              <li className="editL editL2">이메일</li>
              <li className="editR">
                <p className='email1'>
                  <input
                    ref={input_chage_email}
                    type="email"
                    placeholder={user.email1}
                    required
                  />
                </p>
                  @
                <p className='email2'>
                <select id="email2">
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
            <div className="box3ul">
              <p className='editL editC'>관심 챌린지</p>
              <p className='editR'>
                <div className='favC2'>
                  <p>
                    <input 
                      type="checkbox"
                      id="development"          
                    />
                    <label for='development'><span>자기계발</span></label>
                  </p>
                  <p>
                    <input 
                      type="checkbox"
                      id="learning"          
                    />
                    <label for='learning'><span>학습</span></label>
                  </p>
                  <p>
                    <input 
                      type="checkbox"
                      id="workout"           
                    />
                    <label for='workout'><span>운동</span></label>
                  </p>
                  <p>
                    <input 
                      type="checkbox"
                      id="health"            
                    />
                    <label for='health'><span>건강</span></label>
                  </p>
                  <p>
                    <input 
                      type="checkbox"
                      id="etc" 
                    />
                    <label for='etc'><span>기타</span></label>
                  </p>
                </div>
              </p>
            </div>
            <div className="editBtn">
              <input id="edit" type="submit" value="수정" />
            </div>
            <p className="withdraw"><a href="/">회원탈퇴</a></p>
          </form>  
        </div>
      </div>
    </div>
  );
}

export default EditInformation;