import React from "react";
import * as S from "./style";
import MainWhiteBox from "./items/MainWhiteBox";
import StartBox from "./items/StartBox";

const MainPage = () => {
  return (
    <S.MainWrapper>
      <S.MainContainer>
        <MainWhiteBox />
        <StartBox />
      </S.MainContainer>
    </S.MainWrapper>
  );
};
export default MainPage;
