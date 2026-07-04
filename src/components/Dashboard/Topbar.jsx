import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

function Topbar() {
  return (
    <div className="flex items-center justify-between bg-white shadow-md rounded-xl px-8 py-5 mb-8">

      {/* Welcome Section */}
      <div>
        <h2 className="text-3xl font-bold text-slate-800">
          Welcome Back 👋
        </h2>
        <p className="text-gray-500 mt-1">
          Manage your resumes and AI analysis from one place.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">

        {/* Search Box */}
        <div className="flex items-center bg-slate-100 px-4 py-2 rounded-lg">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none"
          />
        </div>

        {/* Notification */}
        <button className="text-2xl text-gray-600 hover:text-blue-600">
          <FaBell />
        </button>

        {/* Profile */}
        <button className="text-3xl text-blue-600 hover:text-blue-700">
          <FaUserCircle />
        </button>

      </div>

    </div>
  );
}

export default Topbar;