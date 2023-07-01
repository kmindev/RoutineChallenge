import './Header4.css';

const Header4 = () => {

  const login_id = window.sessionStorage.getItem("member_id");

  const handleLogout = () => {
    console.log("handleLogout");
    window.sessionStorage.clear();
    console.log(
      "handleLogout: window.sessionStorage(login_id) =>",
      window.sessionStorage.getItem("member_id")
    );
    alert('내일 또 만나요!');
  };
  
  return (
    <div>
      <header>
        <div className="header4">
          <nav className="nav">
            <ul className='nav-left'>
              <li className='l03'><a href="/#about">ABOUT</a></li>
              <li className='l03'><a href="/challenge">CHALLENGE</a></li>
            </ul>
            <ul className='nav-center'>
              <li className="logo"><a href="/"><img src={process.env.PUBLIC_URL + "/image/logo/logo.png"} alt="logo" /></a></li>
            </ul>
            <ul className='nav-right'>
              <li className='l03'><a href="/myPage">MY PAGE</a></li>
              {login_id === null ? 
                <li className="l03"><a href="/login">LOGIN</a></li> : <li className="l03"><a href="/" onClick={handleLogout}>LOGOUT</a></li>
              }
              {login_id === null ? 
                <li className="l03"><a href="/join">JOIN</a></li> : null
              }
            </ul>
          </nav>        
        </div>
      </header>
    </div>
  );
};

export default Header4;