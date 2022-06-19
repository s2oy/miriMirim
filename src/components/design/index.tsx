import React from "react";
import {Link} from "react-router-dom";
import * as S from "./style";

const DesignPage = () => {
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
        <S.Imgwrapper>
          <img src="../result-img/design.png" id="img1" />

          <S.Top>60% 웹솔루션과</S.Top>
          <S.Mid>30% 소프트웨어과</S.Mid>
          <S.Bottom>10% 디자인과</S.Bottom>

          <S.Introduce>송은원 백서연 최지우 김예슬 이다혜</S.Introduce>

          <Link to="/" style={{textDecoration: "none"}}>
            <S.Home style={{cursor: "pointer"}}>
              <img src="../result-img/home-black.png" id="img2" />
            </S.Home>
          </Link>

          <S.ShareBtn style={{cursor: "pointer"}}>
            <img src="../result-img/share-black.png" id="img3" />
          </S.ShareBtn>

          <S.LinkBtn
            onClick={() => handleCopyClipBoard("복사된 텍스트")}
            style={{cursor: "pointer"}}
          >
            <img src="../result-img/link-black.png" id="img4" />
          </S.LinkBtn>
        </S.Imgwrapper>
      </S.MainWrapper>
    </>
  );
};

export default DesignPage;
