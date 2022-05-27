import React from "react";
import * as S from "./style";

const list = [
  {
    key: 1,
    content: "대충 내용인 것 같다.",
  },
  {
    key: 2,
    content: "이것도 내용인 것 같다.",
  },
  {
    key: 3,
    content: "아마 이것도 뭔가 질문이지 않을까?",
  },
  {
    key: 4,
    content: "음.. 하나의 질문이 될 것 같다",
  },
];

const QnaItem = () => {
  // const [qnaValue, setQnaValue] = useState<any>();
  return (
    <S.QnaWrapper>
      <S.QnaContainer>{/* <div id="content">{content}</div> */}</S.QnaContainer>
    </S.QnaWrapper>
  );
};

export default QnaItem;
