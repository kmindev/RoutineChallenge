import axios from "axios";
import "./Sidebar.css";
import { useState } from "react";
import { useEffect } from "react";

function Sidebar(props) {
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

  return (
    <div className="sideBar-wrap">
      <div className="sideBar">
        <div className="sideProfile">
          <div id="profile_container">
            <p className="pf-img">
              <img src={user.member_profile} alt="프로필 사진" />
            </p>
            <p className="pf-text">
              {user.member_nickname}
              <br />
              <span>{user.member_email}</span>
            </p>
          </div>
          <img
            className="line"
            src={process.env.PUBLIC_URL + "/image/myPage/line.png"}
            alt="이미지 로드"
          ></img>
          <div id="side-nav">
            <p className="nav-sub">
              <a href="/myPage">참여중인 챌린지</a>
            </p>
            <p className="nav-sub">
              <a href="/editInfo">개인정보 수정</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
