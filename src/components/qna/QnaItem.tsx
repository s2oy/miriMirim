import React from "react";
import * as S from "./style";
// @ts-ignore
import qna from "../../db/QnaList";

const QnaItem = ({qna}: any) => {
  console.log(qna);
  return (
    <S.QnaWrapper>
      <S.QnaContainer>{qna}</S.QnaContainer>
    </S.QnaWrapper>
  );
};

export default QnaItem;
