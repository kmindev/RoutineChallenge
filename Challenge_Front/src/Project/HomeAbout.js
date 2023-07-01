import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomeAbout.css";

const HomeAbout = () => {

  window.sessionStorage.getItem("member_id");

  const navigate = useNavigate();

  const linkToMypage = () => {
    navigate("/myPage");
  };

  const linkToChallenge = () => {
    navigate("/challenge");
  };

  return (
    <div className="outer">
      <div className="visual">
        <div className="v-text">
          <p>루틴챌린지</p>
          <p>
            당신의 건강한 하루를 위한
            <br />
            페이스 메이커
          </p>
        </div>
      </div>

      <section id="about" >
        <div className="con01">
          <ul>
            <li className="c01-left">
              <p>
                지금, 루틴챌린지에서
                <br />
                당신의 챌린지를 공유하세요!
              </p>
              <p>
                어떤 챌린지든 자유롭게 생성할 수 있습니다.
                <br />
                친구/가족/회원들과 챌리지를 공유하며 함께 할 수 있습니다.
              </p>
              <p>
                <a href="/challenge">
                  <input type="checkbox" id="cb1" />
                  <label for="cb1" onClick={linkToChallenge}>
                    챌린지 보러 가기
                  </label>
                </a>
              </p>
            </li>
            <li className="c01-right">
              <img
                src={process.env.PUBLIC_URL + "/image/HOME&ABOUT/people.png"}
                alt="people"
              />
            </li>
          </ul>
        </div>

        <div className="con02">
          <h3>
            당신이 원하는
            <br />
            모든 챌린지에 참여할 수 있습니다.
          </h3>
          <div class="marquee">
            <div>
              <span>
                <img
                  src={
                    process.env.PUBLIC_URL + "/image/HOME&ABOUT/challenge.png"
                  }
                  alt="challenge"
                />
              </span>
              <span>
                <img
                  src={
                    process.env.PUBLIC_URL + "/image/HOME&ABOUT/challenge.png"
                  }
                  alt="challenge"
                />
              </span>
            </div>
          </div>
        </div>

        <div className="con03">
          <ul>
            <li className="c03-left">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/image/HOME&ABOUT/routine_clear2.png"
                }
                alt="MyRoutine"
              />
            </li>
            <li className="c03-right">
              <p>
                당신의 미래는
                <br />
                반복된 루틴에 있습니다.
              </p>
              <p>
                당신의 챌린지와 함께 하세요.
                <br />
                참여중인 챌린지를 확인할 수 있습니다.
              </p>
              <p>
                <a href="/myPage">
                  <input type="checkbox" id="cb2" />
                  <label for="cb2" onClick={linkToMypage}>
                    마이페이지 바로가기
                  </label>
                </a>
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HomeAbout;
