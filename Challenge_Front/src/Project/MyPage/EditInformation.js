import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EditInformation.css";
import DeleteModal from "./DeleteModal";
import axios from "axios";

function EditInformation(props) {
  const navigate = useNavigate();

  const member_id = window.sessionStorage.getItem("member_id");

  const [member, setMember] = useState({});
  useEffect(() => {
    axios
      .get("/get_member", {
        params: {
          member_id: member_id,
        },
      })
      .then((res) => setMember(res.data));
  }, []);

  const [update_member, setUdate_member] = useState({
    member_name: "", // 이름
    member_id: "", // 아이디
    member_password: "", // 비밀번호
    member_nickname: "", // 닉네임
    member_birth: "", // 생년월일
    member_email1: "", // 이메일1
    member_email2: "", // 이메일2
  });

  //프로필 이미지 변경
  const [profileImage, setProfileImage] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUdate_member((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (event) => {
    setProfileImage(event.target.files[0]);
  };

  //회원탈퇴 모달
  const [del, setDel] = useState(false);

  //수정버튼 데이터 전달
  const handleUpdate = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("update_profile", profileImage);
    formData.append("member_name", member.member_name);
    formData.append("member_id", member.member_id);
    formData.append(
      "member_password",
      update_member.member_password === ""
        ? member.member_password
        : update_member.member_password
    );
    formData.append(
      "member_email",
      update_member.member_email1 + "@" + update_member.member_email2 === ""
        ? member.member_email
        : update_member.member_email1 + "@" + update_member.member_email2
    );
    formData.append(
      "member_nickname",
      update_member.member_nickname === ""
        ? member.member_nickname
        : update_member.member_nickname
    );
    formData.append(
      "member_birth",
      update_member.member_birth === ""
        ? member.member_birth
        : update_member.member_birth
    );
    formData.append(
      "member_theme",
      themeKind === "" ? member.member_theme : themeKind
    );
    formData.append("member_profile", member.member_profile);

    // API 요청을 보냅니다.
    axios
      .post("/update_member", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        // 개인정보수정이 성공적으로 이루어졌을 경우 처리할 코드 작성
        console.log(response);
        if (response.data === 1) {
          alert(member.member_name + "님 개인정보 수정이 완료됐습니다!");
          navigate("/mypage");
        } else {
          alert("회원 정보를 확인해주세요.");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("회원 정보를 확인해주세요.");
      });
  };

  //관심챌린지 map
  const themesKinds = [
    { id: "development", name: "자기계발" },
    { id: "study", name: "학습" },
    { id: "exercise", name: "운동" },
    { id: "health", name: "건강" },
    { id: "etc", name: "기타" },
  ];

  const [themeKind, setThemeKind] = useState([]);

  const handlethemeRadioBtn = (e) => {
    console.log(e.target.value);
    setThemeKind(e.target.value);
  };

  return (
    <>
      <div className="editInfo">
        <div className="mainPage">
          <div className="box3">
            <h1>개인정보 수정</h1>
            <form>
              <ul className="box3ul">
                <li className="editL">이름</li>
                <li className="editR">{member.member_name}</li>
              </ul>
              <ul className="box3ul">
                <li className="editL">아이디</li>
                <li className="editR">{member.member_id}</li>
              </ul>
              {/* <ul className="box3ul">
                <li className="editL editL2">현재 비밀번호</li>
                <li className="editR">{member.member_password}</li>
              </ul> */}
              <ul className="box3ul">
                <li className="editL editL2">비밀번호 변경</li>
                <li className="editR">
                  <input
                    type="password"
                    name="member_password"
                    placeholder="새로운 비밀번호"
                    value={update_member.member_password}
                    onChange={handleChange}
                  />
                </li>
              </ul>
              <ul className="box3ul">
                <li className="editL"></li>
                <li className="editR">
                  <input
                    type="password"
                    name="pwCfm"
                    placeholder="새로운 비밀번호 확인"
                    onChange={handleChange}
                  />
                </li>
              </ul>
              <ul className="box3ul">
                <li className="editL editL2">닉네임</li>
                <li className="editR">
                  <input
                    onChange={handleChange}
                    type="text"
                    name="member_nickname"
                    placeholder={member.member_nickname}
                    value={update_member.member_nickname}
                  />
                </li>
              </ul>
              <ul className="box3ul">
                <li className="editL">프로필 사진</li>
                <li className="editR">
                  <div className="pro-img">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/image/upload/profile/" +
                        member.member_profile
                      }
                      alt="프로필 사진"
                    />
                  </div>
                  <div id="upload_container">
                    <div className="pro-btn">
                      <label className="profile_btn" for="profile_input">
                        업로드
                      </label>
                    </div>
                    <input
                      type="file"
                      name="member_profile"
                      placeholder="선택된 파일 없음"
                      onChange={handleFileChange}
                    ></input>
                  </div>
                </li>
              </ul>
              <ul className="box3ul">
                <li className="editL">생년월일</li>
                <li className="editR">
                  <input
                    type="date"
                    name="member_birth"
                    required
                    aria-required="true"
                    data-placeholder={member.member_birth}
                    value={update_member.member_birth}
                    onChange={handleChange}
                  />
                </li>
              </ul>
              <ul className="box3ul">
                <li className="editL editL2">이메일</li>
                <li className="editR">
                  <div className="email0">{member.member_email}</div>
                  <p className="email1">
                    <input
                      onChange={handleChange}
                      type="text"
                      name="member_email1"
                      placeholder="새로운 E-mail"
                      value={update_member.member_email1}
                    />
                  </p>
                  @
                  <p className="email2">
                    <select
                      type="text"
                      name="member_email2"
                      value={update_member.member_email2}
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
              <div className="box3ul">
                <p className="editL editC">관심 챌린지</p>
                <p className="editR">
                  <div className="favC2">
                    {themesKinds.map((theme) => (
                      <p>
                        <input
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
                        />
                        <label key={theme.name}>
                          <span>{theme.name}</span>
                        </label>
                      </p>
                    ))}
                  </div>
                </p>
              </div>
              <div className="editBtn">
                <input
                  id="edit"
                  type="submit"
                  value="수정"
                  onClick={handleUpdate}
                />
              </div>
            </form>

            <div className="del-wrap">
              <button className="del-btn" onClick={() => setDel(!del)}>
                회원탈퇴
              </button>
            </div>

            {del && <DeleteModal closeModal={() => setDel(!del)}></DeleteModal>}
          </div>
          {/*box3*/}
        </div>
        {/*mainPage*/}
      </div>
      {/*editInfo*/}
    </>
  );
}

export default EditInformation;
