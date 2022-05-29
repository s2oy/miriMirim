import React from "react";
import * as S from "./style";
// @ts-ignore
import qnaData from "../db/qnaList";

const QnaItem = () => {
  console.log(qnaData);
  console.log(qnaData);
  return (
    <S.QnaWrapper>
      <S.QnaContainer></S.QnaContainer>
    </S.QnaWrapper>
  );
};

export default QnaItem;
