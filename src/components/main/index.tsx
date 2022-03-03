import React from "react";
import * as S from "./style";
import MainWhiteBox from "./items/MainWhiteBox";

const MainPage = () => {
  return (
    <S.MainWrapper>
      <S.MainContainer>
        <MainWhiteBox />
      </S.MainContainer>
    </S.MainWrapper>
  );
};

export default MainPage;
