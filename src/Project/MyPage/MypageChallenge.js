import "./MypageChallenge.css";

function MypageChallenge(props) {

  return (
    <>
    <div className="myPage">
    <div className="mainPage">
    {/* 참여중인 공유 챌린지 */}
    <div className="share_challenge">
      <div className="share_top">
        <p className="share_title">참여중인 공유 챌린지</p>
        <p className="share_link"><a href="/challenge">새로운 챌린지 보러가기</a></p>
      </div> {/* //share_top */}
      
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
      </div> {/* //share_body */}

      <div className="share_body2">
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
      </div> {/* //share_body2 */}
    </div> {/* //share_challenge */}
    </div>
    </div>
    </>

  );
};

export default MypageChallenge;