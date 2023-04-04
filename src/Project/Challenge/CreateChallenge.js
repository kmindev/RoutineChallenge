import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./CreateChallenge.css";

const CreateChallenge = () => {
  const input_mainImage = useRef(""); //ref 설정: createRef함수
  const input_title = useRef("");
  const input_theme = useRef("");
  const input_start = useRef("");
  const input_end = useRef("");
  const input_cycle = useRef("");
  const input_intro = useRef("");
  const input_content = useRef("");
  const input_photo = useRef("");
  const input_btn = useRef("");

  const [imageSrc, setImageSrc] = useState("");
  const member_id = window.sessionStorage.getItem("member_id");

  const navigate = useNavigate();

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  const onChange = (e) => {
    console.log(e.target.name, ":", e.target.value);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      if (e.target.name === "title") {
        input_theme.current.focus();
      } else if (e.target.name === "theme") {
        input_start.current.focus();
      } else if (e.target.name === "start") {
        input_end.current.focus();
      } else if (e.target.name === "end") {
        input_cycle.current.focus();
      } else if (e.target.name === "cycle") {
        input_intro.current.focus();
      } else if (e.target.name === "intro") {
        input_content.current.focus();
      } else if (e.target.name === "content") {
        input_photo.current.focus();
      } else if (e.target.name === "photo") {
        input_btn.current.focus();
      }
    }
  };

  const handleCreateChallenge = () => {
    if (
      input_title.current.value === "" ||
      input_title.current.value === undefined
    ) {
      alert("제목을 입력하세요");
      input_title.current.focus();
      return false;
    }
    if (
      input_start.current.value === "" ||
      input_start.current.value === undefined
    ) {
      alert("시작 날짜를 입력하세요");
      input_start.current.focus();
      return false;
    }
    if (
      input_end.current.value === "" ||
      input_end.current.value === undefined
    ) {
      alert("종료 날짜를 입력하세요");
      input_end.current.focus();
      return false;
    }
    if (
      input_intro.current.value === "" ||
      input_intro.current.value === undefined
    ) {
      alert("한줄소개를 입력하세요");
      input_intro.current.focus();
      return false;
    }
    if (
      input_content.current.value === "" ||
      input_content.current.value === undefined
    ) {
      alert("상세내용을 입력하세요");
      input_content.current.focus();
      return false;
    }

    axios
      .post("/create_challenge", {
        challenge_creater: member_id,
        challenge_title: input_title.current.value,
        challenge_theme: themeKind,
        challenge_start: input_start.current.value,
        challenge_end: input_end.current.value,
        challenge_cycle: cycleKind,
        challenge_intro: input_intro.current.value,
        challenge_content: input_content.current.value,
        challenge_thumbnail: input_mainImage.current.value,
        challenge_image: input_photo.current.value,
        challenge_readcount: 0,
      })
      .then((res) => {
        console.log("handleCreateChallenge =>", res);
        console.log("handleCreateChallenge((res.data) =>", res.data);

        if (res.data === 1) {
          alert("챌린지 생성 성공");
          navigate("/challenge");
        } else {
          alert("챌린지 생성 실패");
          navigate("/createChallenge");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const themesKinds = [
    { id: "development", name: "자기계발" },
    { id: "study", name: "학습" },
    { id: "exercise", name: "운동" },
    { id: "health", name: "건강" },
    { id: "etc", name: "기타" },
  ];

  const [themeKind, setThemeKind] = useState([]);

  const cyclesKinds = [
    { id: 1, name: "주1일" },
    { id: 2, name: "주2일" },
    { id: 3, name: "주3일" },
    { id: 4, name: "주4일" },
    { id: 5, name: "주5일" },
    { id: 6, name: "매일" },
    { id: 7, name: "평일" },
    { id: 8, name: "주말" },
  ];

  const [cycleKind, setCycleKind] = useState([]);

  const handlethemeRadioBtn = (e) => {
    console.log(e.target.value);
    setThemeKind(e.target.value);
  };

  const handlecycleRadioBtn = (e) => {
    console.log(e.target.value);
    setCycleKind(e.target.value);
  };

  return (
    <div>
      <div className="createChallenge">
        <div className="inner2">
          <h2>챌린지 생성</h2>
          <div className="box2">
            <section className="wrap">
              <div className="main">
                <h3>대표 이미지</h3>
                <div className="main-image">
                  {imageSrc && <img src={imageSrc} alt="main-image" />}
                </div>
                <div className="main-file">
                  <input
                    ref={input_mainImage}
                    className="input-main"
                    type="file"
                    onChange={(e) => {
                      encodeFileToBase64(e.target.files[0]);
                    }}
                  />
                </div>
              </div>

              <div className="create">
                <ul>
                  <li className="first">제목</li>
                  <li className="second">
                    <input
                      ref={input_title}
                      type="text"
                      name="title"
                      placeholder="제목을 입력하세요."
                      required
                      onChange={onChange}
                      onKeyPress={onKeyPress}
                    />
                  </li>
                </ul>

                <div className="check">
                  <p className="first">주제</p>
                  <p className="second">
                    <div className="sub">
                      {themesKinds.map((theme) => (
                        <p>
                          <input
                            ref={input_theme}
                            type="radio"
                            value={theme.id}
                            key={theme.id}
                            name="theme"
                            id={theme.id}
                            checked={themeKind === `${theme.id}`}
                            onChange={handlethemeRadioBtn}
                            onClick={() => {
                              setThemeKind(theme.id);
                            }}
                            onKeyPress={onKeyPress}
                          />
                          <label key={theme.name}>
                            <span>{theme.name}</span>
                          </label>
                        </p>
                      ))}
                    </div>
                  </p>
                </div>

                <ul>
                  <li className="first">기간</li>
                  <li className="second">
                    <input
                      ref={input_start}
                      type="date"
                      name="period1"
                      data-placeholder="시작 날짜"
                      required
                      aria-required="true"
                      onChange={onChange}
                      onKeyPress={onKeyPress}
                    />
                    ~
                    <input
                      ref={input_end}
                      type="date"
                      name="period2"
                      data-placeholder="종료 날짜"
                      required
                      aria-required="true"
                      onChange={onChange}
                      onKeyPress={onKeyPress}
                    />
                  </li>
                </ul>

                <div className="check">
                  <p className="first">주기</p>
                  <p className="second">
                    <div className="cycle">
                      {cyclesKinds.map((cycle) => (
                        <p>
                          <input
                            ref={input_cycle}
                            type="radio"
                            value={cycle.id}
                            name="cycle"
                            id="cycle"
                            checked={cycleKind === `${cycle.id}`}
                            onChange={handlecycleRadioBtn}
                            onKeyPress={onKeyPress}
                            onClick={() => {
                              setCycleKind(cycle.id);
                            }}
                          />
                          <label key={cycle.name}>
                            <span>{cycle.name}</span>
                          </label>
                        </p>
                      ))}
                    </div>
                  </p>
                </div>

                <ul>
                  <li className="first">한줄소개</li>
                  <li className="second">
                    <input
                      ref={input_intro}
                      type="text"
                      name="intro"
                      placeholder="챌린지를 한줄로 소개해주세요."
                      required
                      onChange={onChange}
                      onKeyPress={onKeyPress}
                    />
                  </li>
                </ul>

                <ul>
                  <li className="first">상세내용</li>
                  <li className="second">
                    <textarea
                      ref={input_content}
                      type="textarea"
                      name="detail"
                      placeholder="챌린지에 대해 설명해주세요.&#13;
                      예 1) 하루에 한번씩 운동장을 운동장을 10 바퀴 돈다.&#13;&#10;
                      예 2) 운동 전 후 본인 얼굴과 함께 인증샷을 남긴다.&#13;&#10;
                      예 3) 참여하지 못하는 경우 댓글로 이유를 남긴다."
                      required
                      onChange={onChange}
                      onKeyPress={onKeyPress}
                    />
                  </li>
                </ul>

                <ul>
                  <li className="first"></li>
                  <li className="second">
                    <p className="photo1">
                      <input
                        className="input-photo"
                        ref={input_photo}
                        type="file"
                        name="photo"
                        placeholder="사진 첨부"
                        onChange={onChange}
                        onKeyPress={onKeyPress}
                      />
                    </p>
                  </li>
                </ul>
              </div>
            </section>

            <section className="btn">
              <button ref={input_btn} onClick={handleCreateChallenge}>
                생성하기
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateChallenge;
