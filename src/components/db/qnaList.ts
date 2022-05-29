interface QnaData {
  q: string;
  a: {answer: string; type: string}[];
}

export const QnaData: QnaData[] = [
  {
    q: "1. PPT를 만들때 나는 어디에 속할까?",
    a: [
      {answer: "이미지랑 텍스트를 잘 보이게 배치한다.", type: "software"},
      {
        answer: "이미지랑 텍스트를 가독성 있게 정렬한다.",
        type: "websolution",
      },
      {
        answer: "이미지랑 텍스트에 선, 그림자 등을 넣어 꾸며준다.",
        type: "design",
      },
    ],
  },
  {
    q: "2. 웹사이트를 사용할 때 가장 짜증나는 상황은?",
    a: [
      {answer: "쓸데없는 기능들만 나열해 두었을 때", type: "software"},
      {answer: "가운데 정렬이 맞지 않을 때", type: "websolution"},
      {answer: "색 조합이 맞지 않을 때", type: "design"},
    ],
  },
  {
    q: "3. 문제점이 발생했을 때 나의 행동은?",
    a: [
      {
        answer: "문제에 대해 깊게 파고들어 원인을 찾고 해결한다.",
        type: "software",
      },
      {
        answer: "문제를 파악한 후 빠르게 해결방안부터 찾는다.",
        type: "websolution",
      },
      {
        answer: "문제를 남들과 다른 해결방안을 찾으려고 한다.",
        type: "design",
      },
    ],
  },
  {
    q: "4. 일을 할 때 나만의 스타일은?",
    a: [
      {answer: "한가지 일에만 몰두한다.", type: "software"},
      {answer: "여러가지 일을 동시에 한다.", type: "websolution"},
      {
        answer: "일을 할 때 글씨 크기, 자간, 간격등에 공을 많이 들인다.",
        type: "design",
      },
    ],
  },
  {
    q: "6. 프로그램을 만들게 된다면 가장 신경쓸 것 같은 것은?",
    a: [
      {answer: "프로그램의 기능과 성능", type: "software"},
      {answer: "보여지는 화면에 대한 가독성", type: "websolution"},
      {answer: "프로그램의 디자인", type: "design"},
    ],
  },
  {
    q: "7. 나란 사람은?",
    a: [
      {answer: "멘탈이 쎄고 체력이 좋다.", type: "software"},
      {answer: "멀티가 잘 되고 자유롭다.", type: "websolution"},
      {answer: "꼼꼼하고 관찰력이 좋다.", type: "design"},
    ],
  },
  {
    q: "8. 더 중요하다고 생각하는 것은",
    a: [
      {answer: "수상 경력", type: "software"},
      {answer: "인간 관계", type: "websolution"},
      {answer: "학업 성적", type: "design"},
    ],
  },
  {
    q: "9. 내가 원하는 반의 분위기는?",
    a: [
      {answer: "끈기있고 학업적인 분위기", type: "software"},
      {answer: "활발하고 자유로운 분위기", type: "websolution"},
      {answer: "침착하고 차분한 분위기", type: "design"},
    ],
  },
  {
    q: "10. 내가 잘하는 과목은?",
    a: [
      {answer: "혼자서 문제를 풀어가는 수학", type: "software"},
      {answer: "뭐든지 다같이 생각하고 활동하는 체육", type: "websolution"},
      {answer: "나만의 스타일을 표현하는 미술", type: "design"},
    ],
  },
  {
    q: "11. 내가 책을 고를 때 가장 먼저 보는 것은?",
    a: [
      {answer: "책의 구성을 알 수 있는 목차", type: "software"},
      {answer: "책의 내용을 알 수 있는 줄거리", type: "websolution"},
      {answer: "책 표지 또는 캐릭터 디자인", type: "design"},
    ],
  },
  {
    q: "12. 가장 싫어하는 유형의 사람은?",
    a: [
      {answer: "끈기가 없고 이해력이 낮은 사람", type: "software"},
      {
        answer: "자신의 의견을 말하지 못하고 분위기 파악을 못하는 사람",
        type: "websolution",
      },
      {answer: "계획을 실천하지 않고 일을 미루는 사람", type: "design"},
    ],
  },
];
