import "./DetailChallenge.css";
import React from "react";
import { useState, useEffect } from "react";
 


function DetailChallenge() {
  var [참여현황변수, set참여현황변수] = useState(0); //  챌린지 참여중이 아니면 0, 챌린지에 참여중이면 1
  var [오늘인증했나변수, set오늘인증했나변수] = useState(0); // 인증했으면 1, 인증 안했으면 0  이 항목은 '참여현황변수'가 1일 경우에만 유효합니다.

  var 챌린지시작일변수 = new Date("3 2, 2023, 0:00:00");
  var 챌린지마지막일변수 = new Date("6 31, 2023, 0:00:00");

  ///////////////////////////////////////////////////////////////// 여기 부터 타이머 만드는데 관련 된 요소 /////////////////////////////////////////////////////////////

  const [time, setTime] = useState(new Date()); // 현재 시간 변수는 time 입니다. 해당 값은 밀리초 (ms) 형태로 표기 됩니다. ex "1678198855933"

  var today = new Date().getTime(); // 오늘 날짜.

  var seekTomorrow = new Date(); // 내일 구하기 위한 변수 입니다.
  seekTomorrow.setDate(seekTomorrow.getDate() + 1);

  var year2 = seekTomorrow.getFullYear();
  var month2 = ("0" + seekTomorrow.getMonth()).slice(-2);
  var day2 = ("0" + seekTomorrow.getDate()).slice(-2);

  var tomorrow = new Date(year2, month2, day2); // 내일 날짜. 시간 값은 00:00:00으로 고정 입니다. 만약 고정 시간을 바꾸고 싶다면 아랫 줄을 참고합니다.
  //var tomorrow = new Date(year2, month2, day2, 16, 7, 0, 0);
  //  new Date(2011, 1, 1, 2, 3, 4, 567); 2011년 1월 1일, 02시 03분 04.567초

  var tomorrow1 = new Date(year2, month2, day2 - 1);

  var gap = tomorrow - today; // 챌린지 시작일 변수와 현재 날짜의 차를 구합니다.
  var zero = ["", "", ""];
  // var day = Math.ceil(gap / (1000 * 60 * 60 * 24))-1; // 값은 86,400,000 으로 해당 값을 밀리초에서 날짜 값으로 바꿔줍니다.  ex "19423"  이 값을 1970.01.01 에 더해주는식으로
  var hour = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  if (0 <= hour && hour <= 10) {
    zero[0] = "0";
  }
  var min = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60));
  if (0 <= min && min <= 10) {
    zero[1] = "0";
  }
  var sec = Math.ceil((gap % (1000 * 60)) / 1000);
  if (0 <= sec && sec <= 10) {
    zero[2] = "0";
  }

  useEffect(() => {
    // 시계 1000 ms 마다 다시 실행하기 위한 함수
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  var final_time = ""; // 출력부에 사용하는 남은 시간 변수.
  final_time =
    zero[0] +
    (hour - 1) +
    ":" +
    zero[1] +
    (min - 1) +
    ":" +
    zero[2] +
    (sec - 1) +
    " 남음";

  ///////////////////////////////////////////////////////////////// 여기까지 타이머 만드는데 관련 된 요소 /////////////////////////////////////////////////////////////

  var closed = 0; // 마감 됐다면 1, 아니면 0

  if (time > 챌린지마지막일변수) {
    // 현재 시간이 챌린지 마지막 날을 지났다면 closed를 1로 설정합니다.
    closed = 1;
  }

  var started = 0; // 해당 변수는 챌린지 시작일이 현재 날짜를 지났는지 판단하는 변수입니다.

  if (time > 챌린지시작일변수) {
    // 현재 시간이 챌린지 첫 시작 날을 지났다면 started를 1로 설정합니다.
    started = 1;
  }

  if (time === tomorrow || time === tomorrow1) {
    // 날짜가 바뀌면 인증을 초기화
    set오늘인증했나변수(0);
  }

  const arr = [ // 3,4 ,5 ,6
    Array.from(Array(31), (v, i) => i + 1),
    Array.from(Array(30), (v, i) => i + 1),
    Array.from(Array(31), (v, i) => i + 1),
    Array.from(Array(30), (v, i) => i + 1),
  ]; 

  const holiday = [5, 2, 7, 4]; // 각 월의 처음 일요일

  let color = [];

  for (let kazu = 0; kazu < arr.length; kazu++) {
    color[kazu] = arr[kazu].map((i) => {
      let sun = holiday[kazu] % 7;
      let sat = (holiday[kazu] % 7) - 1;

      if (sat < 0) {
        sat = sat + 7;
      }

      if (i % 7 === sun) {
        return "#FF0000";
      } else if (i % 7 === sat) {
        return "#0000FF";
      } else {
        return "#000000";
      }
    });
  }

  return (
    <>
    <div className="forcenterdiv">
      <div className="banner">
        <img
          className="banner-image"
          alt="배너이미지"
          src={process.env.PUBLIC_URL + "/image/detailChallenge/detail8.png"}
        ></img>
        <div className="banner-explain">
          {closed === 1 ? (
            <div className="state-box-Challenge3">진행종료</div>
          ) : 참여현황변수 === 1 ? (
            <>
              <div className="state-box-PartInChallenge">참여 중인 챌린지</div>{" "}
              <div className="state-box-Challenge">진행중</div>
            </>
          ) : started === 1 ? (
            <div className="state-box-Challenge">진행중</div>
          ) : (
            <div className="state-box-Challenge2">진행예정</div>
          )}

          <div className="Challenge-Title">매일 운동하기</div>
          <div className="Challenge-Period">2023.03.02~2023.06.31</div>
          <div className="Challenge-People">현재 213명 참여 중</div>
          <div className="Challenge-Explain">
            -------------------------------------------------<br/>
            운동 설명<br/>
            -------------------------------------------------
          </div>

          {
            closed === 1 ? (
              <div className="box-Today-challenge4">마감된 챌린지입니다</div> // 챌린지가 닫혔는지부터 확인
            ) : 참여현황변수 === 1 ? (
              // 먼저 챌린지에 참여 했는지 여부를 따집니다. 참여했다면 '💛' 로 갑니다. 참여하지 않았다면 '🧡' 로 갑니다.
              오늘인증했나변수 === 1 ? ( // 💛 참여한 상태인데 오늘 인증을 했는지 따집니다.
                <div className="box-Today-challenge3">
                  오늘의 챌린지 인증 완료
                </div> // 인증을 했다면 인증완료 출력, 안했다면 : 밑의 div 인증하기 출력
              ) : (
                <div
                  className="box-Today-challenge"
                  onClick={() => {
                    alert("오늘의 챌린지 인증 완료!");
                    set오늘인증했나변수(1); // 🚩인증 창을 띄우고 인증이 완료되면 되게 다시 수정해야 합니다. 추가로 변수같은걸 만들어서 db에 전송하면 끝🚩
                    // 근데 이 변수를 날짜마다 초기화 해주는 기능이 필요합니다
                  }}
                >
                  <div className="box-Text">오늘의 챌린지 인증하기</div>
                  <div className="until-time">{final_time}</div>
                </div>
              )
            ) : (
              //  (closed === 1) ? // 🧡 챌린지에 참여하지 않은사람들입니다. 챌린지 시작 날짜가 지났는지 확인합니다.
              //  <div className="box-Today-challenge4">마감된 챌린지입니다</div> :  // 지났다면 마감되었다고 알려줍니다.
              <>
              <div
                className="box-Today-challenge2"
                onClick={() => {
                  if (started === 1) {
                    alert("챌린지에 참여하였습니다!"); // 🚩맘에 드는 폼으로 수정해야 합니다 🚩
                    set참여현황변수(1);
                  } else {
                    alert("시작일이 아닙니다"); //🚩맘에 드는 폼으로 수정해야 합니다 🚩
                  }
                }}
              >
                함께 하기
              </div>
              </>
            ) // 지나지 않았다면 함께 하기 버튼을 활성화 해줍니다.
          }
        </div>
      </div>
      {
      started === 0 ? (<><div className="blank_bottom_place">진행 예정인 챌린지입니다.</div>
      <img className="image-explain-detail" alt="챌린지설명" src={process.env.PUBLIC_URL + "/image/detailChallenge/detail9.png"}>
      
      </img>
      
      </>) : null
      }
      <div className="bottom-place"> 
      
      
        {
          
          // 나의 챌린지 참여 현황은 챌린지에 참여 중일때만 표시되도록 하였습니다.
          참여현황변수 === 1 ? (
            <>
              <div className="bottom-text">나의 챌린지 참여 현황</div>
              <section id="check">
                <div>
                  <table>
                    <tr>
                      {arr.map((a, b) => {
                        return (
                          <td>
                            {b + 3}월
                            <br />
                            {arr[b].map((item, num) => {
                              return (
                                <button
                                  className="button-text"
                                  style={{ color: color[b][num] }}
                                >
                                  {item}
                                  <br />
                                  <button className="button-check"></button>
                                </button>
                              );
                            })}
                          </td>
                        );
                      })}
                    </tr>
                  </table>
                </div>
              </section>
              <div className = "challenge-certify">
          챌린지 인증       
        </div>
        <div className = "table-certify">
          <table>
            <tr>
              <td>
                <button class = "certify-button">
                  <img className="certify-image" alt="인증사진" src={process.env.PUBLIC_URL + "/image/detailChallenge/detail7.png"}></img>
                  <div className = "certify-text">
                    <h2>닉네임01</h2>
                    <p>2023년 03월 10일 오늘도 인증 완료!</p>
                  </div>
                  <button class = "modify-button">수정</button>
                </button>
              </td>
              <td>
                <button class = "certify-button">
                  <img className="certify-image" alt="인증사진" src={process.env.PUBLIC_URL + "/image/detailChallenge/detail7.png"}></img>
                  <div className = "certify-text">
                    <h2>루챌</h2>
                    <p>2023년 03월 9일 인증하기</p>
                  </div>
                  <button class = "modify-button">수정</button>
                </button>
              </td>
              <td>
                <button class = "certify-button">
                  <img className="certify-image" alt="인증사진" src={process.env.PUBLIC_URL + "/image/detailChallenge/detail7.png"}></img>
                  <div className = "certify-text">
                    <h2>닉네임02</h2>
                    <p>2023년 03월 10일 인증완료!</p>
                  </div>                           
                </button>
              </td>
            </tr>
          </table>
        </div>
        <div>
        <img className="detail-image" alt="" src={process.env.PUBLIC_URL + "/image/detailChallenge/detail9.png"}></img>
        </div>
              
            </>
          ) : null
        }
      </div>
    </div>  
    </>
  );
}

export default DetailChallenge;
