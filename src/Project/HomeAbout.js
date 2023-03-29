import React, { Component } from 'react';
import {FullPage,Slide} from "https://cdn.skypack.dev/react-full-page@0.1.12";
import './HomeAbout.css';

class HomeAbout extends Component {
  
  render() {
    return (
      <div>
      <FullPage controls controlsProps={{className:"slide"}}>
        <Slide>
          <div className="visual">
            <div className='v-text'>
              <p>루틴챌린지</p>
              <p>당신의 건강한 하루를 위한<br/>페이스 메이커</p>
            </div>
          </div>
        </Slide>
      </FullPage>

      <section id='about'>
        <div className='con01'><a href="/challenge">
          <ul>
            <li className='c01-left'>
              <p>지금, 루틴챌린지에서<br/>당신의 챌린지를 공유하세요!</p>
              <p>하루 루틴을 To Do List로 관리하며 기록할 수 있습니다.<br/>
               친구/가족/회원들과 챌리지를 공유하며 함께 할 수 있습니다.</p>
              <p>
                <input type='checkbox' id='cb1' />
                <label for='cb1'>챌린지 보러 가기</label>
              </p>
            </li>
            <li className='c01-right'><img src={process.env.PUBLIC_URL + "/image/HOME&ABOUT/people.png"} alt='people' /></li>
          </ul>
        </a></div>

        <div className='con02'>
          <h3>당신이 원하는<br/>모든 챌린지에 참여할 수 있습니다.</h3>
          <div class="marquee">
            <div>
              <span><img src={process.env.PUBLIC_URL + "/image/HOME&ABOUT/challenge.png"} alt='challenge' /></span>
              <span><img src={process.env.PUBLIC_URL + "/image/HOME&ABOUT/challenge.png"} alt='challenge' /></span>
            </div>
          </div>
        </div>

        <div className='con03'><a href="/myPage">
          <ul>
            <li className='c03-left'><img src={process.env.PUBLIC_URL + "/image/HOME&ABOUT/routine_clear2.png"} alt='MyRoutine' /></li>
            <li className='c03-right'>
              <p>당신의 미래는<br/>반복된 루틴에 있습니다.</p>
              <p>나만의 루틴을 설정하여 관리하세요.</p>
              <p>
                <input type='checkbox' id='cb2' />
                <label for='cb2'>마이페이지 바로가기</label>
              </p>
            </li>
          </ul>
          </a></div>
      </section>
      </div>
    );
  }
}

export default HomeAbout;