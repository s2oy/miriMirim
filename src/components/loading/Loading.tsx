import React from "react";
import * as S from "./style";

const LoadingPage = () => {
  return (
    <>
      <S.Spinner>
        <div className="loadingio-spinner-ellipsis-vo5mlyom6lp">
          <div className="ldio-0rfo58buqexg">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className="geeks">
          <span>나에게 </span>
          <span> 맞는</span>
          <span> 과를</span>
          <span> 탐색</span>
          <span>하는</span>
          <span> 중</span>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      </S.Spinner>
    </>
  );
};

export default LoadingPage;
