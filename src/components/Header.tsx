import styled from "styled-components";

const Main = styled.div`
  width: 75%;
  padding-top: 50px;
  margin: auto;
  margin-top: 50px;
  display: flex;
`;
const QuotesHeader = styled.div`
  font-size: 25px;
  width: 35%;
`;
const BigTitle = styled.h1`
  padding-bottom: 50px;
`;
const Quote = styled.h2`
  width: 50%;
  line-height: 40px;
  padding-bottom: 50px;
`;
const SubTitle = styled.p`
  font-size: 15px;
  font-weight: 700;
`;
const Description = styled.div`
  padding-top: 20px;
  width: 50%;
`;
const Paragraph = styled.p`
  font-size: 15px;
  margin-bottom: 20px;
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
    <Main>
      <QuotesHeader>
        <BigTitle>My Portfolio</BigTitle>
        <Quote>" A hilarious creation by me"</Quote>
        <SubTitle>John Legend, All of me</SubTitle>
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
    </Main>
  );
};
export default Header;
