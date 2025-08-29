import styled from "styled-components";
import { Icon } from "@iconify/react";
import {
  BigTitle,
  Box,
  Main,
  Paragraph,
  SubTitle,
  SmallTitle,
} from "../StyleReusable/base";
import { useTheme, ThemeType } from "../contexts/ThemeContext";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router";

// Props type for styled components using theme
interface ThemeProps {
  theme: ThemeType;
}

// Styled components
const MainPortfolio = styled(Main)<ThemeProps>``;

const ContainerProjects = styled.div`
  overflow: hidden;
  width: 100%;
  margin: auto;
`;

const ContainerItem = styled.div`
  display: flex;
  gap: 2%;
  transition: transform 0.4s ease-in-out;
`;

const BoxProject = styled(Box)<ThemeProps>`
  flex: 0 0 calc(33.33% - 1.33%);
  max-width: calc(33.33% - 1.33%);
  box-sizing: border-box;

  @media only screen and (max-width: 900px) {
    flex: 0 0 calc(50% - 1%);
    max-width: calc(50% - 1%);
  }

  @media only screen and (max-width: 600px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
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
  padding: 2px 10px;
`;

const MenuCarrousel = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
`;

const RoundButtons = styled.span<ThemeProps>`
  display: block;
  background-color: ${(props) => props.theme["--bg-color"]};
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme["--text-color"]};
`;

const LinkElement = styled(Link)`
  text-decoration: none;
`;

const Portfolio = () => {
  const { theme } = useTheme();

  const [projects, setProjects] = useState<any[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  // Fetch projects from backend
  useEffect(() => {
    const getAllProjects = async () => {
      try {
        const response = await axios.get(
          "https://portfoliobackend-s4al.onrender.com/projects/"
        );
        setProjects(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProjects();
  }, []);

  // Adjust visibleCards based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) setVisibleCards(1);
      else if (window.innerWidth <= 900) setVisibleCards(2);
      else setVisibleCards(3);
    };

    handleResize(); // initialize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Slide container
  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const cardWidth = containerRef.current.firstChild
        ? (containerRef.current.firstChild as HTMLElement).offsetWidth +
          0.02 * containerWidth // include gap approx
        : 0;
      containerRef.current.style.transform = `translateX(-${
        count * cardWidth
      }px)`;
    }
  }, [count, visibleCards, projects]);

  const next = () => {
    if (count < projects.length - visibleCards) setCount(count + 1);
  };

  const prev = () => {
    if (count > 0) setCount(count - 1);
  };

  useEffect(() => {
    document.title = "Projects";
  }, []);

  return (
    <MainPortfolio theme={theme}>
      <BigTitle theme={theme}>Projects</BigTitle>
      <p>
        Here: <a href="https://github.com/tycoonkabuzi"> Access my GitHub</a>{" "}
        and below a few demo projects
      </p>
      <ContainerProjects>
        <ContainerItem ref={containerRef}>
          {projects.map((project, index) => (
            <BoxProject theme={theme} key={index}>
              <LinkElement to={`${project.link}`}>
                <Image
                  src={`https://portfoliobackend-s4al.onrender.com/uploads/${project.image}`}
                />
                <SubTitle theme={theme}>{project.title}</SubTitle>
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
          onClick={prev}
        />
        {Array.from({ length: Math.ceil(projects.length / visibleCards) }).map(
          (_, idx) => (
            <RoundButtons key={idx} theme={theme} />
          )
        )}
        <Icon
          icon="line-md:arrow-small-right"
          width="32"
          height="32"
          onClick={next}
        />
      </MenuCarrousel>
    </MainPortfolio>
  );
};

export default Portfolio;
