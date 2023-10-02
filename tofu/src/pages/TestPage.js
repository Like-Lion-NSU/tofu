import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/TestPage.css';
import axios from 'axios';

const Questions = [
  // 질문 리스트
  "e vs i",
  "e vs i",
  "e vs i",
  "n vs s",
  "n vs s",
  "n vs s",
  "f vs t",
  "f vs t",
  "f vs t",
  "p vs j",
  "p vs j",
  "p vs j"
];

const Answers = [
  // a 답변 리스트
  "e",
  "e",
  "e",
  "n",
  "n",
  "n",
  "f",
  "f",
  "f",
  "p",
  "p",
  "p",
  // b 답변 리스트
  "i",
  "i",
  "i",
  "s",
  "s",
  "s",
  "t",
  "t",
  "t",
  "j",
  "j",
  "j"
];

const TestPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]); // 사용자가 선택한 답변을 저장한다.
  const navigate = useNavigate();

  const handleAnswer = (answer) => {
    // 사용자가 답변을 선택했을 때, 선택한 답변을 배열에 저장한다.
    setSelectedAnswers([...selectedAnswers, answer]);

    // 다음 질문으로 이동
    if (currentQuestion < Questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // 마지막 질문인 경우, 결과 페이지로 이동
      sendAnswersToBackend();
    }
  };

  const calculateMbti = () => {
    // 각 카테고리별 선택 횟수를 계산하여 MBTI를 조합
    const categoryScores = {
      e: 0,
      i: 0,
      n: 0,
      s: 0,
      f: 0,
      t: 0,
      p: 0,
      j: 0
    };

    selectedAnswers.forEach((answer) => {
      const code = answer[0]; // 답변 문자열의 첫 번째 글자 사용
      switch (code) {
        case 'e':
          categoryScores.e += 1;
          break;
        case 'i':
          categoryScores.i += 1;
          break;
        case 'n':
          categoryScores.n += 1;
          break;
        case 's':
          categoryScores.s += 1;
          break;
        case 'f':
          categoryScores.f += 1;
          break;
        case 't':
          categoryScores.t += 1;
          break;
        case 'p':
          categoryScores.p += 1;
          break;
        case 'j':
          categoryScores.j += 1;
          break;
        default:
          break;
      }
    });

    // 계산된 점수로 MBTI 계산
    const mbti = `${categoryScores.e > categoryScores.i ? 'E' : 'I'}${
      categoryScores.s > categoryScores.n ? 'S' : 'N'
    }${categoryScores.t > categoryScores.f ? 'T' : 'F'}${
      categoryScores.j > categoryScores.p ? 'J' : 'P'
    }`;

    console.log('선택한 답변은', selectedAnswers);
    console.log(categoryScores);
    console.log(mbti);
    return { categoryScores, mbti };
  };

  async function postUserMbti(mbti){
    try{
      await axios.post('/mbti',{
        mbti : {state:{mbti}}
      });
      console.log(mbti)
    } catch(e){
      console.log(e);
    }
  }

  const sendAnswersToBackend = () => {
    try {
      // MBTI 계산
      const { categoryScores, mbti } = calculateMbti();
      console.log({categoryScores, mbti});
      // 결과 페이지로 이동

      postUserMbti(mbti);
      
      navigate('/result', { state: { categoryScores, mbti } });

    } catch (error) {
      console.error('Error while sending answers to the backend:', error);
    }
  };

  // 진행 바 스타일링을 위한 변수들
  const progressBarWidth = ((currentQuestion + 1) / Questions.length) * 100 + "%";
  const progressBarStyle = { width: progressBarWidth };

  return (
    <div className="test-page">
      <div className="progress-bar-container">
        <div className="progress-bar" style={progressBarStyle}></div>
      </div>
      <div className="progress-number">{currentQuestion + 1}/{Questions.length}</div>
      <div className="question-container">
        <h3 className="question">{Questions[currentQuestion]}</h3>
      </div>
      <div className="answer-buttons">
      <button onClick={() => handleAnswer(Answers[currentQuestion])} className="answer-button">
      {Answers[currentQuestion]}
      </button>
      <span className="vs-text">vs</span>
      <button onClick={() => handleAnswer(Answers[currentQuestion + Questions.length])} className="answer-button">
        {Answers[currentQuestion + Questions.length]}
      </button>
      </div>
    </div>
  );
};

export default TestPage;