import axios from 'axios';
import '../css/resultpages.css';
import { useNavigate } from 'react-router-dom';



const ResultpageButton = () => {
    const BaseUrl = 'http://www.tofumbti.site'
    const navigate = useNavigate();

    const gotoMain = e => {
        navigate('/')
    }

    const gotorank = e => {
        navigate('/tofurank')
    }
    const handleCopyClipBoard = (text) => {
        const textArea = document.createElement("textarea");
        textArea.value = text;
    
        // textarea를 화면에 보이지 않도록 스타일을 설정합니다.
        textArea.style.position = "fixed";
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.width = "1px";
        textArea.style.height = "1px";
        textArea.style.opacity = "0";
    
        document.body.appendChild(textArea);
    
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    
        alert("클립보드에 링크가 복사되었어요.");
    };
    return(
    <>
        <div className="btn-box">
            <button name="replaybtn" className="btn btn-replay" onClick={gotoMain}>다시 테스트하기</button>
            <button name="rankbtn" className="btn btn-rank" onClick={gotorank}>두부 랭킹 보기</button>
            <button name="sharebtn" className='btn btn-share' onClick={()=> handleCopyClipBoard(`${BaseUrl}`)}>공유하기</button>
        </div>
      </>
    )
}
export default ResultpageButton;