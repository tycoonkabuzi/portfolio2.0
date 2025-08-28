import styled from "styled-components";
import { ActiveState } from "../../types/activeState";

const Main = styled.div`
  background-color: #f6f6f6;
  width: 15%;
  padding: 2% 5%;
  height: 100vh;
  position: fixed;
`;

const Title = styled.h1`
  line-height: 27px;
`;
const List = styled.ul`
  margin-top: 10%;
`;
const ListItem = styled.li``;

const Clickable = styled.a<{ isActive?: boolean }>`
  text-decoration: none;
  color: ${(props) => (props.isActive ? "red" : "black")};
  font-weight: ${(props) => (props.isActive ? 700 : 200)};
  &:hover {
    color: #b73f3f;
  }
`;

interface NavDashboardProps {
  active: ActiveState;
}

const NavDashboard = ({ active }: NavDashboardProps) => (
  <Main>
    <Title>Portfolio Dashboard</Title>
    <List>
      <ListItem>
        <Clickable isActive={active.home} href="#">
          Home Page
        </Clickable>
      </ListItem>
      <ListItem>
        <Clickable isActive={active.projects} href="/admin/projects">
          Upload Projects
        </Clickable>
      </ListItem>
      <ListItem>
        <Clickable isActive={active.skills} href="#">
          Skills
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

export default NavDashboard;
