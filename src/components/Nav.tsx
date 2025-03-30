import styled from "styled-components";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
const Main = styled.div`
  padding-top: 50px;
  width: 75%;
  margin: auto;
`;
const HamburgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
const LongLineHamburgerMenu = styled.span`
  display: block;
  background-color: #000000;
  width: 25px;
  height: 3px;
`;
const ShortLineHamburgerMenu = styled.span`
  display: block;
  background-color: #000000;
  width: 15px;
  height: 3px;
`;
const ContainerTopNav = styled.div`
  display: flex;
  justify-content: space-between;
`;
const MenuCarrousel = styled.div`
  display: flex;
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
const Nav = () => {
  return (
    <Main>
      <ContainerTopNav>
        <HamburgerMenu>
          <LongLineHamburgerMenu />
          <LongLineHamburgerMenu />
          <ShortLineHamburgerMenu />
        </HamburgerMenu>
        <FontAwesomeIcon icon={faMoon} size="2x" />
      </ContainerTopNav>

      <MenuCarrousel>
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
