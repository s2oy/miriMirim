import styled from "@emotion/styled";

export const QnaWrapper = styled.div``;

export const CountWrapper = styled.div`
  position: absolute;
  /* margin-left: 73.1%; */
  margin-top: 92px;
  .count_q {
    color: #37876d;
    font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
    font-weight: bold;
    font-size: 50px;
  }

  .total_q {
    color: #e8e7e6;
    font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
    font-weight: bold;
    margin-top: 12px;
    font-size: 35px;
  }
`;

export const Hidden = styled.span`
  height: 30px;
  margin-left: 34%;
  margin-top: 18px;
  position: absolute;
  color: black;
  background-color: #e6e6e6;
`;

export const QnaItemContainer = styled.div`
  position: absolute;
  display: flex !important;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
  margin-top: 30rem;
  float: left;
`;

export const QnaItem = styled.button`
  width: 500px;
  height: 90px;
  background-color: #e6e6e6;
  border: none;
  outline: none;
  margin-bottom: 30px;
  /* top: 50%;
  left: 50%; */
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(140%, -100%);

  color: #818181;
  font-size: 20px;
  text-align: center;
  font-size: 1.3em;
  padding: 10px;

  &:hover {
    background-color: #e0e0e0;
    color: #707070;
  }

  &:active {
    background-color: #37876d;
    color: #e6e6e6;
    /* box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.5); */
    /* transition: all 0.1s; */
  }

  /* &:visited {
    background-color: #e6e6e6;
  } */

  /* &:active {
      background-color: #2a5e4e;
    } */
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

  border-radius: 12px;
`;

export const QnaContent = styled.span`
  :hover {
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  position: absolute;
  top: 33%;
  left: 50%;
  transform: translate(-50%, 0%);
  color: #37876d;

  /* justify-content: space-around; */
`;

export const QnaListItem = styled.span``;

// export const QnaItem = styled.div``;
