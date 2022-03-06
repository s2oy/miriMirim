import React from "react";
import * as S from "./style";
import {MainContainer} from "../main/style";
import MainWhiteBox from "../main/items/MainWhiteBox";

const QnaPage = () => {
  return (
    <S.QnaWrapper>
      <MainContainer>
        <MainWhiteBox></MainWhiteBox>
      </MainContainer>
    </S.QnaWrapper>
  );
};
export default QnaPage;
