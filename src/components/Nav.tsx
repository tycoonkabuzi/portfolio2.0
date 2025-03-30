import styled from "styled-components";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router";

const Main = styled.div<{ isAnimated?: boolean }>`
  padding-top: 50px;
  width: 75%;
  margin: auto;
  min-height: ${(props) => (props.isAnimated ? "100vh" : "0px")};
  max-height: ${(props) => (props.isAnimated ? "100vh" : "0px")};
  transition: min-height 0.3s ease-in-out, max-height 0.3s ease-in-out;
`;
const HamburgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
const LongLineHamburgerMenu = styled.span<{
  isAnimated?: boolean;
  second?: boolean;
}>`
  display: block;
  background-color: #000000;
  width: 25px;
  height: 3px;
  transition: 0.3s ease-in-out;
  ${(props) => (props.isAnimated ? ` rotate: 45deg; margin-top:10px; ` : ``)}
  ${(props) =>
    props.second && props.isAnimated ? "rotate:-45deg; margin-top:-10px " : ""}
`;
const ShortLineHamburgerMenu = styled.span<{ isAnimated?: boolean }>`
  display: block;
  background-color: #000000;
  width: 15px;
  height: 3px;

  ${(props) => (props.isAnimated ? `display: none;` : ``)}
`;
const ContainerTopNav = styled.div`
  display: flex;
  justify-content: space-between;
`;
const MenuCarrousel = styled.div<{ isAnimated?: boolean }>`
  ${(props) => (props.isAnimated ? "display:none;" : "display:flex;")}
  flex-direction: column;
  gap: 10px;
  width: 5%;
  align-items: center;
  position: absolute;
  right: 11%;
  bottom: 35%;
`;
const RoundButtons = styled.span`
  display: block;
  background-color: white;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  border: 5px solid black;
`;
const NavElements = styled.ul<{ isAnimated?: boolean }>`
  margin-top: 100px;
  opacity: ${(props) => (props.isAnimated ? "1" : "0")};
  visibility: ${(props) => (props.isAnimated ? "visible" : "hidden")};
  transition: opacity 0.3s ease-in-out 0.3s, visibility 0.3s ease-in-out;
`;
const Item = styled.li`
  font-size: 50px;
  list-style: none;
`;

const StyledLink = styled(Link)<{ isAnimated?: boolean }>`
  text-decoration: none;
  color: inherit;
`;
const Nav = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  const animatedHamburgerMenu = () => {
    setIsAnimated(!isAnimated);
  };
  console.log(isAnimated);
  return (
    <Main isAnimated={isAnimated}>
      <ContainerTopNav>
        <HamburgerMenu onClick={animatedHamburgerMenu}>
          <LongLineHamburgerMenu isAnimated={isAnimated} />
          <LongLineHamburgerMenu second={true} isAnimated={isAnimated} />
          <ShortLineHamburgerMenu isAnimated={isAnimated} />
        </HamburgerMenu>
        <FontAwesomeIcon icon={faMoon} size="2x" />
      </ContainerTopNav>
      <NavElements isAnimated={isAnimated}>
        <StyledLink to="/" onClick={animatedHamburgerMenu}>
          <Item>Home</Item>
        </StyledLink>
        <StyledLink
          to="/portfolio"
          isAnimated={isAnimated}
          onClick={animatedHamburgerMenu}
        >
          <Item>Portfolio</Item>
        </StyledLink>
        <Item>Skills</Item>
        <Item>Contact</Item>
      </NavElements>
      <MenuCarrousel isAnimated={isAnimated}>
        <FontAwesomeIcon icon={faArrowUp} size="1x" />
        <RoundButtons />
        <RoundButtons />
        <RoundButtons />
        <FontAwesomeIcon icon={faArrowDown} size="1x" />
      </MenuCarrousel>
    </Main>
  );
};
export default Nav;
