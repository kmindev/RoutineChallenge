import React from "react";
import { useState } from "react";
import "./EditInformation.css";
 
function DeleteModal(props) {
 
  function closeModal() {
    props.closeModal();
  }

  //회원탈퇴 동의 체크
  const [agreeCheck, setAgreeCheck] = useState(false);

    const agreeCheckEvent = () =>{
    if(agreeCheck === false) {
      setAgreeCheck(true)
    } else {
      setAgreeCheck(false)
    }
  };

  const onClickDel = () => {
    alert(
      '탈퇴가 완료되었습니다'
    );
    window.location.replace("/");
  }

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modalBody" onClick={(e) => e.stopPropagation()}>
        <button id="modalCloseBtn" onClick={closeModal}>
          ✖
        </button>

        <div className="modal-inner">
          <p className="modal-phrase">
            <span>! 탈퇴 관련 공지 !</span><br/>
            탈퇴 후에는 데이터를 복구할 수 없습니다.<br/>
            게시판형 서비스에 남아 있는 게시글은 탈퇴 후에 삭제할 수 없습니다.
          </p>
          <p className="modal-check">
            <input 
              type="checkbox"
              id="agree" 
              checked={agreeCheck}
              onChange={agreeCheckEvent}          
            />
            <label for="agree">안내 사항을 모두 확인하였으며, 이에 동의합니다.</label>
          </p>
          <button className="final-delBtn" onClick={onClickDel}>회원탈퇴</button>
          </div>
      </div>
    </div>
  );
}

export default DeleteModal;