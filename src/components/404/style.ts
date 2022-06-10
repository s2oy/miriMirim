import styled from "@emotion/styled";

export const MainWrapper = styled.div``;

export const ModalContainer = styled.div`
  width: 620px;
  height: 400px;
  background-color: #f6f6f6;
  padding: 0;
  border-radius: 24px;
  margin: 0 auto;
  transform: translateY(58%);
  box-shadow: 6px 6px 6px 6px #454545;
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
    padding-bottom: 30px;
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

    :hover {
      background-color: #327862;
      color: #e3e3e3;
      /* box-shadow: rgba(0, 0, 0, 0.3) 3px 3px 10px inset; */
    }
  }
`;
