import React from "react";
import * as S from "./style";
import MainWhiteBox from "./items/MainWhiteBox";
import Modal from "./items/Modal";

const MainPage = () => {
  return (
    <S.MainWrapper>
      <S.MainContainer>
        <MainWhiteBox />
        <Modal />
      </S.MainContainer>
    </S.MainWrapper>
  );
};
export default MainPage;
