import React from "react";
import * as S from "./style";

const MainWhiteBox = () => {
  return (
    <S.WhiteBoxContainer>
      <S.Header>
        <div className="btn_red btn"></div>
        <div className="btn_yellow btn"></div>
        <div className="btn_green btn"></div>
      </S.Header>
    </S.WhiteBoxContainer>
  );
};

export default MainWhiteBox;
