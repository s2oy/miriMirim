import {atom} from "recoil";

export const qnaData = [
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
  {
    key: 5,
    content: "5번째 질문입니다.",
  },
  {
    key: 6,
    content: "6번째 질문 입니다.",
  },
  {
    key: 7,
    content: "7번째 질문 입니다.",
  },
  {
    key: 8,
    content: "8번째 질문 입니다.",
  },
];

export const modalOpenState = atom<boolean>({
  key: "modalOpenState",
  default: false,
});
