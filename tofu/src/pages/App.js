import React, { useState } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import TestPage from './TestPage';
import tofuImage from '../img/tofu-image.png';
import '../css/App.css';
import Resultpages from './Resultpages';
import Alltypespage from './Alltypespages'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleKakaoLogin = () => {
    setIsLoggedIn(true);
    navigate('/test');
  };

  return (
    <div className="app-container">
      {!isLoggedIn ? (
        <header className="app-header">
          <p className="app-title">두부로 알아보는 성격유형 테스트</p>
          <div className="app-subtitle">내가 두부라면</div>
          <div className="app-subtitle">어떤 두부?</div>
          <img src={tofuImage} alt="두부 이미지" className="app-image" />
          <button className="login-button" onClick={handleKakaoLogin}>
            카카오톡 로그인
          </button>
        </header>
      ) : (
        <Routes>
          <Route path="/test" element={<TestPage />}/>
          <Route path='/result' element={<Resultpages />}/>
          <Route path='/alltypes' element={<Alltypespage />} />
        </Routes>
      )}
    </div>
  );
};

export default App;