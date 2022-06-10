import React from "react";
import * as S from "./style";
import {MainContainer} from "../main/style";
import MainWhiteBox from "../main/items/MainWhiteBox";
import {Link} from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <S.MainWrapper>
        <MainContainer>
          {/* <MainWhiteBox> */}
          <S.ModalContainer>
            <h2>이런! 길을 잃으셨군요</h2>
            <p>
              원활한 테스트 진행을 위해서 <br />
              아래 버튼을 눌러 테스트로 이동해주세요.
            </p>
            <Link to="/" style={{textDecoration: "none"}}>
              <div className="btn_start">테스트로 돌아가기</div>
            </Link>
          </S.ModalContainer>
          {/* </MainWhiteBox> */}
        </MainContainer>
      </S.MainWrapper>
    </>
  );
};

export default NotFound;
