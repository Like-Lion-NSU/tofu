import React from "react";
import { Link } from "react-router-dom";
import '../css/Footer.css'

export default function Footer({visitor}){
    return(
        <div className="footerbox" style={{textAlign : "center"}}>
            <p>
                <small>
                총 방문자 수 : {visitor} 명
                </small>
            </p>
                <small>
                    개발진 : 조아빈, 황은혜, 서병덕, 권영태, 김민주<br/>
                    문의 : dudxo3295@nsu.ac.kr<br/>
                    instagram : <Link className="instalink" to={'https://instagram.com/likelionnsu?igshid=OGQ5ZDc2ODk2ZA=='}>@likelionnsu</Link>
                </small>
        </div>
    )
}