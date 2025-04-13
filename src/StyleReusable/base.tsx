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
  color: ${(props) => props.theme["--text-color"]};
`;
const Title = styled.h2`
  width: 100%;
  line-height: 40px;
  padding-bottom: 50px;
  animation: ${fadeInUp} 1s ease-in-out 0.2s;
  color: ${(props) => props.theme["--text-color"]};
`;
const SubTitle = styled.p`
  font-size: 15px;
  font-weight: 700;
  animation: ${fadeInUp} 1s ease-in-out 0.3s;
  color: ${(props) => props.theme["--text-color"]};
`;

const SmallTitle = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.theme["--text-color"]};
`;

const Paragraph = styled.p`
  font-size: 15px;
  margin-bottom: 20px;
  animation: ${fadeInUp} 1s ease-in-out 0.3s;
  color: ${(props) => props.theme["--text-color"]};
`;

const PartWrap = styled.div`
  display: flex;
  gap: 10%;
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
  &:hover {
    rotate: -5deg;
    color: ${(props) => props.theme["--text-color"]};
    background-color: ${(props) => props.theme["--bg-color"]};
    cursor: pointer;
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
