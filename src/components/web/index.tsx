import React from "react";
import {Link} from "react-router-dom";
import * as S from "./style";

const WebPage = () => {
  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);

      alert("복사 성공!");
    } catch (error) {
      alert("복사 실패!");
    }
  };

  return (
    <>
      <S.MainWrapper>
        <S.Img src="../result-img/web.png" id="img1" />
        <S.Toppercent>60% 웹솔루션과</S.Toppercent>
        <S.Midpercent>30% 소프트웨어과</S.Midpercent>
        <S.Bottompercent>10% 디자인과</S.Bottompercent>
        <S.Developer1>송은원</S.Developer1>
        <S.Developer2>백서연</S.Developer2>
        <S.Developer3>최지우</S.Developer3>
        <S.Developer4>김예슬</S.Developer4>
        <S.Developer5>이다혜</S.Developer5>

        <S.Share style={{cursor: "pointer"}}>
          <img src="../result-img/share-white.png" id="img3" />
        </S.Share>

        <S.LinkBtn
          onClick={() => handleCopyClipBoard("복사된 텍스트")}
          style={{cursor: "pointer"}}
        >
          <img src="../result-img/link-white.png" id="img4" />
        </S.LinkBtn>

        <Link to="/" style={{textDecoration: "none"}}>
          <S.Home style={{cursor: "pointer"}}>
            <img src="../result-img/home-white.png" id="img2" />
          </S.Home>
        </Link>
      </S.MainWrapper>
    </>
  );
};

export default WebPage;
