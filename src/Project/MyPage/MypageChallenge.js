import axios from "axios";
import "./MypageChallenge.css";
import { useEffect } from "react";
import { useState } from "react";

function MypageChallenge(props) {
  const member_id = window.sessionStorage.getItem("member_id");
  const [lists, setLists] = useState([]);

  const getLists = () => {
    axios
      .get("/my_challengelist", {
        params: {
          member_id: member_id,
        },
      })
      .then((res) => setLists(res.data))
      .catch((e) => {
        console.error(e);
      });
  };
  useEffect(() => {
    getLists();
  }, []);

  const compared = (a, b) => {
    return a.challenge_start - b.challenge_start;
  };

  const list = lists.sort(compared).map((li) => (
    <li id="my_challenge" key={li.challenge_num} to={`/${li.challenge_num}`}>
      <div className="ch-image">
        <img
          className="ch-img"
          alt={`챌린지이미지`}
          src={process.env.PUBLIC_URL + li.challenge_thumbnail}
        ></img>
      </div>
      <span className="ch-text">
        <p className="ch-title">{li.challenge_title}</p>
        <p className="ch-subtext">{li.challenge_intro}</p>
        <p className="ch-date">
          {li.challenge_start} ~ {li.challenge_end}
        </p>
      </span>
    </li>
  ));

  return (
    <>
      <div className="myPage">
        <div className="mainPage">
          {/* 참여중인 공유 챌린지 */}
          <div className="share_challenge">
            <div className="share_top">
              <p className="share_title">참여중인 공유 챌린지</p>
              <p className="share_link">
                <a href="/challenge">새로운 챌린지 보러가기</a>
              </p>
            </div>
            {/* //share_top */}
            <div className="share_body">
              <ul>{list}</ul>
            </div>
            {/* //share_body */}
          </div>
          {/* //share_challenge */}
        </div>
      </div>
    </>
  );
}

export default MypageChallenge;
