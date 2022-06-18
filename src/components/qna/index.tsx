import React, {MouseEvent, useState} from "react";
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

const QnaPage = () => {
  const [qna, setQna]: any = useState([]);
  const [q, setQ] = useState<number>(0);
  const [userAns, setUserAns] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleOnSelect = (e: MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;
    setUserAns(prev => [...prev, value]);
    setQ(prev => prev + 1);
  };

  const handleMoveToResult = () => {
    // 클릭한 버튼의 해당 value 값을 높이기
    // 3가지   비교를 어떻게 할 것인지?
    //if ~과의 수가 제일 많으면 location.href = '과경로' 뒤로가지지않게하려면 location.replace로 해야함
    //   const result = userAns.reduce(
    //     (
    //       acc: {
    //         [index: string]: any;
    //       },
    //       ans,
    //       index
    //     ) => {
    //       acc[ans] = ++acc[ans];
    //     },
    //     {software: 0, web: 0, design: 0, result: ""}
    //   );
    navigate("/design");
  };

  if (!qnaData[q]) return <>{handleMoveToResult()}</>;
  return (
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
          <S.QnaItem onClick={handleOnSelect} value={qnaData[q].a[2].value}>
            {qnaData[q].a[0].answer}
          </S.QnaItem>
          <S.QnaItem onClick={handleOnSelect} value={qnaData[q].a[1].value}>
            {qnaData[q].a[1].answer}
          </S.QnaItem>
          <S.QnaItem onClick={handleOnSelect} value={qnaData[q].a[2].value}>
            {qnaData[q].a[2].answer}
          </S.QnaItem>
        </S.QnaItemContainer>
      </MainContainer>
    </S.QnaWrapper>
  );
};
export default QnaPage;
