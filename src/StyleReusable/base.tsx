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
  padding-bottom: 50px;
  animation: ${fadeInUp} 1s ease-in-out;
  color: ${(props) => props.theme["--text-color"]};
  @media only screen and (max-width: 600px) {
    font-size: 70px;
  }
  @media only screen and (min-width: 600px) {
    width: 60px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 50px;
  }
`;
const Title = styled.h2`
  width: 100%;
  line-height: 40px;
  padding-bottom: 50px;
  animation: ${fadeInUp} 1s ease-in-out 0.2s;
  color: ${(props) => props.theme["--text-color"]};
  @media only screen and (max-width: 600px) {
    font-size: 40px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 50px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 30px;
  }
`;
const SubTitle = styled.p`
  font-weight: 700;
  animation: ${fadeInUp} 1s ease-in-out 0.3s;
  color: ${(props) => props.theme["--text-color"]};
  @media only screen and (max-width: 600px) {
    font-size: 40px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 20px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 15px;
  }
`;

const SmallTitle = styled.p`
  font-weight: 700;
  color: ${(props) => props.theme["--text-color"]};
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 20px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 12px;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 20px;
  animation: ${fadeInUp} 1s ease-in-out 0.3s;
  color: ${(props) => props.theme["--text-color"]};
  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 20px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 15px;
  }
`;

const PartWrap = styled.div`
  display: flex;
  gap: 10%;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    gap: 0;
    margin: auto;
  }
  @media only screen and (min-width: 600px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 992px) {
    flex-direction: row;
  }
`;
const Box = styled.div`
  animation: ${fadeInUp} 1s ease-in-out
    ${(props) =>
      props.firstProject
        ? "0.2s"
        : props.secondProject
        ? "0.4s"
        : props.thirdProject
        ? "0.6s"
        : ""};

  background-color: ${(props) => props.theme["--card-bg"]};
  color: ${(props) => props.theme["--text-color"]};
  width: 70%;
  padding: 20px;
  border-radius: 20px;
  transition: rotate 0.3s ease-in-out;
  margin-bottom: 40px;
  &:hover {
    rotate: -5deg;
    color: ${(props) => props.theme["--text-color"]};
    background-color: ${(props) => props.theme["--bg-color"]};
    cursor: pointer;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  @media only screen and (min-width: 600px) {
    width: 95%;
  }
  @media only screen and (min-width: 992px) {
    width: 50%;
  }
`;
export {
  Main,
  BigTitle,
  Title,
  SubTitle,
  SmallTitle,
  Paragraph,
  PartWrap,
  Box,
};
