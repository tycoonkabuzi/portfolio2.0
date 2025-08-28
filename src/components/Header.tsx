import styled from "styled-components";
import {
  BigTitle,
  Main,
  Paragraph,
  SubTitle,
  Title,
} from "../StyleReusable/base";
import { useTheme, ThemeType } from "../contexts/ThemeContext";
import { useEffect } from "react";

// Props type for styled-components using theme
interface ThemeProps {
  theme: ThemeType;
}

const Container = styled(Main)<ThemeProps>`
  display: flex;
  align-items: center;
  margin-top: 150px;
  color: ${(props) => props.theme["--text-color"]};

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    margin-top: 100px;
  }
  @media only screen and (min-width: 600px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 992px) {
    flex-direction: row;
  }
  @media only screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

const QuotesHeader = styled.div`
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  @media only screen and (min-width: 600px) {
    width: 100%;
  }
  @media only screen and (min-width: 992px) {
    width: 30%;
  }
  @media only screen and (min-width: 1200px) {
    width: 40%;
  }
`;

const Description = styled.div`
  width: 50%;
  margin-top: 70px;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  @media only screen and (min-width: 600px) {
    width: 100%;
  }
  @media only screen and (min-width: 992px) {
    width: 50%;
  }
  @media only screen and (min-width: 1200px) {
    width: 40%;
  }
`;

const Identification = styled.div`
  display: flex;
  gap: 50px;
  margin-bottom: 50px;
`;
const DetailedDescription = styled.div``;
const PartWrap = styled.div``;

const Header = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.title = "Portfolio | Kabuzi Ntwali";
  }, []);

  return (
    <Container theme={theme}>
      <QuotesHeader>
        <BigTitle>My Portfolio</BigTitle>
        <Title>
          " It's not that I'm so smart, it's just that I stay with problems
          longer"
        </Title>
        <SubTitle>Albert Einstein</SubTitle>
      </QuotesHeader>

      <Description>
        <Identification>
          <PartWrap>
            <Paragraph>Written by</Paragraph>
            <SubTitle>Kabuzi Ntwali</SubTitle>
          </PartWrap>

          <PartWrap>
            <Paragraph>Experience</Paragraph>
            <SubTitle>3 years</SubTitle>
          </PartWrap>
        </Identification>
        <DetailedDescription>
          <Paragraph>
            Hi, I'm Kabuzi Ntwali, a dedicated front-end developer with
            increasing proficiency in back-end development. I always look for
            solutions and flourish where creativity and problem-solving meet.
            The satisfaction I get from conquering obstacles and using code to
            make ideas a reality is the biggest reward for me.
          </Paragraph>
          <Paragraph>
            This portfolio includes some of the projects I have worked on. Even
            though it does not contain all of my work, it gives a general idea
            of what I've done. Enjoy exploring it!
          </Paragraph>
        </DetailedDescription>
      </Description>
    </Container>
  );
};

export default Header;
