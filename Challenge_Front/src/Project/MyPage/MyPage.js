import { useEffect, useState } from "react";
import MypageChallenge from "./MypageChallenge";
import EditInformation from "./EditInformation";
import { useNavigate } from "react-router-dom";

function MyPage(props) {
  const navigate = useNavigate();
  useEffect(() => {
    // 로그인 상태인지 체크
    const login_id = window.sessionStorage.getItem("member_id");
    if (login_id === null) {
      alert("로그인 후 사용 가능합니다!!");
      navigate("/login");
    }
  }, []);

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
