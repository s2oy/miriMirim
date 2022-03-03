import styled from "@emotion/styled";

export const MainWhiteBox = styled.div``;

export const WhiteBoxContainer = styled.div`
  width: 120vh;
  height: 100%;
  background-color: white;
  margin: 0 auto;
  border-radius: 8px;
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

export const StartBox = styled.div``;

export const StartBoxContainer = styled.div`
  width: 620px;
  height: 400px;
  background-color: orange;
  padding: 0;
  position: absolute;
  border-radius: 24px;
`;

export const StartBoxModal = styled.div``;
