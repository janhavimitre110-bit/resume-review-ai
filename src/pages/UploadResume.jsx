function UploadResume() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-2xl">

        <h1 className="text-4xl font-bold text-center text-blue-600">
          Upload Your Resume
        </h1>

        <p className="text-center text-gray-600 mt-4">
          Upload your resume to receive ATS scoring, skill analysis,
          and AI-powered feedback.
        </p>

        <div className="mt-10 border-2 border-dashed border-blue-400 rounded-xl p-12 text-center">

          <p className="text-lg text-gray-500">
            Drag & Drop your Resume here
          </p>

          <p className="mt-2 text-gray-400">
            or
          </p>

          <button
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
          >
            Browse Files
          </button>

        </div>

        <button
          className="w-full mt-10 bg-green-600 text-white py-4 rounded-xl text-lg hover:bg-green-700"
        >
          Analyze Resume
        </button>

      </div>
    </div>
  );
}

export default UploadResume;