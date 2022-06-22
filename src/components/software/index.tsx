import React from "react";
import {Link} from "react-router-dom";
import * as S from "./style";
import {useEffect} from "react";
import {ToastSuccess, ToastError, Toast} from "../../lib/hook/toastHook";

declare global {
  interface Window {
    Kakao: any;
  }
}

const SoftwarePage = () => {
  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      ToastSuccess("복사 성공!");
    } catch (error) {
      ToastError("복사 실패!");
    }
  };

  useEffect(() => {
    console.log("kakao init");
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
      console.log(window.Kakao.isInitialized());
    }
  }, []);

  const kakaoShare = () => {
    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "미리미림",
        description: "예비 미림인을 위한 과 적성 테스트",
        imageUrl: `${process.env.PUBLIC_URL}/result-img/main.jpeg`,
        link: {
          mobileWebUrl: "https://mirimirim-936ae.web.app",
          webUrl: "https://mirimirim-936ae.web.app",
        },
      },
      buttons: [
        {
          title: "웹으로 이동",
          link: {
            mobileWebUrl: "https://mirimirim-936ae.web.app",
            webUrl: "https://mirimirim-936ae.web.app",
          },
        },
      ],
    });
  };

  return (
    <>
      <S.MainWrapper>
        <S.Imgwrapper>
          <img src="../result-img/software.png" id="img1" />

          <S.Introduce>송은원 백서연 최지우 김예슬 이다혜</S.Introduce>

          <Link to="/">
            <S.Home style={{cursor: "pointer"}}>
              <img src="../result-img/home-white.png" id="img2" />
            </S.Home>
          </Link>

          <S.ShareBtn onClick={kakaoShare} style={{cursor: "pointer"}}>
            <img src="../result-img/share-white.png" id="img3" />
          </S.ShareBtn>

          <S.LinkBtn
            onClick={() => handleCopyClipBoard("복사된 텍스트")}
            style={{cursor: "pointer"}}
          >
            <img src="../result-img/link-white.png" id="img4" />
          </S.LinkBtn>
        </S.Imgwrapper>
      </S.MainWrapper>
    </>
  );
};

export default SoftwarePage;
