import React, {useState} from "react";
import '../css/Testpage.css'
import { useNavigate } from "react-router";

export default function Testpage(){
    const [Index, setIndex] = useState(0)
    const [selected, setSelected] = useState([])  //선택한 답변 리스트
    const navigate = useNavigate()

    const SelectA = ['E', 'N', 'F', 'P', 'I', 'S', 'T', 'J', 'E', 'N', 'F', 'P']
    const SelectB = ['I', 'S', 'T', 'J', 'E', 'N', 'F', 'P', 'I', 'S', 'T', 'J']
    const QuestionA = [
        (
            <>
                <p>뭐?? 두부전?!</p>
            </>
        ), 
        'N', 'F', 'P', 'I', 'S', 'T', 'J', 'E', 'N', 'F', 'P']
    const QuestionB = [
        (
            <>
                <p>비도 오는데 무슨..</p>혼자서 두부전 해먹을래~
            </>
        ), 'S', 'T', 'J', 'E', 'N', 'F', 'P', 'I', 'S', 'T', 'J']


    const UserSelect = e => {
        console.log(e.target.title);
        setSelected([...selected, e.target.title]);
        if (Index < 11) {
            setIndex(Index => Index + 1);
        } else {
            // Index가 11일 때는 PostSelctList를 호출
            selected.push(e.target.title)
            window.localStorage.setItem('list', JSON.stringify(selected))
            window.location.href = '/resultpage'
        }
    };


    const progressBarWidth = ((Index + 1) / QuestionA.length) * 100 + "%";
    const progressBarStyle = { width: progressBarWidth };

    return(
        <div className="testpagebox">
            <div className="progress-bar-container">
                <div className="progress-bar" style={progressBarStyle}></div>
                <div className="progress-number">{Index + 1}/{QuestionA.length}</div>
            </div>
            <div className="Testtext">상황</div>
            <div className="selectbox">
                <div className="selectbtn selecta" title={SelectA[Index]} onClick={UserSelect}>{QuestionA[Index]}</div>
                <div style={{fontSize:'2rem'}}>vs</div>
                <div className="selectbtn selectb" title={SelectB[Index]} onClick={UserSelect}>{QuestionB[Index]}</div>
            </div>
        </div>
    )
}