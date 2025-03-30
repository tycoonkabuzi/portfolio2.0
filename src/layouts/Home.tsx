import { Outlet } from "react-router";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};
export default Home;
