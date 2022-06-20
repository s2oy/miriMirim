import React from "react";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import * as S from "./style";

declare global {
  interface Window {
    Kakao: any;
  }
}

const WebPage = () => {
  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);

      alert("복사 성공!");
    } catch (error) {
      alert("복사 실패!");
    }
  };

  // const kakao = (window as any).kakao;

  useEffect(() => {
    window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
    console.log(window.Kakao.isInitialized());
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
        <S.Img src="../result-img/web.png" id="img1" />
        <S.Toppercent>60% 웹솔루션과</S.Toppercent>
        <S.Midpercent>30% 소프트웨어과</S.Midpercent>
        <S.Bottompercent>10% 디자인과</S.Bottompercent>
        <S.Developer1>송은원</S.Developer1>
        <S.Developer2>백서연</S.Developer2>
        <S.Developer3>최지우</S.Developer3>
        <S.Developer4>김예슬</S.Developer4>
        <S.Developer5>이다혜</S.Developer5>

        <S.Share onClick={kakaoShare} style={{cursor: "pointer"}}>
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
