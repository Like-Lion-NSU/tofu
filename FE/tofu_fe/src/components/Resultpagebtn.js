import '../css/resultpages.css';
import { useNavigate } from 'react-router-dom';



const ResultpageButton = () => {
    const navigate = useNavigate();

    const gotoMain = e => {
        window.localStorage.removeItem('list')
        navigate('/')
    }

    const gotorank = e => {
        navigate('/rankingpage')
    }
    return(
    <>
        <div className="btn-box">
            <button name="replaybtn" className="btn btn-replay" onClick={gotoMain}>다시 테스트하기</button>
            <button name="rankbtn" className="btn btn-rank" onClick={gotorank}>두부 랭킹 보기</button>
        </div>
      </>
    )
}
export default ResultpageButton;