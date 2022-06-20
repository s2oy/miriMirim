import React from "react";
import {Link, useLocation} from "react-router-dom";
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

  // const {state}: any = useLocation();
  // console.log(state[0]);

  return (
    <>
      <S.MainWrapper>
        <S.Imgwrapper>
          <img src="../result-img/design.png" id="img1" />

          <S.Top></S.Top>
          <S.Mid></S.Mid>
          <S.Bottom></S.Bottom>

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
