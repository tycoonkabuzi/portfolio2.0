import { Outlet } from "react-router";
import NavDashboard from "../components/dashboard/NavDashboard";
import { ActiveState } from "../types/activeState";

interface DashboardProps {
  active: ActiveState;
  setActive: React.Dispatch<React.SetStateAction<ActiveState>>;
}

const Dashboard = ({ active }: DashboardProps) => {
  return (
    <>
      <NavDashboard active={active} />
      <Outlet />
    </>
  );
};

export default Dashboard;
