import React, {useState} from "react";
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

  console.log(qnaData);

  return (
    <S.QnaWrapper>
      <MainContainer>
        <MainWhiteBox></MainWhiteBox>
        <S.TitleContainer>
          {qnaData.map((q: any, id: number) => (
            <S.Title key={q.id}>{qnaData[0].q}</S.Title>
          ))}

          <QnaItem {...qnaData} />
        </S.TitleContainer>
      </MainContainer>
    </S.QnaWrapper>
  );
};
export default QnaPage;
