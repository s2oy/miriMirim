import styled from "@emotion/styled";

export const MainWrapper = styled.div`
// width: 100%;
// height: 200px;
    position: relative;
    background-color: #616161;
    min-width: 100vp;
    min-height: 100vp;
    text-align:center;
`;

export const Top = styled.span`
    position:absolute;
    left: 59%;
    top: 37%;
    transform: translate( -30%, -70%);
    color:white;
    font-size:15pt;
`;
export const Mid = styled.span`
    position:absolute;
    left: 56.5%;
    top: 45%;
    transform: translate( -30%, -100%);
    color:white;
    font-size:15pt;
`;
export const Bottom = styled.span`
    position:absolute;
    left: 53.5%;
    top: 52%;
    transform: translate( -40%, -70%);
    color:white;
    font-size:15pt;
`;
export const Introduce= styled.span`
    position:absolute;
    left: 58.5%;
    top: 97%;
    color:white;
    font-size:13pt;
`;
export const Home = styled.img`
    margin: auto 0;
    position:absolute;
    left: 72.6%;
    top: 97%;
`;

export const ShareBtn = styled.img`
    margin: auto 0;
    position:absolute;
    left: 74%;
    top: 96.6%;
`;

export const Imgwrapper = styled.div`
    #img1{
        width: 1000px;
        height: auto;
    }

    #img2{
        width: 20px;
        height: 20px;
    }
    #img3{
        width: 22px;
        height: 28px;
    }
`;