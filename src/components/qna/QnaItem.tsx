import React, {useState} from "react";
import * as S from "./style";
// import {qnaProps} from "./index";
// @ts-ignore

const QnaItem = (qnaData: any) => {
  const [q, setQ] = useState<number>(0);
  const [a, seta] = useState<number>(0);
  console.log(qnaData[0]);

  return (
    <S.QnaWrapper>
      <S.QnaContainer>{qnaData[q].a[a].answer}</S.QnaContainer>
    </S.QnaWrapper>
  );
};

export default QnaItem;
