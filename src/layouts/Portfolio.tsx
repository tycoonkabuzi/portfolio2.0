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

import { useTheme } from "../contexts/ThemeContext";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router";

const ContainerProjects = styled.div`
  display: flex;
  gap: 3%;
  align-items: center;

  overflow: hidden;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 90%;
    padding: 20px;
    margin: auto;
  }
  @media only screen and (min-width: 600px) {
    width: 95%;
    flex-direction: column;
  }

  @media only screen and (min-width: 992px) {
  }
`;

const ContainerImage = styled.div`
  width: 100%;
  margin: auto;
  padding-bottom: 20px;
`;
const BoxProject = styled(Box)`
  flex: 0 0 28.5%;
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
  width: 15%;
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
const ContainerItem = styled.div`
  width: fit-content;
  display: flex;
  margin: auto;
  gap: 1%;
  transition: transform 0.3s ease;
`;
const LinkElement = styled(Link)`
  text-decoration: none;
`;

const Portfolio = () => {
  const { theme } = useTheme();

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getAllProjects = async () => {
      try {
        const response = await axios.get("http://localhost:8080/projects/");
        setProjects(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProjects();
  }, []);
  const containerRef = useRef(null);
  const itemWidth = 100;
  const [count, setCount] = useState(0);
  useEffect(() => {
    const moveCarousel = () => {
      if (containerRef.current) {
        containerRef.current.style.transform = `translateX(-${
          count * itemWidth
        }%)`;
      }
    };

    moveCarousel();
  }, [count]);
  return (
    <Main theme={theme}>
      <BigTitle theme={theme}>Projects </BigTitle>
      <ContainerProjects>
        <ContainerItem ref={containerRef}>
          {projects.map((project, index) => (
            <BoxProject theme={theme}>
              <LinkElement to={`${project.link}`}>
                <ContainerImage>
                  <Image
                    src={`http://localhost:8080/uploads/${project.image}`}
                  />
                </ContainerImage>
                <SubTitle theme={theme}> {project.title}</SubTitle>
                <Paragraph theme={theme}>{project.description}</Paragraph>
                <ContainerCategoryProject>
                  <SmallTitle theme={theme}>{project.type}</SmallTitle>
                  <ProjectNumber>
                    <SmallTitle theme={theme}>{index + 1}</SmallTitle>
                  </ProjectNumber>
                </ContainerCategoryProject>
              </LinkElement>
            </BoxProject>
          ))}
        </ContainerItem>
      </ContainerProjects>
      <MenuCarrousel>
        <Icon
          icon="line-md:arrow-small-left"
          width="32"
          height="32"
          onClick={() => {
            setCount(count - 1);
          }}
        />
        <RoundButtons />
        <RoundButtons />
        <RoundButtons />
        <Icon
          icon="line-md:arrow-small-right"
          width="32"
          height="32"
          onClick={() => {
            setCount(count + 1);
          }}
        />
      </MenuCarrousel>
    </Main>
  );
};

export default Portfolio;
