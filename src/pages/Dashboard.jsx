import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import StatCard from "../components/dashboard/StatCard";
import RecentResumes from "../components/dashboard/RecentResumes";
import QuickActions from "../components/dashboard/QuickActions";

function Dashboard() {
  return (
    <div className="flex bg-slate-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8">
        <Topbar />
        <StatCard />
        <RecentResumes />
        <QuickActions />
      </div>
    </div>
  );
}

export default Dashboard;