import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EditInformation.css";
import DeleteModal from "./DeleteModal";
import axios from "axios";

function EditInformation(props) {
  const navigate = useNavigate();

  const [member, setMember] = useState({
    member_name: "", //이름
    member_id: "", //아이디
    member_password: "", //현재 비밀번호
    member_nickname: "", //닉네임
    member_birth: "", //생년월일
    member_email1: "", //이메일
    member_email2: "", //이메일 뒷 주소
    member_theme: "", //관심 챌린지
    image: process.env.PUBLIC_URL + "/image/myPage/profile_icon.png", //프로필 이미지
  });

  const member_id = window.sessionStorage.getItem("member_id");

  //프로필 이미지 변경
  const [profileImage, setProfileImage] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMember((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (event) => {
    setProfileImage(event.target.files[0]);
  };

  //회원탈퇴 모달
  const [del, setDel] = useState(false);

  axios
    .get("/get_member", {
      params: {
        member_id: member_id,
      },
    })
    .then((res) => setMember(res.data));

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
    formData.append("member_nickname", member.member_nickname);
    formData.append("member_birth", member.member_birth);
    formData.append("member_theme", member.member_theme);

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
              <ul className="box3ul">
                <li className="editL editL2">현재 비밀번호</li>
                <li className="editR">
                  <input
                    type="password"
                    placeholder="현재 비밀번호*"
                    required
                    onChange={handleChange}
                  />
                </li>
              </ul>
              <ul className="box3ul">
                <li className="editL editL2">비밀번호 변경</li>
                <li className="editR">
                  <input
                    type="password"
                    placeholder="새로운 비밀번호"
                    name="member_password"
                    required
                    onChange={handleChange}
                  />
                </li>
              </ul>
              <ul className="box3ul">
                <li className="editL"></li>
                <li className="editR">
                  <input
                    type="password"
                    placeholder="새로운 비밀번호 확인"
                    required
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
                    required
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
                      accept="img"
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
                    data-placeholder="년도/월/일"
                    value={member.member_birth}
                    onChange={handleChange}
                  />
                </li>
              </ul>
              <ul className="box3ul">
                <li className="editL editL2">이메일</li>
                <li className="editR">
                  <p className="email1">
                    <input
                      onChange={handleChange}
                      type="text"
                      name="member_email1"
                      placeholder={member.member_email}
                      value={member.member_email1}
                      required
                    />
                  </p>
                  @
                  <p className="email2">
                    <select
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
              <div className="box3ul">
                <p className="editL editC">관심 챌린지</p>
                <p className="editR">
                  <div className="favC2">
                    <p>
                      <input
                        type="checkbox"
                        name="member_challenge"
                        onChange={handleChange}
                      />
                      <label for="development">
                        <span>자기계발</span>
                      </label>
                    </p>
                    <p>
                      <input
                        type="checkbox"
                        name="member_challenge"
                        onChange={handleChange}
                      />
                      <label for="learning">
                        <span>학습</span>
                      </label>
                    </p>
                    <p>
                      <input
                        type="checkbox"
                        name="member_challenge"
                        onChange={handleChange}
                      />
                      <label for="workout">
                        <span>운동</span>
                      </label>
                    </p>
                    <p>
                      <input
                        type="checkbox"
                        name="member_challenge"
                        onChange={handleChange}
                      />
                      <label for="health">
                        <span>건강</span>
                      </label>
                    </p>
                    <p>
                      <input
                        type="checkbox"
                        name="member_challenge"
                        onChange={handleChange}
                      />
                      <label for="etc">
                        <span>기타</span>
                      </label>
                    </p>
                  </div>
                </p>
              </div>
              <div className="editBtn">
                <input id="edit" type="submit" value="수정" />
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
