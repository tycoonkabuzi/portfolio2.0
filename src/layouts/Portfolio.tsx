import styled from "styled-components";
import { Icon } from "@iconify/react";
import {
  BigTitle,
  Box,
  Main,
  Paragraph,
  SmallTitle,
  SubTitle,
} from "../StyleReusable/base";
import FirstSite from "../ImagePhoto/site1.jpg";
import secondSite from "../ImagePhoto/site2.jpg";
import { useTheme } from "../contexts/ThemeContext";

const ContainerProjects = styled.div`
  display: flex;
  gap: 3%;
  align-items: center;
  width: 90%;
`;

const ContainerImage = styled.div`
  width: 100%;
  margin: auto;
  padding-bottom: 20px;
`;
const Image = styled.img`
  width: 100%;
`;
const ContainerCategoryProject = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProjectNumber = styled.div`
  border: 1px solid black;
  padding: 2px 10px 2px 10px;
`;

const MenuCarrousel = styled.div`
  display: flex;
  gap: 10px;
  width: 12%;
  align-items: center;
  right: 11%;
  margin: auto;
  margin-top: 40px;
`;
const RoundButtons = styled.span`
  display: block;
  background-color: white;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  border: 5px solid black;
`;

const Portfolio = () => {
  const { theme } = useTheme();
  return (
    <Main theme={theme}>
      <BigTitle theme={theme}>Projects</BigTitle>
      <ContainerProjects>
        <Box firstProject={true} theme={theme}>
          <ContainerImage>
            <Image src={FirstSite} />
          </ContainerImage>
          <SubTitle theme={theme}> Yoga site</SubTitle>

          <Paragraph theme={theme}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
            repellat aliquid veniam id odit eos quis asperiores, consequuntur.
          </Paragraph>

          <ContainerCategoryProject>
            <SmallTitle theme={theme}>REACT/REDUX/API</SmallTitle>
            <ProjectNumber>
              <SmallTitle theme={theme}>01</SmallTitle>
            </ProjectNumber>
          </ContainerCategoryProject>
        </Box>

        <Box secondProject={true} theme={theme}>
          <ContainerImage>
            <Image src={secondSite} />
          </ContainerImage>
          <SubTitle theme={theme}> Yoga site</SubTitle>
          <Paragraph theme={theme}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
            repellat aliquid veniam id odit eos quis asperiores, consequuntur.
          </Paragraph>
          <ContainerCategoryProject>
            <SmallTitle theme={theme}>REACT/REDUX/API</SmallTitle>
            <ProjectNumber>
              <SmallTitle theme={theme}>02</SmallTitle>
            </ProjectNumber>
          </ContainerCategoryProject>
        </Box>

        <Box thirdProject={true} theme={theme}>
          <ContainerImage>
            <Image src={FirstSite} />
          </ContainerImage>
          <SubTitle theme={theme}> Yoga site</SubTitle>
          <Paragraph theme={theme}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
            repellat aliquid veniam id odit eos quis asperiores, consequuntur.
          </Paragraph>
          <ContainerCategoryProject>
            <SmallTitle theme={theme}>REACT/REDUX/API</SmallTitle>
            <ProjectNumber>
              <SmallTitle theme={theme}>03</SmallTitle>
            </ProjectNumber>
          </ContainerCategoryProject>
        </Box>
      </ContainerProjects>
      <MenuCarrousel>
        <Icon icon="line-md:arrow-small-left" width="32" height="32" />
        <RoundButtons />
        <RoundButtons />
        <RoundButtons />
        <Icon icon="line-md:arrow-small-right" width="32" height="32" />
      </MenuCarrousel>
    </Main>
  );
};

export default Portfolio;
