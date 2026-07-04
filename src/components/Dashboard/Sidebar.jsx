import { Link } from "react-router-dom";
import {
  FaHome,
  FaFileAlt,
  FaChartBar,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white p-6">

      <h1 className="text-2xl font-bold text-blue-400 mb-10">
        Resume Review AI
      </h1>

      <nav className="space-y-4">

        <Link
          to="/dashboard"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
        >
          <FaHome />
          Dashboard
        </Link>

        <Link
          to="/upload"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
        >
          <FaFileAlt />
          Upload Resume
        </Link>

        <Link
          to="/analysis"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
        >
          <FaChartBar />
          Analysis
        </Link>

        <Link
          to="/profile"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
        >
          <FaUser />
          Profile
        </Link>

        <Link
          to="/settings"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
        >
          <FaCog />
          Settings
        </Link>

      </nav>

      <div className="absolute bottom-8">
        <button className="flex items-center gap-3 text-red-400 hover:text-red-500">
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;