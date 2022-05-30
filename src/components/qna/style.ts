import styled from "@emotion/styled";

export const QnaWrapper = styled.div``;

export const QnaContainer = styled.div`
  width: 500px;
  height: 90px;
  background-color: #e6e6e6;
  border-radius: 4px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  text-align: center;
  font-size: 1.3em;
  padding: 10px;
  padding :hover {
    background-color: #37876d;
    color: #dcdcdc;
  }

  #content {
    width: 500px;
    height: 80px;
    text-align: center;
    padding-top: 20px;
    color: #818181;
    font-size: 20px;
  }

  li {
    color: red;
    position: absolute;
  }
`;

export const QnaContent = styled.span`
  :hover {
  }
`;

export const Title = styled.h2`
  position: absolute;
  top: 38%;
  left: 50%;
  transform: translate(-50%, 0%);
`;

export const QnaListItem = styled.span``;
