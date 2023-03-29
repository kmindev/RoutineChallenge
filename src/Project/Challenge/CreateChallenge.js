import React, { useRef, useState } from 'react';
import './CreateChallenge.css';
import GalleryList from './Gallery/GalleryList';
import data from './Gallery/GalleryImages';

const CreateChallenge = () => {

  const result = useRef('');
  const input_mainImage = useRef('');  //ref 설정: createRef함수
  const input_title = useRef('');  
  const input_subject1 = useRef('');
  const input_subject2 = useRef('');
  const input_subject3 = useRef('');
  const input_subject4 = useRef('');
  const input_subject5 = useRef('');
  const input_period1 = useRef('');
  const input_period2 = useRef('');
  const input_cycle1 = useRef('');
  const input_cycle2 = useRef('');
  const input_cycle3 = useRef('');
  const input_cycle4 = useRef('');
  const input_cycle5 = useRef('');
  const input_cycle6 = useRef('');
  const input_cycle7 = useRef('');
  const input_cycle8 = useRef('');
  const input_intro = useRef('');
  const input_detail = useRef('');
  const input_photo = useRef('');
  const input_btn = useRef('');


  const onChange = (e) => {
    console.log(e.target.name,":",e.target.value);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      if (e.target.name ==="title") {
        input_subject1.current.focus();
      } else if (e.target.name ==="subject1") {
        input_subject2.current.focus();
      } else if (e.target.name ==="subject2") {
        input_subject3.current.focus();
      } else if (e.target.name ==="subject3") {
        input_subject4.current.focus();  
      } else if (e.target.name ==="subject4") {
        input_subject5.current.focus();
      } else if (e.target.name ==="subject5") {
        input_period1.current.focus();  
      } else if (e.target.name ==="period1") {
        input_period2.current.focus(); 
      } else if (e.target.name ==="period2") {
        input_cycle1.current.focus(); 
      } else if (e.target.name ==="cycle1") {
        input_cycle2.current.focus(); 
      } else if (e.target.name ==="cycle2") {
        input_cycle3.current.focus(); 
      } else if (e.target.name ==="cycle3") {
        input_cycle4.current.focus(); 
      } else if (e.target.name ==="cycle4") {
        input_cycle5.current.focus(); 
      } else if (e.target.name ==="cycle5") {
        input_cycle6.current.focus();  
      } else if (e.target.name ==="cycle6") {
        input_cycle7.current.focus(); 
      } else if (e.target.name ==="cycle7") {
        input_cycle8.current.focus(); 
      } else if (e.target.name ==="cycle8") {
        input_intro.current.focus(); 
      } else if (e.target.name ==="intro") {
        input_detail.current.focus(); 
      } else if (e.target.name ==="detail") {
        input_photo.current.focus();  
      } else if (e.target.name ==="photo") {
        input_btn.current.focus();
      }
    }
  }

  const onClick = () => {
    if (input_mainImage.current.value === "" || input_mainImage.current.valueOf === undefined) {
      alert("대표이미지를 선택하세요");
      input_mainImage.current.focus();
      return false;
    }
    if (input_title.current.value === "" || input_title.current.value === undefined) {
      alert("제목을 입력하세요");
      input_title.current.focus();
      return false;
    }
    if (
      input_period1.current.value === "" || input_period1.current.value === undefined) {
      alert("시작 날짜를 입력하세요");
      input_period1.current.focus();
      return false;
    }
    if (
      input_period2.current.value === "" || input_period2.current.value === undefined) {
      alert("종료 날짜를 입력하세요");
      input_period2.current.focus();
      return false;
    }
    if (
      input_intro.current.value === "" || input_intro.current.value === undefined) {
      alert("한줄소개를 입력하세요");
      input_intro.current.focus();
      return false;
    }
    if (
      input_detail.current.value === "" || input_detail.current.value === undefined) {
      alert("상세내용을 입력하세요");
      input_detail.current.focus();
      return false;
    }
  };

  const [datas, setDatas] = useState(data); //
  const [currItem, setCurrItem] = useState(datas[0]); //선택한 사진 상태설정

  const onView = (id) => { //고유번호인 id를 받아서 해당 사진을 찾기
      setCurrItem(datas.find(item => item.id === id)) //해당값만 찾기:find()
  };

  
  return (
    <div>
      <div className="createChallenge">
        <div className='inner2'>
          <h2>챌린지 생성</h2>
          <div className='box2'>
            <section className='wrap'>
            <div className='main'>
              <h3>대표 이미지</h3>
              <div id='result' ref={result}>
                <GalleryList datas = {datas} onView={onView} currItem={currItem}/>
              </div>
            </div>
            
            <div className='create'>
              <ul>
                <li className='first'>제목</li>
                <li className='second'>
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

              <div className='check'>
                <p className='first'>주제</p>
                <p className='second'>
                  <div className='sub'>
                    <p>
                      <input 
                        ref={input_subject1}
                        type="checkbox"
                        name="subject1"
                        id='sub01'                    
                        onChange={onChange}
                        onKeyPress={onKeyPress}
                      />
                      <label for='sub01'><span>자기계발</span></label>
                    </p>
                    <p>
                      <input 
                        ref={input_subject2}
                        type="checkbox"
                        name="subject2"
                        id='sub02'                     
                        onChange={onChange}
                        onKeyPress={onKeyPress}
                      />
                      <label for='sub02'><span>학습</span></label>
                    </p>
                    <p>
                      <input 
                        ref={input_subject3}
                        type="checkbox"
                        name="subject3"
                        id='sub03'                      
                        onChange={onChange}
                        onKeyPress={onKeyPress}
                      />
                      <label for='sub03'><span>운동</span></label>
                    </p>
                    <p>
                      <input 
                        ref={input_subject4}
                        type="checkbox"
                        name="subject4"
                        id='sub04'                  
                        onChange={onChange}
                        onKeyPress={onKeyPress}
                      />
                      <label for='sub04'><span>건강</span></label>
                    </p>
                    <p>
                      <input 
                        ref={input_subject5}
                        type="checkbox"
                        name="subject5"
                        id='sub05'                     
                        onChange={onChange}
                        onKeyPress={onKeyPress}
                      />
                      <label for='sub05'><span>기타</span></label>
                    </p>
                  </div>
                </p>
              </div>

              <ul>
                <li className='first'>기간</li>
                <li className='second'>
                  <input 
                    ref={input_period1}
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
                    ref={input_period2}
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

              <div className='check'>
                <p className='first'>주기</p>
                <p className='second'>
                  <div className='cycleA'>
                    <p>
                      <input 
                        ref={input_cycle1}
                        type="checkbox"
                        name="cycle1"
                        id='cycle01'                    
                        onChange={onChange}
                        onKeyPress={onKeyPress}
                      />
                      <label for='cycle01'><span>매일</span></label>
                    </p>
                    <p>
                      <input 
                        ref={input_cycle2}
                        type="checkbox"
                        name="cycle2"
                        id='cycle02'                     
                        onChange={onChange}
                        onKeyPress={onKeyPress}
                      />
                      <label for='cycle02'><span>평일</span></label>
                    </p>
                    <p>
                      <input 
                        ref={input_cycle3}
                        type="checkbox"
                        name="cycle3"
                        id='cycle03'                      
                        onChange={onChange}
                        onKeyPress={onKeyPress}
                      />
                      <label for='cycle03'><span>주말</span></label>
                    </p>
                  </div>
                  <div className='cycleB'>
                    <p>
                      <input 
                        ref={input_cycle4}
                        type="checkbox"
                        name="cycle4"
                        id='cycle04'                  
                        onChange={onChange}
                        onKeyPress={onKeyPress}
                      />
                      <label for='cycle04'><span>주 1일</span></label>
                    </p>
                    <p>
                      <input 
                        ref={input_cycle5}
                        type="checkbox"
                        name="cycle5" 
                        id='cycle05'                     
                        onChange={onChange}
                        onKeyPress={onKeyPress}
                      />
                      <label for='cycle05'><span>주 2일</span></label>
                    </p>
                    <p>
                      <input 
                        ref={input_cycle6}
                        type="checkbox"
                        name="cycle6"
                        id='cycle06'                  
                        onChange={onChange}
                        onKeyPress={onKeyPress}
                      />
                      <label for='cycle06'><span>주 3일</span></label>
                    </p>
                    <p>
                      <input 
                        ref={input_cycle7}
                        type="checkbox"
                        name="cycle7" 
                        id='cycle07'                     
                        onChange={onChange}
                        onKeyPress={onKeyPress}
                      />
                      <label for='cycle07'><span>주 4일</span></label>
                    </p>
                    <p>
                      <input 
                        ref={input_cycle8}
                        type="checkbox"
                        name="cycle8" 
                        id='cycle08'                     
                        onChange={onChange}
                        onKeyPress={onKeyPress}
                      />
                      <label for='cycle08'><span>주 5일</span></label>
                    </p>
                  </div>
                </p>
              </div>

              <ul>
                <li className='first'>한줄소개</li>
                <li className='second'>
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
                <li className='first'>상세내용</li>
                <li className='second'>
                  <textarea
                    ref={input_detail}
                    type="textarea"
                    name="detail"
                    placeholder
                    ="챌린지에 대해 설명해주세요.&#13;
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
                <li className='first'></li>
                <li className='second'>
                  <p className='photo1'>
                    <input 
                      className='input_photo'
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

            <section className='btn'>
              <button ref={input_btn} onClick={onClick}>생성하기</button>
            </section>  
          </div>
        </div>  
      </div>
    </div>
  );
};


export default CreateChallenge;