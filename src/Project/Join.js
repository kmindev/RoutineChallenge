import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Join.css";
import axios from "axios";

function Join() {
  const navigate = useNavigate();

  const [member, setMember] = useState({
    member_name: "",
    member_id: "",
    member_password: "",
    member_email1: "",
    member_email2: "",
    member_nickname: "",
    member_birth: "",
    member_theme: "",
  });

  const [profileImage, setProfileImage] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMember((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (event) => {
    setProfileImage(event.target.files[0]);
  };

  const idCfm = () => {
    alert(member.member_id + " 사용할 수 있는 아이디입니다.");
  };

  const onClick = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("member_profile", profileImage);
    formData.append("member_name", member.member_name);
    formData.append("member_id", member.member_id);
    formData.append("member_password", member.member_password);
    formData.append(
      "member_email",
      member.member_email1 + "@" + member.member_email2
    );
    formData.append(
      "member_nickname",
      member.member_nickname === ""
        ? member.member_name
        : member.member_nickname
    );
    formData.append("member_birth", member.member_birth);
    formData.append(
      "member_theme",
      member.member_theme === null ? null : member.member_theme
    );

    // API 요청을 보냅니다.
    axios
      .post("/join_member", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        // 회원가입이 성공적으로 이루어졌을 경우 처리할 코드 작성
        console.log(response);
        if (response.data === 1) {
          alert(member.member_name + "님 환영합니다!");
          navigate("/login");
        } else {
          alert("회원 정보를 확인해주세요.");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("회원 정보를 확인해주세요.");
      });
  };

  return (
    <div className="join">
      <div className="inner">
        <h2>회원가입</h2>
        <div className="box">
          <div className="top">
            <h3>기본정보</h3>
            <ul>
              <li className="left">이름</li>
              <li className="right">
                <input
                  type="text"
                  name="member_name"
                  placeholder="이름*"
                  required
                  value={member.member_name}
                  onChange={handleChange}
                />
              </li>
            </ul>
            <ul className="id">
              <li className="left">아이디</li>
              <li className="right">
                <p className="id01">
                  <input
                    type="text"
                    name="member_id"
                    placeholder="아이디*"
                    required
                    value={member.member_id}
                    onChange={handleChange}
                  />
                </p>
                <p className="id02">
                  <button name="idCfm" onClick={idCfm}>
                    ID 확인
                  </button>
                </p>
              </li>
            </ul>
            <ul>
              <li className="left">비밀번호</li>
              <li className="right">
                <input
                  type="password"
                  name="member_password"
                  placeholder="비밀번호*"
                  required
                  value={member.member_password}
                  onChange={handleChange}
                />
              </li>
            </ul>
            <ul>
              <li className="left"></li>
              <li className="right">
                <input
                  type="password"
                  name="pwCfm"
                  placeholder="비밀번호확인*"
                  required
                  onChange={handleChange}
                />
              </li>
            </ul>
            <ul className="email">
              <li className="left">이메일</li>
              <li className="right">
                <p className="email01">
                  <input
                    type="text"
                    name="member_email1"
                    placeholder="이메일*"
                    required
                    value={member.member_email1}
                    onChange={handleChange}
                  />
                </p>
                @
                <p className="email02">
                  <select
                    type="text"
                    name="member_email2"
                    value={member.member_email2}
                    onChange={handleChange}
                  >
                    <option value="">도메인 선택</option>
                    <option value="naver.com">naver.com</option>
                    <option value="gmail.com">gmail.com</option>
                    <option value="hanmail.net">hanmail.net</option>
                    <option value="hotmail.com">hotmail.com</option>
                    <option value="korea.com">korea.com</option>
                    <option value="nate.com">nate.com</option>
                    <option value="yahoo.com">yahoo.com</option>
                  </select>
                </p>
              </li>
            </ul>
          </div>

          <div className="bottom">
            <h3>부가정보</h3>
            <ul>
              <li className="left">닉네임</li>
              <li className="right">
                <input
                  type="text"
                  name="member_nickname"
                  placeholder="닉네임"
                  value={member.member_nickname}
                  onChange={handleChange}
                />
              </li>
            </ul>
            <ul className="profile">
              <li className="left">프로필 사진</li>
              <li className="right">
                <p className="profile">
                  <input
                    type="file"
                    name="member_profile"
                    placeholder="선택된 파일 없음"
                    onChange={handleFileChange}
                  />
                </p>
              </li>
            </ul>
            <ul>
              <li className="left">생년월일</li>
              <li className="right">
                <input
                  type="date"
                  name="member_birth"
                  data-placeholder="년도/월/일"
                  required
                  aria-required="true"
                  value={member.member_birth}
                  onChange={handleChange}
                />
              </li>
            </ul>
            <div>
              <p className="left">관심 챌린지</p>
              <p className="right">
                <div className="favC">
                  <p>
                    <input
                      type="radio"
                      name="member_challenge"
                      value="development"
                      onChange={handleChange}
                    />
                    <span>자기계발</span>
                  </p>
                  <p>
                    <input
                      type="radio"
                      name="member_challenge"
                      value="study"
                      onChange={handleChange}
                    />
                    <span>학습</span>
                  </p>
                  <p>
                    <input
                      type="radio"
                      name="member_challenge"
                      value="exercise"
                      onChange={handleChange}
                    />
                    <span>운동</span>
                  </p>
                  <p>
                    <input
                      type="radio"
                      name="member_challenge"
                      value="health"
                      onChange={handleChange}
                    />
                    <span>건강</span>
                  </p>
                  <p>
                    <input
                      type="radio"
                      name="member_challenge"
                      value="etc"
                      onChange={handleChange}
                    />
                    <span>기타</span>
                  </p>
                </div>
              </p>
            </div>

            <button onClick={onClick}>JOIN</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Join;
