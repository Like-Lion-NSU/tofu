import axios from 'axios';
import '../css/resultpages.css';
import ResultpageButton from '../resultpagebtn';
import { useEffect, useState } from 'react';


function Resultpages() {
  const [response, setResponse] = useState('');
  useEffect(() => {
    axios.get('/mbti')
    .then(response => setResponse(response))
    .catch(error => console.log(error))
  }, []);
  console.log(setResponse);
  return(
    <>
      <div className="result">
        <h2 className="result-title">{response.name} OO 님과 어울리는 두부는 
        <br/>
        <span className="result-tofuType">
        흰 두부
        </span> 입니다.
        </h2>
      </div>
      <div className="result-box">
        <div className="result-box__analyze">
            <div className="result-box__analyze--tofuTypeImg">
            </div>
            <div className="result-box__analyze--analysisTable"> 
            </div>
        </div>
      </div>
      <h1>추천 상품</h1>
      <div className="result-bestWorst">
        <div className="result-best"></div>
        <div className="result-worst"></div>
      </div>
      <div className="result-bestWorstText">
        <div className="result-bestWorstText__best">
          <h2>Best</h2>
          <p>베스트</p>
        </div>
        <div className="result-bestWorstText__worst">
          <h2>Worst</h2>
          <p>워스트</p>
        </div>
      </div>
      <ResultpageButton />
    </>
  )
}

export default Resultpages;
