import React, { useEffect, useState } from "react";
import "./ChallengeList.css";
import axios from "axios";

function ChallengeList(props) {
  const [lists, setLists] = useState([]);
  const [lists1, setLists1] = useState([]);
  const [lists2, setLists2] = useState([]);
  const [lists3, setLists3] = useState([]);
  const [clist, setClist] = useState([]);

  const getLists = () => {
    axios
      .get("/challengelist", {
        params: {
          state: 0,
        },
      })
      .then((res) => {
        console.log(res.data);
        setLists(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
    axios
      .get("/challengelist", {
        params: {
          state: 1,
        },
      })
      .then((res) => setLists1(res.data))
      .catch((e) => {
        console.error(e);
      });
    axios
      .get("/challengelist", {
        params: {
          state: 2,
        },
      })
      .then((res) => setLists2(res.data))
      .catch((e) => {
        console.error(e);
      });
    axios
      .get("/challengelist", {
        params: {
          state: 3,
        },
      })
      .then((res) => setLists3(res.data))
      .catch((e) => {
        console.error(e);
      });
  };
  useEffect(() => {
    getLists();
  }, []);

  useEffect(() => {
    setClist(
      props.progress === 0
        ? lists
        : props.progress === 1
        ? lists1
        : props.progress === 2
        ? lists2
        : lists3
    );
  });

  const deadline = (l) => {
    const d = new Date(l.challenge_start);
    const today = new Date();
    const day = Math.ceil((d - today) / (1000 * 60 * 60 * 24));
    return day < 1
      ? "모집종료"
      : day === 1
      ? "오늘 마감"
      : `모집마감 ${day}일 전`;
  };

  const compareID = (a, b) => {
    return props.sort === "popular"
      ? (a.challenge_readcount - b.challenge_readcount) * -1
      : (a.challenge_num = b.challenge_num) * -1;
  };

  const list = clist
    .filter((lists) =>
      props.category === "all"
        ? lists
        : lists.challenge_theme === props.category
    )
    .sort(compareID)
    .map((li) => (
      <li id="challenge" key={li.challenge_num}>
        <a href={`/detailChallenge?challenge_num=${li.challenge_num}`}>
          <div className="c-image">
            <img
              className="c-img"
              alt={`챌린지이미지`}
              src={`http://localhost:8080/images/${li.challenge_thumbnail}`}
            ></img>
          </div>
          <div className="c-text">
            <p className="c-title">{li.challenge_title}</p>
            <p className="c-subtext">{li.challenge_intro}</p>
            <p className="c-date">{deadline(li)}</p>
          </div>
        </a>
      </li>
    ));

  return <ul className="listWrap">{list}</ul>;
}

export default ChallengeList;
