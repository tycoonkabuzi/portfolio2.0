import { Outlet } from "react-router";
import NavDashboard from "../components/dashboard/NavDashboard";

const Dashboard = ({ active, setActive }) => {
  return (
    <>
      <NavDashboard active={active} />
      <Outlet />
    </>
  );
};
export default Dashboard;
