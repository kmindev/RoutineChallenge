import { useState } from "react";
import Sidebar from "./Sidebar";
import MypageChallenge from "./MypageChallenge";
import EditInformation from "./EditInformation";

function MyPage(props) {
  const [actionMode, setActionMode] = useState(0);

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
