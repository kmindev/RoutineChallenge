import React, { useState } from "react";
import "./ChallengeList.css";

function ChallengeList(props) {
  const [lists, setLists] = useState([
    {
      id: 1,
      category: "study",
      mainimage: "/image/Challenge/study.jpg",
      title: "하루 6시간 공부 챌린지",
      subtext: "매일 6시간씩만 같이 공부해요!",
      content:
        "매일 6시간 이상 공부하고 인증하여 원하시는 목표를 달성해보는 챌린지입니다. 공부 방식, 분야 등에 관계없이 누구나 참여 가능합니다.",
      contentimage: "",
      date: "2023-03-08",
      enddate: "2023-04-07",
      count: 2,
      comments: null,
    },
    {
      id: 2,
      category: "exercise",
      mainimage: "/image/Challenge/yoga.jpg",
      title: "매일 운동하기 챌린지",
      subtext: "같이 운동해요!",
      content:
        "매일 같이 운동 하고 인증하는 챌린지입니다. 건강을 챙기고 싶은 누구나 참여 가능합니다.",
      contentimage: "",
      date: "2023-04-02",
      enddate: "2023-05-31",
      count: 10,
      comments: null,
    },
    {
      id: 3,
      category: "etc",
      mainimage: "/image/Challenge/vitamins.jpg",
      title: "미라클모닝 챌린지",
      subtext: "6시에 일어나서 상쾌한 하루를 맞이해요!",
      content:
        "매일 6시간에 기상하는 챌린지입니다. 아침시간을 잘 활용하고 싶은 누구나 참여 가능합니다.",
      contentimage: "",
      date: "2023-03-31",
      enddate: "2023-05-31",
      count: 25,
      comments: null,
    },
    {
      id: 4,
      category: "study",
      mainimage: "/image/Challenge/study_challenge_image.jpg",
      title: "하루 영어 3문장 챌린지",
      subtext: "매일 3문장씩만 영어 공부하실 분들 모여주세요.",
      content:
        "영어 3문장씩 같이 공부하고 인증하여 원하시는 목표를 달성해보는 챌린지입니다. 영어를 잘 하고 싶은 맘이 있는 누구나 참여 가능합니다.",
      contentimage: "",
      date: "2023-03-13",
      enddate: "2023-06-10",
      count: 1,
      comments: null,
    },
    {
      id: 5,
      category: "development",
      mainimage: "/image/Challenge/reading.jpg",
      title: "하루 한 장 챌린지",
      subtext: "책 단 한 장씩 읽으면서 독서 습관을 길러보아요!",
      content:
        "하루 한 장 이상 책 읽고 인증하는 챌린지입니다. 독서습관을 기르고 싶은 누구나 참여 가능합니다.",
      contentimage: "",
      date: "2023-03-10",
      enddate: "2023-04-10",
      count: 7,
      comments: null,
    },
    {
      id: 6,
      category: "health",
      mainimage: "/image/Challenge/healthy.jpg",
      title: " 물 1L 마시기",
      subtext: "매일 1L 꼭 챙겨 마십시다!",
      content:
        "하루에 물 1L씩 이상을 마시고 인증하는 챌린지입니다. 물을 많이 마셔 건강해지고 싶은 누구나 참여 가능합니다.",
      contentimage: "",
      date: "2023-05-06",
      enddate: "2023-06-06",
      count: 1,
      comments: null,
    },
  ]);

  const deadline = (l) => {
    const d = new Date(l.date);
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
      ? (a.count - b.count) * -1
      : (a.id = b.id) * -1;
  };

  const list = lists
    .filter((lists) =>
      props.category === "all" ? lists : lists.category === props.category
    )
    .sort(compareID)
    .map((li) => (
      <li id="challenge" key={li.id} to={`/${li.id}`}><a href="/detailChallenge">
        <div className="c-image">
          <img
            className="c-img"
            alt={`챌린지이미지`}
            src={process.env.PUBLIC_URL + li.mainimage}
          ></img>
        </div>
        <div className="c-text">
          <p className="c-title">{li.title}</p>
          <p className="c-subtext">{li.subtext}</p>
          <p className="c-date">{deadline(li)}</p>
        </div>
      </a></li>
    ));

  return <ul className="listWrap">{list}</ul>;
}

export default ChallengeList;