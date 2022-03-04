import React, {useState} from "react";
import * as S from "./style";

interface Props {
  item: any;
}

const MainWhiteBox = ({item}: Props) => {
  const [sound, setSound] = useState<boolean>(item.sound);

  return (
    <S.WhiteBoxContainer>
      <S.Header>
        <div className="btn_red btn"></div>
        <div className="btn_yellow btn"></div>
        <div className="btn_green btn"></div>
        <span>mirim</span>
      </S.Header>

      <img
        src={sound ? "/assets/sound.svg" : "/assets/mute.svg"}
        onClick={() => setSound(!sound)}
        alt=""
      />

      <S.Modal>
        <h2>미림여자정보과학고등학교 과별 성향 테스트</h2>
        <p>
          이 테스트는 전문적으로 만들어진 것이 아니므로 <br />
          본인의 의지가 확고하시다면 그 과로 선택하시기 바랍니다. <br />
          재미로만 참고해주세요.
        </p>
        <div className="btn_start">테스트 시작하기</div>
      </S.Modal>
    </S.WhiteBoxContainer>
  );
};

export default MainWhiteBox;
