import React from "react";
import * as S from "./style";

const SoftwarePage = () => {
  return (
    <>
    <S.MainWrapper>
      <S.Imgwrapper>
      <img src="../result-img/software.png" id="img1"/>

      <S.Top>60% 웹솔루션과</S.Top>
      <S.Mid>30% 소프트웨어과</S.Mid>
      <S.Bottom>10% 디자인과</S.Bottom>

      <S.Introduce>
        송은원 백서연 최지우 김예슬 이다혜
      </S.Introduce>

      <S.Home src="../result-img/home-white.png" id="img2"/>
      <S.ShareBtn src="../result-img/share-white.png" id="img3"/>
      </S.Imgwrapper>
    </S.MainWrapper>
    </>
  );
};

export default SoftwarePage;
