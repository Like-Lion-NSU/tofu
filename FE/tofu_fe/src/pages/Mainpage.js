import React, { useEffect, useState } from "react";
import '../css/Mainpage.css'
import tofuImage from '../img/tofu-image.png'
import { useLocation, useNavigate } from "react-router-dom";
import maintext from '../img/maintext.png'
import axios from "axios";
import Footer from "../components/Footer";

export default function Mainpage() {
    const [visitor, setVisitor] = useState('');
    const navigate = useNavigate()
    const MoveToQ = e => {
        navigate('/question')
    }
    useEffect(()=>{
        const data = {}
          const Postsession = () => {
            const cookieName = 'jsessionid';
          
            // 랜덤한 문자열 생성 함수
            function generateRandomString(length) {
              const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
              let result = '';
              const charactersLength = characters.length;
              for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
              }
              return result;
            }
          
            // 이미 저장된 jsessionid를 가져옴
            const existingJsessionId = window.localStorage.getItem(cookieName);
          
            if (existingJsessionId) {
              // 이미 저장된 jsessionid가 있는 경우 서버로 데이터 전송
              data['jsessionid'] = existingJsessionId;
              axios({
                method: 'post',
                url: 'v1/visitor',
                headers: {
                  'Content-Type': 'application/json',
                },
                data: data,
              })
                .then((res) => {
                  setVisitor(res.data);
                })
                .catch((err) => console.log(err));
            } else {
              // 새로운 jsessionid 생성 후 저장
              const randomValue = generateRandomString(32);
          
              // 데이터를 localStorage에 저장
              window.localStorage.setItem(cookieName, randomValue);
          
              // 서버로 데이터 전송
              data['jsessionid'] = randomValue;
              axios({
                method: 'post',
                url: 'v1/visitor',
                headers: {
                  'Content-Type': 'application/json',
                },
                data: data,
              })
                .then((res) => {
                  setVisitor(res.data);
                })
                .catch((err) => console.log(err));
            }
          };
          // window.addEventListener('load', function() {
            // Postsession 함수 호출
            Postsession();
          // })  
    },[])
    // useEffect(()=>{
    //   console.log(count)
    //   if(count >= 1){
    //     console.log(location.state.visitor)
    //     setVisitor(location.state.visitor)
    //   }
    // }, [count])
    return(  
        <>    
            <div className='app-container'>
                <header className="app-header">
                    <p className="maintext"><img src={maintext} alt="메인 텍스트" className="maintext"></img></p>
                    <p className="app-title">두부로 알아보는 성격유형 테스트</p>
                    <div className="app-subtitle">내가 두부라면</div>
                    <div className="app-subtitle">어떤 <div className="tofutextback">두부?</div></div>
                    <img src={tofuImage} alt="두부 이미지" className="app-image" />
                    <button className="login-button" onClick={MoveToQ}>
                    시작하기
                    </button>
                </header>
                <Footer visitor={visitor}/>
            </div>
        </> 
    )
}