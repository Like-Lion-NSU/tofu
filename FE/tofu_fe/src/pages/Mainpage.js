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
        navigate('/testpage')
    }
    useEffect(()=>{
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