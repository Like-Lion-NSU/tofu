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
                <p>막걸리도 진행시켜~~</p>
            </>
        ), 
        (
            <>
                <p>어?? 누가 두부를 떨궜네...</p>누가 밟고 다치면 어쩌지ㅠㅠ
            </>
        ), 
        (
            <>
                아니 나 F야
            </>
        ), 
        (
            <>
                <p>버스타고</p>
                <p>걸어가면 되겠지~~</p>
            </>
        ),
        (
            <>
                <p>차분하게 혼자 하고 싶어</p>
            </>
        ),
        (
            <>
                <p>물은 600ml 넣으라고 했고,</p>
                <p>순두부는 몇 그람 넣으라고 했지?</p>
            </>
        ),
        (
            <>
                <p>우울한데 왜 두부를 샀어?</p>
            </>
        ),
        (
            <>
                <p>마파두부 재료는 어제 준비해뒀으니까</p>
                <p>레시피 한 번 더 보고 시작해야겠다!</p>
            </>
        ),
        (   
            <>
                <p>오오 나 이거 유튜브에서 봤어.</p>
                <p>재밋겠다. 게임은 뭐로 할까?</p>
            </>
        ),
        (
            <>
                <p>30분만 일 한다고 하면 되지 않을까?</p>
                <p>나 천재다~</p>
            </>
        ), 
        (
            <>
                <p>헐 진짜로?</p>
                <p>왜 내가 생각나?!</p>
            </>
        ),
        (
            <>
                <p>아 몰라 난 이제 쉴래~</p>
                <p>내일의 내가 해주겠지~~~</p>
            </>
        )]
    const QuestionB = [
        (
            <>
                <p>비도 오는데 무슨..</p>
                <p>혼자서 두부전 해먹을래~</p>
            </>
        ), 
        (
            <>
                <p>누가 여기다</p>
                <p>두부를 버리고 간거야?</p>
            </>
        ), 
        (
            <>
                어 나 T야
            </>
        ),
        (
            <>
                <p>찾아보니 여기서 9794버스를 타고</p>
                <p>30분 간 뒤, 5분 더 걸어가면 되네</p>
            </>
        ),
        (
            <>
                <p>요리는 같이 해야 제 맛!</p>
                <p>OO아 두부 좀 넣어줘~~</p>
            </>
        ),
        (
            <>
                <p>물은 대충 이정도 넣으면 되겠고~</p>
                <p>순두부도 대충 이정도 넣고~~</p>
            </>
        ),
        (
            <>
                <p>왜 우울해? 무슨 일 있어?</p>
            </>
        ),
        (
            <>
                <p>이제 슬슬 요리를 시작해볼까?</p>
                <p>어! 두부를 안사뒀네?</p>
            </>
        ), 
        (
            <>
                <p>굳이..? 난 하기싫어..</p>
                <p>구경만 할게..</p>
            </>
        ),
        (
            <>
                <p>간식을 빼고 이것만</p>
                <p>계산해야겠다</p>
            </>
        ),
        (
            <>
                <p>내가 왜 ㅋㅎㅋㅎㅋㅎ</p>
            </>
        ),
        (
            <>
                <p>힘들지만 지금 바로 해야겠다~~</p>
            </>
        )]
    
    const situation = [
        (
            <>
                <h3>
                    <p>
                        비오는 날, 친구가<br/> 
                        두부전을 먹으러 나오라고 했다.
                    </p>
                    <p>이럴 때 나는?</p>
                </h3>
            </>
        ),
        (
            <>
                <h3>
                    <p>
                        길 가다 바닥에<br/>
                        떨어진 두부를 발견했다.
                    </p>
                    <p>이럴 때 나는?</p>
                </h3>
            </>
        ),
        (
            <>
                <h3>
                    <p>너 T발 C야?</p>
                </h3>
            </>
        ),
        (
            <>
                <h3>
                    <p>
                        맛있는<br/>
                        두부스테이크 집을 예약한 나
                    </p>
                    <p>찾아가기 위한 행동은?</p>
                </h3>
            </>
        ),
        (
            <>
                <h3>
                    <p>
                        두부 요리를 준비할 때,
                    </p>
                    <p>나의 방식은?</p>
                </h3>
            </>
        ),
        (
            <>
                <h3>
                    <p>
                        순두부 찌개를<br/>
                        만들고 있는 나,
                    </p>
                    <p>나의 방식은?</p>
                </h3>
            </>
        ),
        (
            <>
                <h3>
                    <p>
                        나 우울해서 두부 샀어
                    </p>
                </h3>
            </>
        ),
        (
            <>
                <h3>
                    <p>
                        오늘은 나도 요리사~~<br/>
                        집에서 마파두부를 만들기로 한 나,
                    </p>
                    <p>이때 나의 행동은?</p>
                </h3>
            </>
        ),
        (
            <>
                <h3>
                    <p>
                        어느 날 친구가<br/>
                        취두부 먹기 벌칙을 하자고 했다.
                    </p>
                    <p>이럴 때 나는?</p>
                </h3>
            </>
        ),
        (
            <>
                <h3>
                    <p>
                        두부 심부름을 하러 간 나,<br/>
                        이것저것 간식도 담아보니 돈이 부족하다.
                    </p>
                    <p>이럴 때 나는?</p>
                </h3>
            </>
        ),
        (
            <>
                <h3>
                    <p>
                        난 두부만<br/>
                        보면 너가 생각나..
                    </p>
                    <p>이때 나의 대답은?</p>
                </h3>
            </>
        ),
        (
            <>
                <h3>
                    <p>
                        두부 요리가<br/>
                        마무리 된 후 수북히 쌓인 식기들..
                    </p>    
                    <p>설거지는 언제할까?</p>
                </h3>   
            </>
        )
    ]

    const UserSelect = e => {
        const selectedTitle = e.currentTarget.getAttribute("data-title");
        console.log(selectedTitle);
        setSelected(prevSelected => [...prevSelected, selectedTitle]);
        if (Index < 11) {
            setIndex(Index => Index + 1);
        } else {
            // Index가 11일 때는 PostSelctList를 호출
            selected.push(selectedTitle)
            window.localStorage.setItem('list', JSON.stringify(selected))
            window.location.href = '/tofumbti'
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
            <div className="Testtext">{situation[Index]}</div>
            <div className="selectbox">
                <div className="selectbtn selecta" data-title={SelectA[Index]} onClick={UserSelect}>
                    {QuestionA[Index]}
                </div>
                <div style={{fontSize:'2rem'}}>vs</div>
                <div className="selectbtn selectb" data-title={SelectB[Index]} onClick={UserSelect}>
                    {QuestionB[Index]}
                </div>
            </div>
        </div>
    )
}