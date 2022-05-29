import React, {useState} from "react";
import * as S from "./style";
import {MainContainer} from "../main/style";
import MainWhiteBox from "../main/items/MainWhiteBox";
import QnaItem from "../qna/QnaItem";
// @ts-ignore
import qnaData from "../db/qnaList";

const QnaPage = () => {
  const [qna, setQna]: any = useState([]);
  return (
    <S.QnaWrapper>
      <MainContainer>
        <MainWhiteBox></MainWhiteBox>
        <S.Title>{qnaData[0].q}</S.Title>
        <QnaItem qna={qnaData}></QnaItem>
      </MainContainer>
    </S.QnaWrapper>
  );
};
export default QnaPage;
