import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  // width: 100%;
  // height: 200px;
  position: relative;
  background-color: #616161;
  min-width: 100vw;
  min-height: 100vw;
  text-align: center;
`;

export const Top = styled.span`
  position: absolute;
  left: 70%;
  top: 30%;
  transform: translate(-40%, -70%);
  color: black;
  font-size: 15pt;
`;
export const Mid = styled.span`
  position: absolute;
  left: 65%;
  top: 38%;
  transform: translate(-30%, -100%);
  color: black;
  font-size: 15pt;
`;
export const Bottom = styled.span`
  position: absolute;
  left: 60%;
  top: 45%;
  transform: translate(-40%, -70%);
  color: black;
  font-size: 15pt;
`;
export const Introduce = styled.span`
  position: absolute;
  left: 55%;
  top: 97%;
  color: black;
  font-size: 13pt;
`;
export const Home = styled.img`
  margin: auto 0;
  position: absolute;
  left: 72.3%;
  top: 97%;
`;

export const ShareBtn = styled.img`
  margin: auto 0;
  position: absolute;
  left: 74.5%;
  top: 96.6%;
`;

export const Imgwrapper = styled.div`
  #img1 {
    width: 1000px;
    height: auto;
  }

  #img2 {
    width: 20px;
    height: 20px;
  }
  #img3 {
    width: 22px;
    height: 28px;
  }
`;
