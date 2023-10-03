import React, { useEffect, useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function Resultpage(){
    const mbtilist = window.localStorage.getItem('list');
    const [Tofu, setTofu] = useState('')
    const data = {}
    const navigate = useNavigate();
    useEffect(()=>{
        console.log(1)
        data['mbtilist'] = mbtilist
        async function getMbti(){
            try{
                const response = await axios({
                    method : 'post',
                    url : '/v1/mbtiResult',
                    headers: {
                             'Content-Type': 'application/json;charset=UTF-8'
                                },
                    data: data
                })
                console.log(response)
                setTofu(response.data)
            }catch(err){
                console.log(err)
            }
        }
        console.log(3)
        getMbti();
        console.log(2)
    },[])

    // useEffect(() => {
    //         console.log(mbtilist);
    //         console.log(1);
    //         axios({
    //             method: 'post',
    //             url: '/api/mbti',
    //             headers: {
    //                 'Content-Type': 'application/json;charset=UTF-8'
    //             },
    //             data: mbtilist
    //         })
    //         .then(res => {
    //             console.log(17);
    //             console.log(res);
    //             console.log(res.data);
    //             console.log(res.data.result);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //             console.log(24);
    //         });
    // },[]);

    const gotorank = e => {
        navigate('/rankingpage')
    }

    return(
        <div className="resultpagebox">
            <div className="result">
                <h2 className="result-title">당신과 어울리는 두부는</h2>
                hihi
            </div>
            <button onClick={gotorank}>랭킹보기</button>
        </div>
    )
}