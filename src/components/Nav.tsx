import styled from "styled-components";
import { Icon } from "@iconify/react";
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
  transition: font-weight 0.3s ease-in-out;
  &:hover {
    font-weight: 600;
  }
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
        <Icon icon="line-md:moon-alt-loop" width="32" height="32" />
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
          <Item>Projects</Item>
        </StyledLink>
        <StyledLink
          to="/skills"
          isAnimated={isAnimated}
          onClick={animatedHamburgerMenu}
        >
          <Item>Skills</Item>
        </StyledLink>
        <StyledLink
          to="/contact"
          isAnimated={isAnimated}
          onClick={animatedHamburgerMenu}
        >
          <Item>Contact</Item>
        </StyledLink>
      </NavElements>
      <MenuCarrousel isAnimated={isAnimated}>
        <Icon icon="line-md:arrow-small-up" width="32" height="32" />
        <RoundButtons />
        <RoundButtons />
        <RoundButtons />
        <Icon icon="line-md:arrow-small-down" width="32" height="32" />
      </MenuCarrousel>
    </Main>
  );
};
export default Nav;
