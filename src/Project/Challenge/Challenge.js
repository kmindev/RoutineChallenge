import { useState } from "react";
import ChallengeList from "./ChallengeList";
import "./Challenge.css";

function Challenge() {
  // filter, sort 시작
  const [progress, setProgress] = useState(0); // 전체:0 진행예정:1, 진행중:2, 진행종료:3
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("popular");

  const sortmain = () => {
    return sort === "popular" ? "인기순" : "최신순";
  };
  const sortlist = () => {
    return sort === "popular" ? "최신순" : "인기순";
  };

  const setSortlist = () => {
    return sort === "popular" ? "new" : "popular";
  };
  // filter, sort 끝

  // 진행 상태 선택 시작
  const [prog, setProg] = useState([
    { id: 1, name: "진행예정", img: "/image/Challenge/running_icon1.png" },
    { id: 2, name: "진행중", img: "/image/Challenge/running_icon2.png" },
    { id: 3, name: "진행종료", img: "/image/Challenge/running_icon3.png" },
  ]);

  const Rprog = prog.map((prog) => (
    <button
      key={prog.id}
      href="#"
      className="progress"
      onClick={() => {
        setProgress(prog.id);
      }}
    >
      <img
        className="icon"
        alt={prog.name}
        src={process.env.PUBLIC_URL + prog.img}
      />
      <p className="progressText">{prog.name}</p>
    </button>
  ));
  // 진행 상태 선택 끝

  // 카테고리 시작
  const [cate, setCate] = useState([
    { id: "all", name: "전체" },
    { id: "development", name: "자기계발" },
    { id: "study", name: "학습" },
    { id: "exercise", name: "운동" },
    { id: "health", name: "건강" },
    { id: "etc", name: "기타" },
  ]);

  const Rcate = cate.map((cate) => (
    <li
      key={cate.id}
      href="#"
      className={category === cate.id ? "categoryOn" : "category"}
      onClick={() => {
        setCategory(cate.id);
      }}
    >
      {cate.name}
    </li>
  ));
  // 카테고리 끝
  
  const MoveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // RETURN
  return (
    <div className="challengepage">
      {/* 진행상태 선택 */}
      <div className="progressWrap">
        <div className="progressWrap2">
          <hr className="progressline" />
          {Rprog}
        </div>
      </div>

      {/* 카테고리 선택 */}
      <div className="csWrap">
        <ul className="categories">{Rcate}</ul>

        {/* 졍렬 */}
        <ul className="sort">
          <li className="sortMain">
            <span>∨</span>
            <span href="#">{sortmain()}</span>
          </li>
          <li>
            <ul className="sortlist">
              <li
                className="sortlist-sub"
                href="#"
                onClick={() => {
                  setSort(() => {
                    return sort === "popular" ? "new" : "popular";
                  });
                }}
              >
                {sortlist()}
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* 버튼 */}
      <section className="btnWrap">
        <div className="createbtnWrap">
          <button className="createButton">
            <a href="/createChallenge" className="btnLink">
              +
            </a>
          </button>
          <span className="createText">챌린지 생성</span>
        </div>
        <button className="topMove" onClick={MoveToTop}>
          ↑
        </button>
      </section>
      <ChallengeList progress={progress} category={category} sort={sort} />
    </div>
  );
}

export default Challenge;