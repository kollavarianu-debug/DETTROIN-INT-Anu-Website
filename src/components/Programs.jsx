function Programs() {
  const programs = [
    {
      title: "Primary Education",
      description:
        "Building a strong academic foundation through interactive learning and creativity.",
      icon: "📚",
    },
    {
      title: "Secondary Education",
      description:
        "Preparing students with advanced subjects, practical knowledge, and leadership skills.",
      icon: "🎓",
    },
    {
      title: "Sports & Activities",
      description:
        "Encouraging physical fitness, teamwork, music, dance, and extracurricular excellence.",
      icon: "⚽",
    },
  ];

  return (
    <section
     id="programs"
     className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
          Our Academic Programs
        </h2>

        <p className="text-center text-gray-600 mb-12">
          We provide quality education that inspires excellence in every student.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-5xl mb-5">
                {program.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-blue-900">
                {program.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {program.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Programs;