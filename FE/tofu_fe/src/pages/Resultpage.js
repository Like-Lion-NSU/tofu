import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/resultpages.css";
import ResultpageButton from "../components/Resultpagebtn";
import ENFJ from "../img/ENFJ푸주.png";
import ENFP from "../img/ENFP유부.png";
import ENTJ from "../img/ENTJ취두부.png";
import ENTP from "../img/ENTP두부과자.png";
import ESFJ from "../img/ESFJ두유.png";
import ESFP from "../img/ESFP마파두부.png";
import ESTJ from "../img/ESTJ순두부찌개.png";
import ESTP from "../img/ESTP두부강정.png";
import INFJ from "../img/INFJ두부조림.png";
import ISTJ from "../img/ISTJ검은콩두부.png";
import INFP from "../img/INFP순두부.png";
import INTJ from "../img/INTJ두부스테이크.png";
import INTP from "../img/INTP건두부.png";
import ISFJ from "../img/ISFJ두부김치.png";
import ISFP from "../img/ISFP흰두부.png";
import ISTP from "../img/ISTP두부전.png";

export default function Resultpage() {
  const data = {};
  const mbtilist = window.localStorage.getItem("list");
  const [mbti, setMbti] = useState("");
  const [tofu, setTofu] = useState("");
  const [imgpath, setImgpath] = useState("");
  const [bestImg, setBestImg] = useState("");
  const [bestText, setBestText] = useState("");
  const [worstImg, setWorstImg] = useState("");
  const [worstText, setWorstText] = useState("");
  const navigate = useNavigate();
  const mbtidetails = {
    ENFJ: (
      <>
        <p>
          정의로운 사회운동가, 언변 능숙 형
        </p>
        <p>당신은 얇아 보이지만 누구보다 올곧은 푸주입니다!</p>
        
        <p>온화하고 적극적이며, 책임감이 강하고 사교성이 풍부합니다.</p>
        <p>동경심이 많습니다. 이타적이고 참을성이 많습니다.</p>
        <p>
          또한, 다른 사람들의 생각이나 의견에 진지한 관심을 가지고 공동의 목표를
          위하여 다른 사람의 의견에 대체로 동의합니다.
        </p>
        <p>
          미래의 가능성을 추구하며 편안하고 능숙하게 계획을 제시하여 집단을
          이끌어가는 능력이 있습니다.
        </p>
      </>
    ),
    ENFP: (
      <>
        <p>재기발랄한 활동가, 스파크형</p>
        <p>당신은 따뜻하게 남을 감싸줄 수 있는 유부입니다!</p>
        
        <p>따뜻하고 정열적이며 활기가 넘칩니다.</p>
        <p>재능이 많으며 상상력이 풍부합니다.</p>
        <p>
          온화하고 창의적이며 항상 새로운 가능성을 찾아 시도하는 유형입니다.
        </p>
        <p>
          문제 해결이 빠르고, 관심 있는 일은 무엇이든지 수행해내는 능력과 열정이
          있습니다.
        </p>
        <p>
          다른 사람들에게 관심을 쏟으며 사람들을 잘 다루고 뛰어난 통찰력으로
          도움을 줍니다.
        </p>
      </>
    ),
    ENTJ: (
      <>
        <p>대담한 통솔자, 지도자형</p>
        <p>당신은 자신만의 색이 확고한 취두부입니다!</p>
       
        <p>
          열성이 많으며, 자기주장이 강하면서 단호하고, 지도력과 통솔력이
          있습니다.
        </p>
        <p>타고난 지도자형으로 일은 일대로, 욕은 욕대로 먹을 수 있습니다.</p>
        <p>
          완벽주의를 추구하기 때문에 남이 비집고 들어갈 틈이 없을 수
          있습니다.
        </p>
        <p>
          지적 욕구가 강하고, 감정표현이 솔직해서 타인이 상처받을 수
          있지만, 가끔 엉뚱할 때도 있습니다.
        </p>
      </>
    ),
    ENTP: (
      <>
        <p>격렬한 논쟁을 즐기는 변론가, 발명가형</p>
        <p>당신은 겉보기엔 만만하지만, 속은 누구보다 단단한 두부 과입니다!</p>
        
        <p>
          본인이 구상하는 바를 실현하고 싶어 하는 기질이 강하며, 아웃사이더적인
          성격이 겹쳐 혁명가의 기질을 띄고 있습니다.
        </p>
        <p>
          모든 분야의 기존체제 자체를 뒤집어 버리거나 분야 전체의 도약을 이루는
          인물들이 많기도 합니다.
        </p>
        <p>경쟁심이 강하며 외향형 중 제일 내향적인 타입입니다.</p>
      </>
    ),
    ESFJ: (
      <>
        <p>사교적인 외교관, 친선도모형</p>
        <p>당신은 사람들에게 공감을 잘하고 융화가 잘 되는 두유입니다!</p>
        
        <p>동정심이 많고 다른 사람에게 관심을 쏟으며 인화를 중시하여,
           타고난 협력자로서 동료애가 많고 친절하며 능동적인 구성원입니다.</p>
        <p>이야기하는 것을 즐기며 정리 정돈을 잘합니다.</p>
        <p>사람을 다루고 행동하는 분야에 적합합니다.</p>
        <p>참을성이 많고 다른 사람들을 잘 도와주지만,
           거절당했을 때 마음의 상처를 받습니다.</p>

      </>
    ),
    ESFP: (
      <>
        <p> 자유로운 영혼의 연예인, 사교적인 유형</p>
        <p>당신은 매콤하고 화려한 마파두부입니다!</p>
        
        <p>사교적이고 활동적입니다.</p>
        <p>수용력이 강하고 친절하며 낙천적입니다.</p>
        <p>어떤 상황이든 잘 적응하고, 현실적입니다.</p>
        <p>주위의 사람이나 일어나는 일에 대하여 관심이 많습니다.</p>
        <p>사물을 다루는 사실적인 상식이 풍부합니다.</p>
        <p>
          때로는 수다스럽고 진지함이 부족하거나 마무리를 잘 못 하는 경향이
          있습니다.
        </p>
      </>
    ),
    ESTJ: (
      <>
        <p> 엄격한 관리자, 사업가형</p>
        <p>당신은 여러 사람을 아우르는, 여러 재료를 조합한 순두부찌개입니다!</p>
        
        <p>현실적이며 활동을 조직화하고, 주도해 나가는 지도력이 있습니다.</p>
        <p>
          실질적이고 현실 감각이 뛰어나, 일을 조직하고 계획하여 추진시키는
          능력이 있습니다.
        </p>
        <p>
          자기 또는 타인의 감정을 고려하는 능력이 부족하여 속전속결 하는 경향이
          있을 수 있습니다.
        </p>
        <p>지나치게 업무 위주로 대하는 경향이 있기도 합니다.</p>
      </>
    ),
    ESTP: (
      <>
        <p> 모험을 즐기는 사업가, 수완 좋은 활동가형 </p>
        <p>
          당신은 강한 현실감각으로 문제를 해결하는, 뜨거운 기름에서도 살아남는
          두부 강정입니다!
        </p>
        <p>
          사실적이고 관대하며 개방적으로, 사람이나 사물에 대한 선입견이 별로
          없습니다.
        </p>
        <p>강한 현실감각으로 타협책을 모색하고 문제해결 능력이 뛰어납니다.</p>
        <p>센스 있고 유머러스하여 어디서든 적응을 잘하고 친구와 어울리기 좋아합니다.</p>

      </>
    ),
    INFJ: (
      <>
        <p>통찰력 있는 선지자, 예언가형</p>
        <p>
          당신은 다양한 사람과 잘 어울리며, 어떤 양념이든 잘 어울리는
          두부조림입니다!
        </p>
        
        <p>인내심이 크고 통찰력과 직관력이 뛰어나며 화합을 추구합니다.</p>
        <p>
          창의력이 좋으며 성숙한 경우엔 강한 직관력으로 타인에게 영향을
          끼칩니다.
        </p>
        <p>
          친한 친구나 지인 앞에서 미래에 대한 각종 예측과 상상에 대한 말을 하기
          좋아하는 특성이 있습니다.
        </p>
        <p>일에 의미부여 하는 것을 좋아하고 유행에 관심이 없습니다.</p>
      </>
    ),
    INFP: (
      <>
        <p>열정적인 중재자, 잔다르크형</p>
        <p>당신은 다른 사람들과 잘 어울리며 순둥순둥한 순두부입니다!</p>
        
        <p>세계 인구의 4%가 이 유형에 속하며 차분하고 창의적입니다.</p>
        <p>
          낭만적인 성향으로 보이지만 내적 신념이 깊은 정열적인 중재자 유형입니다.
        </p>
        <p>개인주의자이며, 이상주의자이고 이해력이 높습니다.</p>
        <p>적응력이 좋으며 대체로 관대하고 개방적이기도 합니다.</p>
        <p>
          호기심이 많으며 어떠한 일의 결과보다 가능성을 보는 경향이 있습니다.
        </p>
        <p>아이디어를 수행하기 위한 촉매 역할을 합니다.</p>
      </>
    ),
    INTJ: (
      <>
        <p>용의주도한 전략가 형</p>
        <p>
          두부로도 고기 맛을 낼 수 있다!
          <br />
          당신은 두부로도 고기 맛을 낼 수 있는 두부 스테이크입니다!
        </p>
        <p>고집이 세고 융통성이 부족합니다.</p>
        <p>자기 관심 분야 외에는 신경을 거의 쓰지 않습니다.</p>
        <p>타인에게 잘 보이고 싶다는 욕구가 없고 공감을 잘 못 합니다.</p>
        <p>하지만 자기 능력에 대해 자신감이 있고 높이 평가하고, 목표를 달성하면 행복을 느낍니다.</p>

      </>
    ),
    INTP: (
      <>
        <p> 논리적인 사색가, 아이디어 뱅크형</p>
        <p>당신은 조용하고 과묵한 건두부입니다!</p>
        
        <p>조용하고 과묵하며 논리와 분석으로 문제를 해결하기 좋아합니다.</p>
        <p>
          먼저 대화를 시작하지 않는 편이지만, 관심 있는 분야는 말을 많이
          하는 편입니다.
        </p>
        <p>이해가 빠르고 모두의 의견을 수렴하고자 노력합니다.</p>
        <p>규칙과 법에 얽매이는 것을 싫어해 다소 반항적인 부분도 있으며 비판적이고 게으른 편입니다.</p>

      </>
    ),
    ISFJ: (
      <>
        <p>용감한 수호자, 실용적인 조력자</p>
        <p>
          당신은 두부와 김치의 조합처럼 적은 유형의 사람과 영혼의 파트너인
          두부김치입니다!
        </p>
        
        <p>조용하고 차분하며, 따뜻하고 친근합니다.</p>
        <p>
          책임감과 인내력 또한 매우 강하고 본인의 친한 친구나 가족에게 애정이
          가득합니다.
        </p>
        <p>
          언제나 진솔해지려고 노력하고 가볍지 않기 때문에 관계를 맺기 가장
          믿음직스러운 유형입니다.
        </p>
        <p>
          이상과 달리 귀찮은 일이 생겼을 때, 자신에게 괴리감을 느낄 수 있는
          유형입니다.
        </p>
      </>
    ),
    ISFP: (
      <>
        <p> 호기심 많은 예술가, 성인군자 형</p>
        <p>당신은 다정하고 온화한 흰 두부입니다!</p>
        <p>말은 많이 없지만, 다정하고 온화하며 사람들에게 친절합니다.</p>
        <p>상대방을 잘 알게 될 때까지 내면의 모습을 잘 보이지 않습니다.</p>
        <p>
          사람과 관계된 일을 할 때 자신의 감정과 타인의 감정에 지나치게 민감한
          경향이 있습니다.
        </p>
        <p>사람 간의 화합을 중시하며, 충돌을 회피하는 성향입니다.</p>
      </>
    ),
    ISTJ: (
      <>
        <p> 청렴결백 논리주의자, 세상의 소금 형</p>
        <p>당신은 냉철하며 신념이 강한 검은콩두부입니다!</p>
        <p>실제 사실에 대하여 정확하고 체계적으로 기억합니다.</p>
        <p>일 처리에서도 신중하고 책임감이 있습니다.</p>
        <p>다만, 낯가림이 심한 편이고 선입견이 강한 편입니다.</p>
        <p>예고 없이 갑작스러운 변화를 매우 싫어합니다.</p>
        <p>실수한 것을 참지 못하고 즉각 바로잡기를 원합니다.</p>
      </>
    ),
    ISTP: (
      <>
        <p>논리적인 실용주의자, 백과사전형</p>
        <p>당신은 솔직 담백한 두부전입니다!</p>
        <p>과묵하며 절제된 호기심으로 인생을 관찰하고 눈치가 빠릅니다.</p>
        <p>위기 대처 능력이 뛰어나고 신체적 위험을 즐기며 두려움이 적습니다</p>   
        <p>
          조용히 자기 일만 하는 것처럼 보이지만 사실 주변 상황 파악도 다
          하고 있습니다.
        </p>
        <p>하지만 사회성이 부족한 편일 수도 있습니다..</p>
        <p>손재주가 뛰어나며 말이 없고 타인에 대한 마음 표현을 어려워합니다.</p>
        <p>틀에 박히고 통념적인 생활을 싫어합니다.</p>
      </>
    ),
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    console.log(1);
    data["mbtilist"] = mbtilist;
    async function getMbti() {
      try {
        const response = await axios({
          method: "post",
          url: "/v1/mbtiResult",
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
          data: data,
        });
        console.log(response);
        setMbti(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    console.log(3);
    getMbti();
    console.log(2);
  }, []);

  useEffect(() => {
    switch (mbti) {
      case "ENFJ":
        setTofu("푸주");
        setImgpath(ENFJ);
        setWorstImg(ESFP);
        setWorstText("ESFP / 마파두부");
        setBestImg(INFP);
        setBestText("INFP / 순두부");
        break;
      case "ENFP":
        setTofu("유부");
        setImgpath(ENFP);
        setWorstImg(ESFJ);
        setWorstText("ESFJ / 두유");
        setBestImg(ENFJ);
        setBestText("ENFJ / 푸주");
        break;
      case "ENTJ":
        setTofu("취두부");
        setImgpath(ENTJ);
        setBestImg(INFP);
        setBestText("INFP / 순두부");
        setWorstImg(ESTJ);
        setWorstText("ESTJ / 순두부찌개");
        break;
      case "ENTP":
        setTofu("두부과자");
        setImgpath(ENTP);
        setBestImg(INFJ);
        setBestText("INFJ / 두부조림");
        setWorstImg(ISFJ);
        setWorstText("ISFJ / 두부김치");
        break;
      case "ESFP":
        setTofu("마파두부");
        setImgpath(ESFP);
        setBestImg(ISFJ);
        setBestText("ISFJ / 두부김치");
        setWorstImg(INFP);
        setWorstText("INFP / 순두부");
        break;
      case "ESTJ":
        setTofu("순두부찌개");
        setImgpath(ESTJ);
        setBestImg(INTP);
        setBestText("INTP / 건두부");
        setWorstImg(INFJ);
        setWorstText("INFJ / 두부조림");
        break;
      case "ESTP":
        setTofu("두부강정");
        setImgpath(ESTP);
        setBestImg(ISTJ);
        setBestText("ISTJ / 검은콩두부");
        setWorstImg(ENFP);
        setWorstText("ENFP / 유부");
        break;
      case "INFJ":
        setTofu("두부조림");
        setImgpath(INFJ);
        setBestImg(INFJ);
        setBestText("INFJ / 두부조림");
        setWorstImg(ISFP);
        setWorstText("ISFP / 흰두부");
        break;
      case "INFP":
        setTofu("순두부");
        setImgpath(INFP);
        setBestImg(ENTJ);
        setBestText("ENTJ / 취두부");
        setWorstImg(ISFJ);
        setWorstText("ISFJ / 두부김치");
        break;
      case "INTJ":
        setTofu("두부스테이크");
        setImgpath(INTJ);
        setBestImg(ENTP);
        setBestText("ENTP / 두부과자");
        setWorstImg(INFJ);
        setWorstText("INFJ / 두부조림");
        break;
      case "INTP":
        setTofu("건두부");
        setImgpath(INTP);
        setBestImg(INFP);
        setBestText("INFP / 순두부");
        setWorstImg(ESTJ);
        setWorstText("ESTJ / 순두부찌개");
        break;
      case "ISFJ":
        setTofu("두부김치");
        setImgpath(ISFJ);
        setBestImg(ESFP);
        setBestText("ESFP / 마파두부");
        setWorstImg(INFP);
        setWorstText("INFP / 순두부");
        break;
      case "ISFP":
        setTofu("흰두부");
        setImgpath(ISFP);
        setBestImg(ENFJ);
        setBestText("ENFJ / 푸주");
        setWorstImg(INFP);
        setWorstText("INFP / 순두부");
        break;
      case "ISTJ":
        setTofu("검은콩두부");
        setImgpath(ISTJ);
        setBestImg(ESTP);
        setBestText("ESTP / 두부강정");
        setWorstImg(INFJ);
        setWorstText("INFJ / 두부조림");
        break;
      case "ISTP":
        setTofu("두부전");
        setImgpath(ISTP);
        setBestImg(ESTJ);
        setBestText("ESTJ / 순두부찌개");
        setWorstImg(INFP);
        setWorstText("INFP / 순두부");
        break;
      case "ESFJ":
        setTofu("두유");
        setImgpath(ESFJ);
        setWorstImg(INFP);
        setWorstText("INFP / 순두부");
        setWorstImg(ISTP);
        setWorstText("ISTP / 두부전");
        break;
    }
  }, [mbti]);

  let resultSection;
  if (windowWidth < 768) {
    resultSection = (
      <>
        <div className='result-best-class'>
          <div
            className='result-best'
            style={{
              backgroundImage: `url(${bestImg})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          ></div>
          <div className='result-bestWorstText__best'>
            <h2>Best</h2>
            <h2>{bestText}</h2>
          </div>
        </div>
        <div className='result-worst-class'>
          <div
            className='result-worst'
            style={{
              backgroundImage: `url(${worstImg})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          ></div>
          <div className='result-bestWorstText__worst'>
            <h2>Worst</h2>
            <h2>{worstText}</h2>
          </div>
        </div>
      </>
    );
  } else {
    resultSection = (
      <>
        <div className='result-bestWorst'>
          <div
            className='result-best'
            style={{
              backgroundImage: `url(${bestImg})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          ></div>
          <div
            className='result-worst'
            style={{
              backgroundImage: `url(${worstImg})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          ></div>
        </div>
        <div className='result-bestWorstText'>
          <div className='result-bestWorstText__best'>
            <h2>Best</h2>
            <h2>{bestText}</h2>
          </div>
          <div className='result-bestWorstText__worst'>
            <h2>Worst</h2>
            <h2>{worstText}</h2>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className='result'>
        <h2 className='result-title'>
          당신과 어울리는 두부는
          <br />
          <span className='result-tofuType'>{tofu}</span> 입니다.
        </h2>
      </div>
      <div className='result-box'>
        <div className='result-box__analyze'>
          <h2>{mbti}</h2>
          <div
            className='result-box__analyze--tofuTypeImg'
            style={{
              backgroundImage: `url(${imgpath})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          ></div>
          <div
            className='result-box__analyze--analysisTable'
            style={{ color: "black" }}
          >
            {mbtidetails[mbti]}
          </div>
        </div>
      </div>
      <h1>추천 상품</h1>
      {resultSection}
      <ResultpageButton />
    </>
  );
}
