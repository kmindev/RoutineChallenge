import "./Sidebar.css";
import { useState } from "react";

function Sidebar(props) {

  const [user, setUser] = useState({
    nickName: "루챌",  //네임
    email1: "example", //이메일
    email2: "naver.com", //이메일 뒷 주소
    image: process.env.PUBLIC_URL + "/image/myPage/profile_icon.png", // 프로필 이미지
  });

  return (
    <div className="sideBar-wrap">
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
    </div>
  );
};

export default Sidebar;