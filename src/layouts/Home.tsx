import { Outlet } from "react-router";
import Nav from "../components/Nav";
import styled from "styled-components";
import { useTheme } from "../contexts/ThemeContext";
const Main = styled.div`
  max-height: 100vh;
  min-height: 100vh;
  overflow-y: hidden;
  background-color: ${(props) => props.theme["--bg-color"]};
  @media only screen and (max-width: 600px) {
    overflow: scroll;
  }
  @media only screen and (min-width: 600px) {
    overflow: scroll;
  }
`;
const Home = () => {
  const { theme } = useTheme();
  return (
    <Main theme={theme}>
      <Nav />
      <Outlet />
    </Main>
  );
};
export default Home;
