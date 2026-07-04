function Features() {
  const features = [
    {
      title: "ATS Score",
      description: "Get an AI-generated ATS compatibility score for your resume."
    },
    {
      title: "Skill Matching",
      description: "Compare your skills with any job description instantly."
    },
    {
      title: "AI Suggestions",
      description: "Receive smart recommendations to improve your resume."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
        Powerful AI Features
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-blue-600">
              {feature.title}
            </h3>

            <p className="mt-4 text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;