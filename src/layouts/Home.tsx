import { Outlet } from "react-router";
import Nav from "../components/Nav";
import styled from "styled-components";
const Main = styled.div`
  max-height: 100vh;
  min-height: 100vh;
  overflow-y: hidden;
`;
const Home = () => {
  return (
    <Main>
      <Nav />
      <Outlet />
    </Main>
  );
};
export default Home;
