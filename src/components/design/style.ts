import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  // width: 100%;
  // height: 200px;
  position: relative;
  background-color: #616161;
  min-width: 100vp;
  min-height: 100vp;
  text-align: center;
`;

export const Top = styled.span`
  position: absolute;
  left: 63%;
  top: 29.5%;
  transform: translate(-30%, -70%);
  color: black;
  font-size: 15pt;
`;
export const Mid = styled.span`
  position: absolute;
  left: 60%;
  top: 38%;
  transform: translate(-30%, -100%);
  color: black;
  font-size: 15pt;
`;
export const Bottom = styled.span`
  position: absolute;
  left: 57.5%;
  top: 45%;
  transform: translate(-40%, -70%);
  color: black;
  font-size: 15pt;
`;
export const Introduce = styled.span`
  position: absolute;
  left: 57.4%;
  top: 97%;
  color: black;
  font-size: 13pt;
`;
export const Home = styled.button`
  margin: auto 0;
  position: absolute;
  left: 74%;
  top: 97.3%;
  border: none;
  background-color: transparent;
`;

export const ShareBtn = styled.button`
  margin: auto 0;
  position: absolute;
  left: 72.5%;
  top: 97%;
  border: none;
  background-color: transparent;
`;

export const LinkBtn = styled.button`
  margin: auto 0;
  position: absolute;
  left: 71.3%;
  top: 97.3%;
  border: none;
  background-color: transparent;
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
  #img4 {
    width: 17px;
    height: 21px;
  }
`;
