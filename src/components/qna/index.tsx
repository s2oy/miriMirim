import React, {MouseEvent, useState, useRef, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import * as S from "./style";
import {MainContainer} from "../main/style";
import MainWhiteBox from "../main/items/MainWhiteBox";
import QnaItem from "../qna/QnaItem";
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
    count[0]++;
    console.log(count[0]);
  };

  const nextSlideSec2 = () => {
    //다음 질문으로 넘어감
    setUserClass(userClass + qnaData[q].a[1].value);
    setQ(q + 1);
    setCurrentSlide(currentSlide + 1);
    count[1]++;
    console.log(count[1]);
  };

  const nextSlideSec3 = (e: any) => {
    //다음 질문으로 넘어감
    setUserClass(userClass + qnaData[q].a[2].value);
    setQ(q + 1);
    setCurrentSlide(currentSlide + 1);
    count[2]++;
    console.log(count[2]);
  };

  const handleMoveToResult = () => {
    //1. 값을 일단 비교해 그리고 count[0]은 솦과로 변경..이런식으로 배열 값 변경 해줘야함.
    //근데 그러면 오름차순 정렬은 어떻게 할건데?
    // 일단 let count[2] = '디자인과' 이렇게 정렬하고 넣자..........근데이게되긴함?
    // setLoading(true);

    //0번째 값이 12개가 되면 솦과

    if (count[0] >= count[1]) {
      if (count[0] > count[2]) {
        navigate("/soft");
      }
    }

    if (count[0] == count[1]) {
      navigate("/soft");
    }

    if (count[1] > count[2]) {
      if (count[1] > count[0]) {
        if (count[1] == 12) {
          navigate("/web");
        }
      }
    }

    if (count[2] == count[0]) {
      navigate("/web");
    }

    // 디자인과보다 솦과가
    if (count[2] > count[1]) {
      if (count[2] > count[0]) {
        navigate("/design");
      }
    }

    if (count[2] == count[1]) {
      navigate("/design");
    }
  };

  //   if (count[2] > count[0]) {
  //     if (count[2] > count[1]) {
  //       navigate("/design");
  //     }
  //   }

  //   // 0번과 1번이 같을 때 어떻게 할지
  //   if (count[0] == count[1]) {
  //     navigate("/soft");
  //   }

  //   // 1번과 2번이 같을 때 어떻게 할지
  //   if (count[1] == count[2]) {
  //     navigate("/design");
  //   }

  //   // 0번과 2번이 같을 때 어떻게 할지
  //   if (count[0] == count[2]) {
  //     navigate("/web");
  //   }

  //   // 투표 개수가 모두 같을 때 어떻게 해결할지
  //   if (count[0] == count[1] && count[0] == count[2] && count[1] == count[2]) {
  //     navigate("/web");
  //   }
  // };

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
