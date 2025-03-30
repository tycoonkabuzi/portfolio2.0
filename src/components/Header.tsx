import styled from "styled-components";
import {
  BigTitle,
  Main,
  Paragraph,
  SubTitle,
  Title,
} from "../StyleReusable/base";
const Container = styled(Main)`
  display: flex;
  align-items: center;
`;
const QuotesHeader = styled.div`
  width: 35%;
`;

const Description = styled.div`
  width: 50%;
  margin-top: 70px;
`;

const Identification = styled.div`
  display: flex;
  gap: 50px;
  margin-bottom: 50px;
`;
const DetailedDescription = styled.div``;
const PartWrap = styled.div``;

const Header = () => {
  return (
    <Container>
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
            <Paragraph>Experience </Paragraph>
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
            This portfolio includes some of the projects I have worked on. even
            though it does not contain all of my work, it gives a general idea
            of what I've done. Enjoy exploring it!
          </Paragraph>
        </DetailedDescription>
      </Description>
    </Container>
  );
};
export default Header;
