import { Link } from "react-router-dom";

function QuickActions() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">
        Quick Actions
      </h2>

      <div className="flex flex-wrap gap-4">
        <Link
          to="/upload"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
        >
          Upload Resume
        </Link>

        <Link
          to="/analysis"
          className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700"
        >
          View Analysis
        </Link>

        <Link
          to="/profile"
          className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700"
        >
          Profile
        </Link>

        <Link
          to="/settings"
          className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600"
        >
          Settings
        </Link>
      </div>
    </div>
  );
}

export default QuickActions;