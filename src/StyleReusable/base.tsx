import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Main = styled.div`
  width: 75%;
  margin: auto;
  margin-top: 50px;
  gap: 10%;
`;

const BigTitle = styled.h1`
  font-size: 55px;
  padding-bottom: 50px;
  animation: ${fadeInUp} 1s ease-in-out;
`;
const Title = styled.h2`
  width: 100%;
  line-height: 40px;
  padding-bottom: 50px;
  animation: ${fadeInUp} 1s ease-in-out 0.2s;
`;
const SubTitle = styled.p`
  font-size: 15px;
  font-weight: 700;
  animation: ${fadeInUp} 1s ease-in-out 0.3s;
`;

const SmallTitle = styled.p`
  font-size: 12px;
  font-weight: 700;
`;

const Paragraph = styled.p`
  font-size: 15px;
  margin-bottom: 20px;
  animation: ${fadeInUp} 1s ease-in-out 0.3s;
`;

const PartWrap = styled.div``;

export { Main, BigTitle, Title, SubTitle, SmallTitle, Paragraph, PartWrap };
