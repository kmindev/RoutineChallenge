import './Footer.css';

const Footer = () => {
 
  return (
    <div>
      <footer>
        <div className="f-left">
          <p className="logo"><a href="/"><img src={process.env.PUBLIC_URL + "/image/logo/logo.png"} alt="logo" /></a></p>
          <p>루틴챌린지</p>
        </div>
        <div className="f-right">
          <ul>
            <li>Info</li>
            <li>CEO. <span>멀티 IT 8조</span>&nbsp;&nbsp;&nbsp;Addr. <span>서울특별시 강남구 언주로 508 14층(역삼동, 서울상록빌딩)</span><br/>
                Tel/Fax. <span>02-1111-2222</span>&nbsp;&nbsp;&nbsp;Business Num. <span>211-07-77799</span></li>
          </ul>
          <ul>
            <li>C/S Center</li>
            <li><span>02-1111-3333 ~ 4  |  AM 10:00 ~ PM 6:00</span></li>
          </ul>
          <p className='copy'>Copyright by Routine Challenge Co., Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;