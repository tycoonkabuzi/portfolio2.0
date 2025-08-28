import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { useTheme, ThemeType } from "../contexts/ThemeContext";

// Props type for styled components using theme
interface ThemeProps {
  theme: ThemeType;
  isAnimated?: boolean;
  second?: boolean;
}

const Main = styled.div<ThemeProps>`
  padding-top: 50px;
  width: 75%;
  margin: auto;
  min-height: ${(props) => (props.isAnimated ? "100vh" : "0px")};
  max-height: ${(props) => (props.isAnimated ? "100vh" : "0px")};
  transition: min-height 0.3s ease-in-out, max-height 0.3s ease-in-out;
  background-color: ${(props) => props.theme["--bg-color"]};
  color: ${(props) => props.theme["--text-color"]};
`;

const HamburgerMenu = styled.div<ThemeProps>`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const LongLineHamburgerMenu = styled.span<ThemeProps>`
  display: block;
  background-color: ${(props) => props.theme["--bg-color-nav-span"]};
  width: 25px;
  height: 3px;
  transition: 0.3s ease-in-out;
  ${(props) => (props.isAnimated ? `rotate: 45deg; margin-top:10px;` : ``)}
  ${(props) =>
    props.second && props.isAnimated ? "rotate:-45deg; margin-top:-10px;" : ""}
`;

const ShortLineHamburgerMenu = styled.span<ThemeProps>`
  display: block;
  background-color: ${(props) => props.theme["--bg-color-nav-span"]};
  width: 15px;
  height: 3px;
  ${(props) => (props.isAnimated ? `display: none;` : ``)}
`;

const ContainerTopNav = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MenuCarrousel = styled.div<ThemeProps>`
  ${(props) => (props.isAnimated ? "display:none;" : "display:flex;")}
  flex-direction: column;
  gap: 10px;
  width: 5%;
  align-items: center;
  position: absolute;
  right: 11%;
  bottom: 35%;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const RoundButtons = styled.span<ThemeProps>`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  border: 5px solid ${(props) => props.theme["--text-color"]};
`;

const NavElements = styled.ul<ThemeProps>`
  margin-top: 100px;
  opacity: ${(props) => (props.isAnimated ? "1" : "0")};
  visibility: ${(props) => (props.isAnimated ? "visible" : "hidden")};
  transition: opacity 0.3s ease-in-out 0.3s, visibility 0.3s ease-in-out;
`;

const Item = styled.li`
  font-size: 50px;
  list-style: none;
  transition: font-weight 0.3s ease-in-out;

  &:hover {
    font-weight: 600;
  }
`;

const StyledLink = styled(Link)<ThemeProps>`
  text-decoration: none;
  color: ${(props) => props.theme["--text-color"]};
`;

const Nav = () => {
  const location = useLocation();
  const [isAnimated, setIsAnimated] = useState(false);
  const { isDarkMode, theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const pages = ["/", "/portfolio", "/skills", "/contact"];

  const animatedHamburgerMenu = () => {
    setIsAnimated(!isAnimated);
  };

  return (
    <Main isAnimated={isAnimated} theme={theme}>
      <ContainerTopNav>
        <HamburgerMenu onClick={animatedHamburgerMenu} theme={theme}>
          <LongLineHamburgerMenu isAnimated={isAnimated} theme={theme} />
          <LongLineHamburgerMenu second isAnimated={isAnimated} theme={theme} />
          <ShortLineHamburgerMenu isAnimated={isAnimated} theme={theme} />
        </HamburgerMenu>
        <Icon
          icon={
            isDarkMode
              ? "line-md:moon-alt-loop"
              : "line-md:moon-filled-alt-to-sunny-filled-loop-transition"
          }
          width="32"
          height="32"
          onClick={toggleTheme}
        />
      </ContainerTopNav>

      <NavElements isAnimated={isAnimated} theme={theme}>
        {pages.map((path, index) => (
          <StyledLink
            key={index}
            to={path}
            onClick={animatedHamburgerMenu}
            isAnimated={isAnimated}
            theme={theme}
          >
            <Item>
              {path === "/"
                ? "Home"
                : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
            </Item>
          </StyledLink>
        ))}
      </NavElements>

      <MenuCarrousel isAnimated={isAnimated} theme={theme}>
        <Icon
          icon="line-md:arrow-small-up"
          width="32"
          height="32"
          onClick={() => {
            const currentIndex = pages.indexOf(location.pathname);
            const previousPage = pages[currentIndex - 1];
            if (previousPage) navigate(previousPage);
          }}
        />
        {pages.map((page, idx) => (
          <RoundButtons
            key={idx}
            onClick={() => navigate(page)}
            theme={theme}
            style={{ backgroundColor: location.pathname === page ? "red" : "" }}
          />
        ))}
        <Icon
          icon="line-md:arrow-small-down"
          width="32"
          height="32"
          onClick={() => {
            const currentIndex = pages.indexOf(location.pathname);
            const nextPage = pages[currentIndex + 1];
            if (nextPage) navigate(nextPage);
          }}
        />
      </MenuCarrousel>
    </Main>
  );
};

export default Nav;
