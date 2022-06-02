import React, {useState} from "react";
import {Link} from "react-router-dom";
import qna from "../../qna/index";
import * as S from "./style";

const Modal = () => {
  return (
    <S.ModalContainer>
      <h2>미림여자정보과학고등학교 과별 성향 테스트</h2>
      <p>
        이 테스트는 전문적으로 만들어진 것이 아니므로 <br />
        본인의 의지가 확고하시다면 그 과로 선택하시기 바랍니다. <br />
        재미로만 참고해주세요.
      </p>
      <Link to="/qna" style={{textDecoration: "none"}}>
        <div className="btn_start">테스트 시작하기</div>
      </Link>
    </S.ModalContainer>
  );
};

export default Modal;
