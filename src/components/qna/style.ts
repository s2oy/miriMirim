import styled from "@emotion/styled";

export const QnaWrapper = styled.div``;
export const QnaContainer = styled.div`
  width: 500px;
  height: 100px;
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

  :hover {
    background-color: #37876d;
  }

  #content {
    text-align: center;
    margin-top: 20px;

    span {
      color: #818181;
      font-size: 20px;
      :hover {
        color: #dcdcdc;
      }
    }
  }
`;
