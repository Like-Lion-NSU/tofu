import React, { useEffect, useState } from "react";
import '../css/Mainpage.css'
import tofuImage from '../img/tofu-image.png'
import { useNavigate } from "react-router-dom";
import maintext from '../img/maintext.png'
import axios from "axios";
import Footer from "../components/Footer";

export default function Mainpage() {
    const [visitor, setVisitor] = useState('')
    const navigate = useNavigate()
    const MoveToQ = e => {
        navigate('/question')
    }
    useEffect(()=>{
         // 쿠키 이름과 만료 시간 (초 단위) 설정
        const cookieName = 'JSESSIONID';
        const maxAgeInSeconds = 604800
        // 현재 날짜 및 시간 객체 생성
        const currentDate = new Date();

        // 만료 시간 설정 (현재 시간 + 만료 시간)
        currentDate.setTime(currentDate.getTime() + maxAgeInSeconds * 1000);

        // 만료 시간을 GMT 문자열로 변환
        const expires = currentDate.toUTCString();

        // 쿠키 설정
        document.cookie = `${cookieName}=someValue; expires=${expires}; path=/`;

        axios({
            method : 'get',
            url : 'v1/visitor'
        })
        .then(res => {
            console.log(res)
            console.log(res.data)
            setVisitor(res.data)
        })
        .catch(err => console.log(err))
    },[])
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