import labImage from "../assets/images/lab.jpg";
import libraryImage from "../assets/images/library.jpg";
import sportsImage from "../assets/images/sports.jpg";
import aboutImage from "../assets/images/about.jpg";

function Facilities() {
  const facilities = [
    {
      title: "Modern Laboratories",
      image: labImage,
      description:
        "Well-equipped science and computer laboratories designed for practical learning and innovation.",
    },
    {
      title: "Digital Library",
      image: libraryImage,
      description:
        "A comprehensive collection of books, e-books, journals, and digital learning resources.",
    },
    {
      title: "Sports Complex",
      image: sportsImage,
      description:
        "Indoor and outdoor sports facilities that promote fitness, teamwork, and discipline.",
    },
    {
      title: "Smart Classrooms",
      image: aboutImage,
      description:
        "Interactive classrooms equipped with modern technology for engaging and effective learning.",
    },
  ];

  return (
    <section
      id="facilities"
      className="bg-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-5">
          Our Facilities
        </h2>

        <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto leading-8 mb-14">
          Our campus provides world-class facilities that support academic
          excellence, creativity, innovation, and the overall development of
          every student.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-3 hover:shadow-2xl transition-all duration-300"
            >

              <img
                src={facility.image}
                alt={facility.title}
                loading="lazy"
                className="w-full h-56 object-cover hover:scale-105 transition-all duration-500"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  {facility.title}
                </h3>

                <p className="text-gray-700 leading-7">
                  {facility.description}
                </p>

                <a
                  href="#gallery"
                  className="mt-6 inline-block bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-900 transition duration-300"
                >
                  Explore
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Facilities;