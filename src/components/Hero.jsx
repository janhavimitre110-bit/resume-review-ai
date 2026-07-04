function Hero() {
  return (
    <section className="bg-slate-100 py-24 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-6xl font-bold text-slate-800 leading-tight">
          AI-Powered Resume Review
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          Upload your resume, compare it with job descriptions, receive an ATS
          score, discover missing skills, and get AI-powered improvement
          suggestions.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700">
            Analyze Resume
          </button>

          <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;