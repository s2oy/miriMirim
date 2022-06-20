import React, {MouseEvent, useState, useRef, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import * as S from "./style";
import {MainContainer} from "../main/style";
import MainWhiteBox from "../main/items/MainWhiteBox";
import QnaItem from "../qna/QnaItem";
import LoadingPage from "../loading/Loading";
// @ts-ignore
import qnaData from "../../db/qnaList";
import {off} from "process";

// export interface qnaProps {
//   data: {
//       id: number;
//       q: string;
//       a: object;
//       answer: string;
//       type: string;
//     }
// }

export let count = [0, 0, 0];

const QnaPage = () => {
  // const [qna, setQna]: any = useState([]);
  const [q, setQ] = useState<number>(0);
  const [userClass, setUserClass] = useState<string[]>([]); //유저 과 정보를 담아놓은 state
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const slideRef = useRef(null); //useRef 특정 노드에 접근해서 값을 얻어올 수 있다.
  const [loading, setLoading] = useState(false);
  const TOTAL_SLIDES = 12;

  const [soft, setSoft] = useState<number>(0);
  const [web, setWeb] = useState<number>(0);
  const [design, setDesign] = useState<number>(0);

  // const handleOnSelect = (e: MouseEvent<HTMLButtonElement>) => {
  //   const value = e.currentTarget.value;
  //   setUserClass(prev => [...prev, value]);
  //   setQ(prev => prev + 1);
  // };

  const nextSlideSec1 = () => {
    //다음 질문으로 넘어감
    setUserClass(userClass + qnaData[q].a[0].value);
    setQ(q + 1);
    setCurrentSlide(currentSlide + 1);
    setSoft(soft + 1);
    console.log(soft);
  };

  const nextSlideSec2 = () => {
    //다음 질문으로 넘어감
    setUserClass(userClass + qnaData[q].a[1].value);
    setQ(q + 1);
    setCurrentSlide(currentSlide + 1);
    setWeb(web + 1);
    console.log(web);
  };

  const nextSlideSec3 = (e: any) => {
    //다음 질문으로 넘어감
    setUserClass(userClass + qnaData[q].a[2].value);
    setQ(q + 1);
    setCurrentSlide(currentSlide + 1);
    setDesign(design + 1);
    console.log(design);
  };

  const handleMoveToResult = () => {
    //1. 값을 일단 비교해 그리고 count[0]은 솦과로 변경..이런식으로 배열 값 변경 해줘야함.
    //근데 그러면 오름차순 정렬은 어떻게 할건데?
    // 일단 let count[2] = '디자인과' 이렇게 정렬하고 넣자..........근데이게되긴함?
    // setLoading(true);

    //확인
    // 소프트웨어과 값이 가장 많을 때 =>  확인
    // 웹솔 값이 가장 많을 때 => 확인
    // 디자인 값이 가장 많을 때 => 확인
    // 솦과만 눌렀을 때 => 디자인 나옴 5번으로 가세요 => 해결
    // 웹솔만 눌렀을 때 => 확인
    // 디자인만 눌렀을 때 => 확인 디자인과의 절규 나옴
    // 솦과랑 디자인이랑 6 6개일 때 => 확인
    // 솦과랑 웹솔이랑 6 6 일 때 => 확인
    // 디자인이랑 웹이랑 6 6일때 => 확인
    // 솦4 웹4 디4 어떻게 할거임 => 웹으로 보내버림 여튼 확인함

    // // 소프트웨어과의 값이 12 => 소프트웨어 이동
    if (soft == web && soft == design && web == design) {
      setTimeout(() => {
        navigate("/web");
      }, 3000);
      return <LoadingPage />;
    }

    // 소프트웨어과랑 디자인과랑 동표 => 웹솔루션 이동
    if (soft == design) {
      if (web == 0) {
        setTimeout(() => {
          navigate("/web");
        }, 3000);
        return <LoadingPage />;
      }
    }
    // 소프트웨어과랑 웹솔루션과랑 동표 => 소프트웨어 이동
    if (soft == web) {
      if (design >= 0 && design < 2) {
        setTimeout(() => {
          navigate("/soft");
        }, 3000);
        return <LoadingPage />;
      }
    }
    // 웹솔루션과랑 디자인과랑 동표 => 디자인 이동
    if (web == design) {
      if (soft >= 0 && soft < 2) {
        setTimeout(() => {
          navigate("/design");
        }, 3000);
        return <LoadingPage />;
      }
    }
    // 소프트웨어과가 웹솔보다 크면 => 소프트웨어 이동
    if (soft > web) {
      // 소프트웨어가 디자인보다 크면 => 소프트웨어 이동
      if (soft > design) {
        setTimeout(() => {
          navigate("/soft");
        }, 3000);
        return <LoadingPage />;
      }
    }

    // 웹솔루션이 소프트웨어보다 크면 => 웹솔루션 이동
    if (web > soft) {
      // 웹솔루션이 디자인보다 크면 => 웹솔루션 이동
      if (web > design) {
        setTimeout(() => {
          navigate("/web");
        }, 3000);
        return <LoadingPage />;
      }
    }

    // 디자인이 소프트웨어보다 크면 => 디자인 이동
    if (design > soft) {
      // 디자인이 웹솔루션보다 크면 => 디자인 이동
      if (design > web) {
        setTimeout(() => {
          navigate("/design");
        }, 3000);
        return <LoadingPage />;
      }
    }
    return 0;
  };

  if (!qnaData[q]) return <>{handleMoveToResult()}</>;

  return (
    <>
      <S.QnaWrapper>
        <MainContainer>
          <MainWhiteBox></MainWhiteBox>
          <S.CountWrapper
            style={
              qnaData[q].id <= 9 ? {marginLeft: "73.5%"} : {marginLeft: "72.8%"}
            }
          >
            <span className="count_q">{qnaData[q].id}</span>
            <span className="total_q"> /{TOTAL_SLIDES}</span>
          </S.CountWrapper>
          <S.TitleContainer>
            {/* {qnaData.map((q: any, id: number) => (
            <S.Title key={q.id}>{qnaData[0].q}</S.Title>
          ))} */}

            <S.Title>{qnaData[q].q}</S.Title>
          </S.TitleContainer>
          <S.QnaItemContainer>
            <S.QnaItem onClick={nextSlideSec1} value={qnaData[q].a[0].value}>
              {qnaData[q].a[0].answer}
            </S.QnaItem>
            <S.QnaItem onClick={nextSlideSec2} value={qnaData[q].a[1].value}>
              {qnaData[q].a[1].answer}
            </S.QnaItem>
            <S.QnaItem onClick={nextSlideSec3} value={qnaData[q].a[2].value}>
              {qnaData[q].a[2].answer}
            </S.QnaItem>
          </S.QnaItemContainer>
        </MainContainer>
      </S.QnaWrapper>
    </>
  );
};

export default QnaPage;
