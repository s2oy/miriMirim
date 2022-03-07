import React from "react";
import * as S from "./style";

const QnaItem = () => {
  return (
    <S.QnaWrapper>
      <S.QnaContainer>
        <div id="content">
          <span>
            선택지를 선택하세요. <br /> 클릭하면 넘어가게하기
          </span>
        </div>
      </S.QnaContainer>
    </S.QnaWrapper>
  );
};

export default QnaItem;
