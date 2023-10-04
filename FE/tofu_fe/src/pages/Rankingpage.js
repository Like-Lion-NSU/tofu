import React, { useEffect, useState } from "react";
import axios from 'axios'
import '../css/Rankingpage.css'
import ENFJ from '../img/ENFJ푸주.png'
import ENFP from '../img/ENFP유부.png'
import ENTJ from '../img/ENTJ취두부.png'
import ENTP from '../img/ENTP두부과자.png'
import ESFJ from '../img/ESFJ두유.png'
import ESFP from '../img/ESFP마파두부.png'
import ESTJ from '../img/ESTJ순두부찌개.png'
import ESTP from '../img/ESTP두부강정.png'
import INFJ from '../img/INFJ두부조림.png'
import ISTJ from '../img/ISTJ검은콩두부.png'
import INFP from '../img/INFP순두부.png'
import INTJ from '../img/INTJ두부스테이크.png'
import INTP from '../img/INTP건두부.png'
import ISFJ from '../img/ISFJ두부김치.png'
import ISFP from '../img/ISFP흰두부.png'
import ISTP from '../img/ISTP두부전.png'
import { useNavigate } from "react-router-dom";

export default function Rankingpage() {
    const root = document.getElementById('root');
    const [ranklist, setRanklist] = useState([])
    const [total, setTotal] = useState(0)
    const navigate = useNavigate()
    root.style.height = 'auto'
    useEffect(()=>{
        axios({
            method : 'get',
            url : '/v1/rank',
        })
        .then(res => {
            console.log(res)
            console.log(res.data)
            const data = res.data
            let list = data.sort((a, b) => (b.seq - a.seq))
            setRanklist(list)
        })
        .catch(err=>console.log(err))
    },[])
    
    const totalCount = () => {
        let sum = 0;
        ranklist.forEach(element => {
            sum += element.seq;
        });
        setTotal(sum); // total 상태를 업데이트
    };

    useEffect(() => {
        totalCount(); // ranklist가 변경될 때마다 total을 다시 계산하도록 설정
    }, [ranklist]);


    const getImage = (mbti) => {
        switch(mbti){
            case 'ENFJ' : return ENFJ
            case 'ENFP' : return ENFP
            case 'ENTJ' : return ENTJ
            case 'ENTP' : return ENTP
            case 'ESFP' : return ESFP
            case 'ESTJ' : return ESTJ
            case 'ESTP' : return ESTP
            case 'INFJ' : return INFJ
            case 'INFP' : return INFP
            case 'INTJ' : return INTJ
            case 'INTP' : return INTP
            case 'ISFJ' : return ISFJ
            case 'ISFP' : return ISFP
            case 'ISTJ' : return ISTJ
            case 'ISTP' : return ISTP
            case 'ESFJ' : return ESFJ
        }
    }

    const gotomain = e => {
        window.localStorage.removeItem('list')
        navigate('/')
    }

    return (
        <div className="rankingbox">
            <div className="rankingtitlebox">
                <h1 className="rankingtitle">두부 랭킹</h1>
                <div className="totalcount">
                총 인원 :{total} 명
                </div>
            </div>
            {ranklist?.map(list => {
                const percentage = (list.seq / total) * 100; // 백분율 계산
                const percentageStyle = {
                    width: `${percentage}%`, // 퍼센트 값을 width 스타일로 설정
                    backgroundColor: 'lightblue', // 퍼센트 바의 배경색 설정
                };
                return(
                    <div className="ranklistbox">
                        <div className="mbtilist">
                            <div className="mbtiimg" style={{
                               backgroundImage: `url(${getImage(list.mbti)})`, 
                            }}></div>
                            {list.mbti}
                        </div>
                        <div className="rankinglist">
                            <div className="totalbar">
                                <div className="seqbar" style={percentageStyle}></div>
                            </div>
                            {percentage.toFixed(0)}%  {/* 퍼센트를 소수점 두 자리로 표시 */}
                        </div>
                    </div>
                )
            })}
            <button className="ranktomainbtn" onClick={gotomain}>다시 테스트하기</button>
        </div>
    )
}