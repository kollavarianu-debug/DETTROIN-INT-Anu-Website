function Programs() {
  const programs = [
    {
      title: "Primary Education",
      description:
        "Building a strong academic foundation through interactive learning, creativity, and hands-on activities.",
      icon: "📚",
    },
    {
      title: "Secondary Education",
      description:
        "Preparing students with advanced academics, practical knowledge, leadership, and critical thinking skills.",
      icon: "🎓",
    },
    {
      title: "Sports & Activities",
      description:
        "Encouraging physical fitness, teamwork, music, dance, arts, and extracurricular excellence.",
      icon: "⚽",
    },
  ];

  return (
    <section
      id="programs"
      className="bg-gray-50 py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-5">
          Our Academic Programs
        </h2>

        <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-14 leading-8">
          We provide quality education that nurtures curiosity, innovation,
          confidence, and academic excellence for every student.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-3 hover:shadow-2xl transition-all duration-300"
            >

              <div className="text-6xl mb-6">
                {program.icon}
              </div>

              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                {program.title}
              </h3>

              <p className="text-gray-700 leading-8">
                {program.description}
              </p>

              <button className="mt-8 bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-900 transition duration-300">
                Learn More
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Programs;