import "./DetailChallenge.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useSearchParams } from "react-router-dom";
import Login from "../Login";

//window.sessionStorage.setItem("member_id", "kim");

function DetailChallenge() {
  var [참여현황변수, set참여현황변수] = useState(0); //  챌린지 참여중이 아니면 0, 챌린지에 참여중이면 1
  var [오늘인증했나변수, set오늘인증했나변수] = useState(0); // 인증했으면 1, 인증 안했으면 0  이 항목은 '참여현황변수'가 1일 경우에만 유효합니다.

  var bonin = 0;
  const [board_reply_max, setBoard_reply_max] = useState(3); // 초기 게시판 덧글 최대 노출 개수

  const [saveReply, setSaveReply] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("challenge_num");
  //console.log(id);
  parseInt({ id });

  const login_id = window.sessionStorage.getItem("member_id"); // 해당 코드를 통해 세션에 저장된 member_id를 따와 저장합니다.

  const [challenge_data, setChallenge_data] = useState({
    challenge_num: "",
    challenge_create: "",
    challenge_title: "",
    challenge_theme: "",
    challenge_start: "",
    challenge_end: "",
    challenge_cycle: "",
    challenge_intro: "",
    challenge_content: "",
    challenge_thumbnail: "",
    challenge_image: "",
    challenge_readcount: "",
  });

  const [reply_data, setReply_data] = useState([]);

  const [people, setPeople] = useState(0);

  const member_count = () => {
    axios
      .get("/count_challengemember", {
        params: {
          challenge_num: id,
        },
      })
      .then((res) => {
        //console.log("넘어옴 =>", id);
        setPeople(res.data);
      });
  };

  const member_check = () => {
    //console.log(id);

    axios
      .post("/membercheck_challenge", {
        member_id: login_id, // 위에서 따온 member_id와 challenge_num을 해당 url 파라미터로 넘깁니다.
        challenge_num: id,
      })
      .then((res) => {
        //console.log(res.data);
        if (res.data === 1) {
          // res.data는 스프링에서의 membercheck_challenge 함수의 return 값입니다. 챌린지 참여 여부 조회 (1:참여 중, 0: 미참여)

          set참여현황변수(1);
        } else {
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const detail = () => {
    axios
      .get("/detail_challenge", {
        params: {
          challenge_num: id,
        },
      })
      .then((res) => {
        //console.log(res.data);

        setChallenge_data(res.data);
      });
  };

  const join = () => {
    axios
      .post("/join_challenge", {
        challenge_num: id,
        member_id: login_id,
      })
      .then((res) => {
        //console.log(res);
      });
  };

  const reply_get = () => {
    axios
      .get("/get_board", {
        params: {
          challenge_num: id,
        },
      })
      .then((res) => {
        setReply_data(res.data);
      });
  };

  const reply_add = () => {
    axios
      .post("/insert_board", {
        member_id: login_id,
        challenge_num: id,
        board_content: saveReply,
      })
      .then((res) => {
        console.log(res);
      });
  };

  useEffect(() => {
    //console.log("zz");
    member_check();
    member_count();
    detail();
    reply_get();
  }, []);

  const saveUserReply = (event) => {
    setSaveReply(event.target.value);
  };

  ///////////////////////////////////////////////////////////////// 여기 부터 타이머 만드는데 관련 된 요소 /////////////////////////////////////////////////////////////

  var 챌린지시작일변수 = challenge_data.challenge_start;
  var mathteacher_year = 챌린지시작일변수.slice(0, 4);
  var mathteacher_month = 챌린지시작일변수.slice(5, 7);
  var mathteacher_day = 챌린지시작일변수.slice(8, 10);
  var mathteacher = new Date(
    mathteacher_year,
    mathteacher_month - 1,
    mathteacher_day
  );

  //console.log(mathteacher);

  //console.log(챌린지시작일변수);
  var 챌린지마지막일변수 = challenge_data.challenge_end;
  var mathteacher2_year = 챌린지마지막일변수.slice(0, 4);
  var mathteacher2_month = 챌린지마지막일변수.slice(5, 7);
  var mathteacher2_day = 챌린지마지막일변수.slice(8, 10);
  var mathteacher2 = new Date(
    mathteacher2_year,
    mathteacher2_month - 1,
    mathteacher2_day
  );

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
  var gap2 = mathteacher - today;

  var day3 = Math.floor(gap2 / (1000 * 60 * 60 * 24));

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

  if (time > mathteacher2) {
    // 현재 시간이 챌린지 마지막 날을 지났다면 closed를 1로 설정합니다.
    closed = 1;
  }

  var started = 0; // 해당 변수는 챌린지 시작일이 현재 날짜를 지났는지 판단하는 변수입니다.

  if (time > mathteacher) {
    // 현재 시간이 챌린지 첫 시작 날을 지났다면 started를 1로 설정합니다.
    started = 1;
  }

  if (time === tomorrow || time === tomorrow1) {
    // 날짜가 바뀌면 인증을 초기화
    set오늘인증했나변수(0);
  }

  const replyget = reply_data.map((reply_data) => (
    <div className="reply-obj">
      <div className="reply-objleft">{reply_data.member_id}</div>
      <div className="reply-objcontent">{reply_data.board_content}</div>
      <div className="reply-objdate">{reply_data.board_date}</div>
      {reply_data.member_id === login_id ? ( // 댓글을 쓴 사람과 본인 id가 일치하면
        <div className="reply-objchange">수정</div>
      ) : null}
    </div>
  ));

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
                <div className="state-box-PartInChallenge">
                  참여 중인 챌린지
                </div>
                {started === 1 ? (
                  <div className="state-box-Challenge">진행중</div>
                ) : (
                  <div className="state-box-Challenge2">진행예정</div>
                )}
              </>
            ) : started === 1 ? (
              <div className="state-box-Challenge">진행중</div>
            ) : (
              <div className="state-box-Challenge2">진행예정</div>
            )}

            <div className="Challenge-Title">
              {challenge_data.challenge_title}
            </div>
            <div className="Challenge-Period">
              {challenge_data.challenge_start}&nbsp;~&nbsp;
              {challenge_data.challenge_end}
            </div>
            <div className="Challenge-People">현재 {people}명 참여 중</div>
            <div className="Challenge-Explain">
              <br />
              {challenge_data.challenge_content}
              <br />
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
                ) : started === 1 ? (
                  <div
                    className="box-Today-challenge"
                    onClick={() => {
                      document
                        .querySelector('.reply-inputform-textbox[type="text"]')
                        .focus();

                      // 🚩인증 창을 띄우고 인증이 완료되면 되게 다시 수정해야 합니다. 추가로 변수같은걸 만들어서 db에 전송하면 끝🚩
                      // 근데 이 변수를 날짜마다 초기화 해주는 기능이 필요합니다
                    }}
                  >
                    <div className="box-Text">오늘의 챌린지 인증하기</div>
                    <div className="until-time">{final_time}</div>
                  </div>
                ) : (
                  <div
                    className="box-Today-challenge"
                    onClick={() => {
                      alert("챌린지 시작일이 아닙니다.");
                    }}
                  >
                    <div className="box-Text">챌린지 시작까지</div>
                    <div className="until-time">{day3 + 1}일</div>
                  </div>
                )
              ) : started === 1 ? (
                <div className="box-Today-challenge4">마감된 챌린지입니다</div>
              ) : (
                <>
                  <div
                    className="box-Today-challenge2"
                    onClick={() => {
                      join();
                      alert("챌린지에 참여하였습니다!"); // 🚩맘에 드는 폼으로 수정해야 합니다 🚩
                      set참여현황변수(1);
                    }}
                  >
                    함께 하기
                  </div>
                </>
              ) // 지나지 않았다면 함께 하기 버튼을 활성화 해줍니다.
            }
          </div>
        </div>
        {started === 0 ? (
          <>
            {closed === 1 ? (
              <div className="blank_bottom_place">
                모집 마감된 챌린지입니다.
              </div>
            ) : (
              <div className="blank_bottom_place">
                진행 예정인 챌린지입니다.
              </div>
            )}

            <img
              className="image-explain-detail"
              alt="챌린지설명"
              src={
                process.env.PUBLIC_URL + "/image/detailChallenge/detail9.png"
              }
            ></img>
          </>
        ) : (
          <div className="bottom-place">
            {
              // 나의 챌린지 참여 현황은 챌린지에 참여 중일때만 표시되도록 하였습니다.
              참여현황변수 === 1 ? (
                <>
                  <section id="check">
                    <div className="reply-box">
                      <div className="challenge-certify">챌린지 인증</div>
                      <div className="reply-inputform">
                        <input
                          type="text"
                          className="reply-inputform-textbox"
                          placeholder="챌린지 인증 댓글 입력"
                          value={saveReply}
                          onChange={saveUserReply}
                        />
                        {closed === 1 ? (
                          <div
                            className="reply-inputform-button"
                            onClick={() => {
                              alert("마감된 챌린지 입니다.");
                            }}
                          >
                            등록
                          </div>
                        ) : 오늘인증했나변수 === 1 ? (
                          <div
                            className="reply-inputform-button"
                            onClick={() => {
                              alert("오늘은 이미 인증했습니다.");
                            }}
                          >
                            등록
                          </div>
                        ) : (
                          <div
                            className="reply-inputform-button"
                            onClick={() => {
                              if (saveReply === "") {
                                alert("글을 작성해주세요.");
                              } else {
                                set오늘인증했나변수(1);
                                alert("인증되었습니다.");
                                reply_add();
                                reply_get();
                              }
                            }}
                          >
                            등록
                          </div>
                        )}
                      </div>
                      <div className="reply-list">
                        {replyget}
                        {/* <div className="reply-moreContent">더보기</div> */}
                      </div>
                    </div>
                  </section>

                  <div className="table-big">
                    <img
                      className="detail-image"
                      alt=""
                      src={
                        process.env.PUBLIC_URL +
                        "/image/detailChallenge/detail9.png"
                      }
                    ></img>
                  </div>
                </>
              ) : null
            }
          </div>
        )}
      </div>
    </>
  );
}

export default DetailChallenge;
