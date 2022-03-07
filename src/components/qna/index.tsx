import React from "react";
import * as S from "./style";
import {MainContainer} from "../main/style";
import MainWhiteBox from "../main/items/MainWhiteBox";
import QnaItem from "../qna/QnaItem";

const QnaPage = () => {
  return (
    <S.QnaWrapper>
      <MainContainer>
        <MainWhiteBox></MainWhiteBox>
        <QnaItem></QnaItem>
      </MainContainer>
    </S.QnaWrapper>
  );
};
export default QnaPage;
