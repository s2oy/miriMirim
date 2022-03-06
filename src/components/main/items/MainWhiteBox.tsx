import React, {useState} from "react";
import * as S from "./style";
import Modal from "./Modal";

// interface Props {
//   item: any;
// }

const MainWhiteBox = (item: any) => {
  // if (item === undefined) return <></>;
  const [sound, setSound] = useState<boolean>(item.sound);

  return (
    <S.WhiteBoxContainer>
      <S.BoxContainer>
        <S.Header>
          <div className="btn_red btn"></div>
          <div className="btn_yellow btn"></div>
          <div className="btn_green btn"></div>
          <span>mirim</span>
        </S.Header>

        <img
          src={sound ? "/assets/mute.svg" : "/assets/volume.svg"}
          onClick={() => setSound(!sound)}
          alt=""
        />
      </S.BoxContainer>
    </S.WhiteBoxContainer>
  );
};

export default MainWhiteBox;
