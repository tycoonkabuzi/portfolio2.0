import styled from "styled-components";

const Main = styled.div`
  padding-top: 100px;
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

const Nav = () => {
  return (
    <Main>
      <HamburgerMenu>
        <LongLineHamburgerMenu />
        <LongLineHamburgerMenu />
        <ShortLineHamburgerMenu />
      </HamburgerMenu>
    </Main>
  );
};
export default Nav;
