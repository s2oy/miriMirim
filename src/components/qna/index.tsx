import React, {MouseEvent, useState, useRef, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import * as S from "./style";
import {MainContainer} from "../main/style";
import MainWhiteBox from "../main/items/MainWhiteBox";
import QnaItem from "../qna/QnaItem";
// @ts-ignore
import qnaData from "../../db/qnaList";

// export interface qnaProps {
//   data: {
//       id: number;
//       q: string;
//       a: object;
//       answer: string;
//       type: string;
//     }
// }

export let num1 = 0;
export let num2 = 0;
export let num3 = 0;

const QnaPage = () => {
  // const [qna, setQna]: any = useState([]);
  const [q, setQ] = useState<number>(0);
  const [userClass, setUserClass] = useState<string[]>([]); //유저 과 정보를 담아놓은 state
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const slideRef = useRef(null); //useRef 특정 노드에 접근해서 값을 얻어올 수 있다.
  const [loading, setLoading] = useState(false);
  const TOTAL_SLIDES = 12;

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
    num1++;
    console.log(num1);
  };

  const nextSlideSec2 = () => {
    //다음 질문으로 넘어감
    setUserClass(userClass + qnaData[q].a[1].value);
    setQ(q + 1);
    setCurrentSlide(currentSlide + 1);
    num2++;
    console.log(num2);
  };

  const nextSlideSec3 = () => {
    //다음 질문으로 넘어감
    setUserClass(userClass + qnaData[q].a[2].value);
    setQ(q + 1);
    setCurrentSlide(currentSlide + 1);
    num3++;
    console.log(num3);
  };

  const handleMoveToResult = () => {
    // setLoading(true);
    if (num1 >= num2) {
      if (num1 > num3) {
        navigate("/soft");
      }
    }

    if (num2 > num1) {
      if (num2 >= num3) {
        navigate("/web");
      }
    }

    if (num3 >= num1) {
      if (num3 > num2) {
        navigate("/design");
      }
    }
  };

  //   setTimeout(() => {
  //     const examResult = result.join("");
  //     // // navigate(`/result/${examResult}`);
  //     navigate(`/design`);
  //   }, 3000);
  // };

  // 클릭한 버튼의 해당 value 값을 높이기 (증감 연산자 사용해서 value값 높이기)
  // 3가지   비교를 어떻게 할 것인지?
  //if ~과의 수가 제일 많으면 location.href = '과경로' 뒤로가지지않게하려면 location.replace로 해야함
  //index 생략 가능) 현재 배열요소의 index? (번호같은개념인듯)
  // const  = userAns.reduce((acc, index) => {});
  // 중첩 if사용해서 비교하기

  // qnaData[q].a = qnaData[q].a++;

  // if (qnaData[q].a[0].value.length > qnaData[q].a[1].value.length) {
  //   navigate("/soft");
  // } else {
  //   navigate("/design");
  // }

  if (!qnaData[q]) return <>{handleMoveToResult()}</>;
  return (
    <>
      {/* {!loading && ( */}
      <S.QnaWrapper>
        <MainContainer>
          <MainWhiteBox></MainWhiteBox>
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
      {/* )}
      {loading && (
        <>
          <div>로딩중</div>
        </>
      )} */}
    </>
  );
};

export default QnaPage;
