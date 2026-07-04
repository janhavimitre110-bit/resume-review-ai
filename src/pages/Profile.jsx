import { FaUserCircle, FaEdit, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Profile() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
        User Profile
      </h1>

      {/* Profile Card */}
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-10">

        {/* Top Section */}
        <div className="flex flex-col items-center text-center">

          <FaUserCircle className="text-8xl text-blue-500" />

          <h2 className="text-3xl font-bold mt-4">Janhavi Mitre</h2>

          <p className="text-gray-500 mt-1">AI Resume Review User</p>

          <button className="mt-4 flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700">
            <FaEdit />
            Edit Profile
          </button>
        </div>

        {/* Info Section */}
        <div className="mt-10 space-y-6">

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-500" />
            <span>janhavi@example.com</span>
          </div>

          <div className="flex items-center gap-4">
            <FaGithub className="text-gray-700" />
            <span>github.com/janhavimitre110-bit</span>
          </div>

          <div className="flex items-center gap-4">
            <FaLinkedin className="text-blue-700" />
            <span>linkedin.com/in/janhavi</span>
          </div>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-10 text-center">

          <div className="bg-slate-100 p-4 rounded-xl">
            <h3 className="text-2xl font-bold text-blue-600">24</h3>
            <p className="text-gray-600">Resumes</p>
          </div>

          <div className="bg-slate-100 p-4 rounded-xl">
            <h3 className="text-2xl font-bold text-green-600">87%</h3>
            <p className="text-gray-600">Avg ATS</p>
          </div>

          <div className="bg-slate-100 p-4 rounded-xl">
            <h3 className="text-2xl font-bold text-purple-600">16</h3>
            <p className="text-gray-600">Job Matches</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;