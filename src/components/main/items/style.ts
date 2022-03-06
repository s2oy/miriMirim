import styled from "@emotion/styled";

export const MainWhiteBox = styled.div``;

export const BoxContainer = styled.div``;
export const WhiteBoxContainer = styled.div`
  width: 120vh;
  height: 100%;
  background-color: white;
  margin: 0 auto;
  border-radius: 8px;

  img {
    width: 28px;
    margin-top: 15px;
    margin-left: 29px;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 60px;
  background-color: #e6e6e6;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  .btn {
    border-radius: 100%;
    background-color: white;
    width: 20px;
    height: 20px;
    display: inline-block;
    margin-top: 20px;
  }

  .btn_red {
    background-color: #ff515a;
    margin-left: 20px;
    margin-right: 15px;
  }

  .btn_yellow {
    background-color: #ffc509;
    margin-right: 15px;
  }

  .btn_green {
    background-color: #61ba46;
  }

  span {
    font-size: 18px;
    position: absolute;
    padding: 0;
    top: 14px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const ModalContainer = styled.div`
  width: 620px;
  height: 400px;
  background-color: #f6f6f6;
  padding: 0;
  border-radius: 24px;
  margin: 0 auto;
  transform: translateY(58%);
  box-shadow: 8px 8px 8px #d3d3d3;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  h2 {
    font-size: 28px;
    letter-spacing: px;
    color: #37876d;
    text-align: center;
    font-style: bold;
    padding-top: 49px;
    padding-bottom: 0px;
  }

  p {
    width: 480px;
    height: 80px;
    color: #616161;
    font-size: 20px;
    text-align: center;
    line-height: 28px;
    margin: 0 auto;
    padding-top: 60px;
    padding-bottom: 55px;
  }

  .btn_start {
    width: 280px;
    height: 65px;
    background-color: #37876d;
    border-radius: 4px;
    color: #eaeaea;
    font-size: 26px;
    text-align: center;
    margin: 0 auto;
    line-height: 60px;
  }
`;
