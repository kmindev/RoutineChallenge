import { useState } from "react";
import Sidebar from "./Sidebar";
import MypageChallenge from "./MypageChallenge";
import EditInformation from "./EditInformation";


function MyPage(props) {
  const [actionMode, setActionMode] = useState(0);

  

  // const [user, setUser] = useState({
  //   nickName: "루챌", //네임
  //   email1: "example", //이메일
  //   email2: "naver.com", //이메일 뒷 주소
  //   image: process.env.PUBLIC_URL + "/image/myPage/profile_icon.png", // 프로필 이미지
  // });

  console.log("actionMode : " + actionMode);

  if (actionMode === 0) {
    //참여중인 챌린지
    return (
      <div>
        {/* <Sidebar></Sidebar> */}
        <MypageChallenge></MypageChallenge>
      </div>
    );
  } else if (actionMode === 1) {
    //개인정보 수정
    return (
      <div>
        {/* <Sidebar></Sidebar> */}
        <EditInformation></EditInformation>
      </div>
    );
  }

  // return (
  //   <div>
  //     <Sidebar></Sidebar>
  //     <MypageChallenge></MypageChallenge>
  //   </div>
  // )
}

export default MyPage;