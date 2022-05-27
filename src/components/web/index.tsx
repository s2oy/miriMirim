import React from "react";
import * as S from "./style";

const WebPage = () => {
  return (
    <>
    <S.MainWrapper>
      <S.Img src="../result-img/web.png" id="img1"/>
      <S.Toppercent>
        60% 웹솔루션과
      </S.Toppercent>
      <S.Midpercent>
        30% 소프트웨어과
      </S.Midpercent>
      <S.Bottompercent>
        10% 디자인과
      </S.Bottompercent>
      <S.Developer1>
        송은원
      </S.Developer1>
      <S.Developer2>
        백서연
      </S.Developer2>
      <S.Developer3>
        최지우
      </S.Developer3>
      <S.Developer4>
        김예슬
      </S.Developer4>
      <S.Developer5>
        이다혜
      </S.Developer5>
      <S.Home src="../result-img/home-white.png" id="img2"/>
      <S.Share src="../result-img/share-white.png" id="img3"/>
    </S.MainWrapper>
    </>
  );
};

export default WebPage;
