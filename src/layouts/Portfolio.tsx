import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  BigTitle,
  Main,
  Paragraph,
  SmallTitle,
  SubTitle,
} from "../StyleReusable/base";
import FirstSite from "../ImagePhoto/site1.jpg";
import secondSite from "../ImagePhoto/site2.jpg";
const ContainerProjects = styled.div`
  display: flex;
  gap: 3%;
  align-items: center;
  width: 90%;
`;
const Project = styled.div`
  background-color: #f0f0f0;
  width: 35%;
  padding: 20px;
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
  return (
    <Main>
      <BigTitle>Projects</BigTitle>
      <ContainerProjects>
        <Project>
          <ContainerImage>
            <Image src={FirstSite} />
          </ContainerImage>
          <SubTitle> Yoga site</SubTitle>

          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
            repellat aliquid veniam id odit eos quis asperiores, consequuntur.
          </Paragraph>

          <ContainerCategoryProject>
            <SmallTitle>REACT/REDUX/API</SmallTitle>
            <ProjectNumber>
              <SmallTitle>01</SmallTitle>
            </ProjectNumber>
          </ContainerCategoryProject>
        </Project>

        <Project>
          <ContainerImage>
            <Image src={secondSite} />
          </ContainerImage>
          <SubTitle> Yoga site</SubTitle>
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
            repellat aliquid veniam id odit eos quis asperiores, consequuntur.
          </Paragraph>
          <ContainerCategoryProject>
            <SmallTitle>REACT/REDUX/API</SmallTitle>
            <ProjectNumber>
              <SmallTitle>02</SmallTitle>
            </ProjectNumber>
          </ContainerCategoryProject>
        </Project>

        <Project>
          <ContainerImage>
            <Image src={FirstSite} />
          </ContainerImage>
          <SubTitle> Yoga site</SubTitle>
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
            repellat aliquid veniam id odit eos quis asperiores, consequuntur.
          </Paragraph>
          <ContainerCategoryProject>
            <SmallTitle>REACT/REDUX/API</SmallTitle>
            <ProjectNumber>
              <SmallTitle>03</SmallTitle>
            </ProjectNumber>
          </ContainerCategoryProject>
        </Project>
      </ContainerProjects>
      <MenuCarrousel>
        <FontAwesomeIcon icon={faArrowLeft} size="1x" />
        <RoundButtons />
        <RoundButtons />
        <RoundButtons />
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </MenuCarrousel>
    </Main>
  );
};

export default Portfolio;
