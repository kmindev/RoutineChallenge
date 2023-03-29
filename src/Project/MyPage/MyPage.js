import "./MyPage.css";
import { useState } from "react";
import moment from "moment";

function MyPage(props) {
  const [user, setUser] = useState({
    nickName: "루챌",  //네임
    email1: "example", //이메일
    email2: "naver.com", //이메일 뒷 주소
    image: process.env.PUBLIC_URL + "/image/myPage/profile_icon.png", // 프로필 이미지
  });

  // 현재 날짜를 가져옵니다.
  const today = moment();

  // 현재 연도와 월을 state로 관리합니다.
  const [year, setYear] = useState(today.year());
  const [month, setMonth] = useState(today.month()); // 0 ~ 11

  // year, month의 상태값을 저장하기 위한 moment
  const current = moment([year, month]);

  // 마지막 일 을 구한다.
  const lastDay = current.daysInMonth();

  // 배열의 길이만큼 컬럼 생성
  const days = Array.from({ length: lastDay }, (_, index) => {
    if ((index + 1) % 7 === 1) {
      // 일요일
      return (
        <td key={index} style={{ color: "#FF0000" }}>
          {index + 1}
        </td>
      );
    } else if ((index + 1) % 7 === 0) {
      // 토요일
      return (
        <td key={index} style={{ color: "#0000FF" }}>
          {index + 1}
        </td>
      );
    } else {
      // 평일
      return <td key={index}>{index + 1}</td>;
    }
  });

  // x 표시
  const check = Array.from({ length: lastDay }, (_, index1) => (
    <td key={index1} style={{ color: "#EB8989", fontSize: "20px" }}>
      {"x"}
    </td>
  ));

  // o 표시
  const check1 = Array.from({ length: lastDay }, (_, index1) => (
    <td key={index1} style={{ color: "#84D184", fontSize: "20px" }}>
      {"o"}
    </td>
  ));

  // 빈 칸
  const check2 = Array.from({ length: lastDay }, (_, index1) => (
    <td key={index1}>{""}</td>
  ));

  // 이전 달로 이동하는 함수입니다.
  const prevMonth = () => {
    console.log(days);
    if (month === 0) {
      setYear(year - 1);
      setMonth(11);
    } else {
      setMonth(month - 1);
    }
  };

  // 다음 달로 이동하는 함수입니다.
  const nextMonth = () => {
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
    } else {
      setMonth(month + 1);
    }
  };


  return (
    <div>
      <div className="headerArea"></div>
      <div className="myPage">
        <div className="sideBar">
          <div className="sideProfile">
            <div id="profile_container">
              <p className="pf-img"><img src={user.image} alt="프로필 사진"/></p>
              <p className="pf-text">{user.nickName}<br/><span>{user.email1}@{user.email2}</span></p>
            </div>
            <img className="line" src={process.env.PUBLIC_URL + "/image/myPage/line.png"} alt="이미지 로드"></img>
            <div id="side-nav">
              <p className="nav-sub2"><a href="/myPage">참여중인 챌린지</a></p>
              <p className="nav-sub2"><a href="/editInfo">개인정보 수정</a></p>
            </div>
          </div>  
        </div>

        <div className="mainPage">
          {/* 나만의 챌린지 부분 */}
          <div className="my_challenge">
            <div className="my_top">
              <p className="my_title">나만의 챌린지</p>
              <p className="my_modify"><a href="/">수정</a></p>
            </div>
            <div className="my_body">
              <table className="calender">
                <tr id="days">
                  <td>
                    <span onClick={prevMonth}>{"<"}</span>
                    <span>{month + 1}월</span>
                    <span onClick={nextMonth}>{">"}</span>
                  </td>
                  {days}
                </tr>
                <tr className="check">
                  <input type="text" placeholder="Wake up at 6 AM"></input>
                  {check}
                </tr>
                <tr className="check">
                  <input type="text" placeholder="Dring 1L water"></input>
                  {check1}
                </tr>
                <tr className="check">
                  <input type="text" placeholder="Go to the GYM"></input>
                  {check1}
                </tr>
                <tr className="check">
                  <input type="text" placeholder="Jogging"></input>
                  {check}
                </tr>
                <tr className="check">
                  <input type="text" placeholder=""></input>
                  {check2}
                </tr>
                <tr className="check">
                  <input type="text" placeholder=""></input>
                  {check2}
                </tr>
                <tr className="check">
                  <input type="text" placeholder=""></input>
                  {check2}
                </tr>
              </table>
            </div>
          </div>

          {/* 참여중인 공유 챌린지 */}
          <div className="share_challenge">
            <div className="share_top">
              <p className="share_title">참여중인 공유 챌린지</p>
              <p className="share_link"><a href="/challenge">새로운 챌린지 보러가기</a></p>
            </div>
            <div className="share_body">
              <ul>
                <li id="my_challenge">
                  <div className="ch-image">
                    <img
                      className="ch-img"
                      alt="챌린지 사진"
                      src={process.env.PUBLIC_URL + "/image/myPage/study.jpg"}
                    ></img>
                  </div>
                  <div className="ch-text">
                    <p className="ch-title">공부 챌린지 이름 가나다</p>
                    <p className="ch-subtext">내용 및 하고 싶은말 <br/>내용 및 하고 싶은말</p>
                    <p className="ch-date">2023.01.01 ~ 2023.12.31</p>
                  </div>
                </li>

                <li id="my_challenge">
                  <div className="ch-image">
                    <img
                      className="ch-img"
                      alt="챌린지 사진"
                      src={process.env.PUBLIC_URL + "/image/myPage/jogging.jpg"}
                    ></img>
                  </div>
                  <div className="ch-text">
                  <p className="ch-title">조깅 챌린지</p>
                    <p className="ch-subtext">내용 및 하고싶은 말<br/>운동 건강...</p>
                    <p className="ch-date">2023.01.01 ~ 2023.12.31</p>
                  </div>
                </li>

                <li id="my_challenge">
                  <div className="ch-image">
                    <img
                      className="ch-img"
                      alt="챌린지 사진"
                      src={process.env.PUBLIC_URL + "/image/myPage/healthy.jpg"}
                    ></img>
                  </div>
                  <div className="ch-text">
                    <p className="ch-title">건강식/다이어트 챌린지 이름</p>
                    <p className="ch-subtext">내용 및 하고싶은 말 <br/>건강식 다이어트 화이팅</p>
                    <p className="ch-date">2023.01.01 ~ 2023.12.31</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;