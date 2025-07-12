import styled from "styled-components";
const Main = styled.div`
  background-color: #f6f6f6;
  color: black;
  width: 15%;
  padding-top: 2%;
  padding-left: 5%;
  padding-right: 5%;
  height: 400vh;
  position: fixed;
`;
const Title = styled.h1`
  line-height: 27px;
`;
const List = styled.ul`
  margin-top: 10%;
`;

const ListItem = styled.li``;
const Clickable = styled.a`
  text-decoration: none;
  ${(prop) =>
    prop.isActive == true
      ? { color: "red", fontWeight: "700" }
      : { color: "black", fontWeight: "200" }};

  &:hover {
    color: #b73f3f;
  }
`;
const NavDashboard = ({ active }) => {
  return (
    <Main>
      <Title> Portfolio Dashboard</Title>
      <List>
        <ListItem>
          <Clickable isActive={active.home} href="#">
            Home Page
          </Clickable>
        </ListItem>

        <ListItem>
          <Clickable isActive={active.projects} href="#">
            Upload Projects
          </Clickable>
        </ListItem>

        <ListItem>
          <Clickable isActive={active.skills} href="#">
            Skills{" "}
          </Clickable>
        </ListItem>

        <ListItem>
          <Clickable isActive={active.contact} href="#">
            Contact
          </Clickable>
        </ListItem>
      </List>
    </Main>
  );
};
export default NavDashboard;
