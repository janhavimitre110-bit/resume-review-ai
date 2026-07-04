import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaLightbulb,
  FaDownload,
} from "react-icons/fa";

function Analysis() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
        Resume Analysis Report
      </h1>

      {/* ATS Score */}
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">ATS Score</h2>

        <div className="w-40 h-40 mx-auto rounded-full border-8 border-green-500 flex items-center justify-center">
          <span className="text-5xl font-bold text-green-600">
            87%
          </span>
        </div>

        <p className="mt-6 text-gray-600">
          Great! Your resume is highly ATS compatible.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-8">

        {/* Strengths */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-green-600 mb-4 flex items-center gap-2">
            <FaCheckCircle />
            Strengths
          </h2>

          <ul className="space-y-3">
            <li>✔ Strong technical skills</li>
            <li>✔ Good project experience</li>
            <li>✔ Clear resume formatting</li>
            <li>✔ Relevant certifications</li>
          </ul>
        </div>

        {/* Weaknesses */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-red-600 mb-4 flex items-center gap-2">
            <FaExclamationTriangle />
            Weaknesses
          </h2>

          <ul className="space-y-3">
            <li>❌ Missing measurable achievements</li>
            <li>❌ Skills section can be improved</li>
            <li>❌ No GitHub profile mentioned</li>
            <li>❌ No LinkedIn profile</li>
          </ul>
        </div>

      </div>

      {/* AI Suggestions */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

        <h2 className="text-2xl font-bold text-blue-600 mb-4 flex items-center gap-2">
          <FaLightbulb />
          AI Suggestions
        </h2>

        <ul className="space-y-3">
          <li>💡 Add quantifiable achievements.</li>
          <li>💡 Include GitHub repository links.</li>
          <li>💡 Mention leadership experience.</li>
          <li>💡 Add more job-specific keywords.</li>
        </ul>

      </div>

      {/* Download Button */}
      <div className="text-center mt-10">
        <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 flex items-center gap-3 mx-auto">
          <FaDownload />
          Download Report
        </button>
      </div>

    </div>
  );
}

export default Analysis;