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
        "Well-equipped science and computer labs for practical learning.",
    },
    {
      title: "Digital Library",
      image: libraryImage,
      description:
        "A rich collection of books, journals, and digital learning resources.",
    },
    {
      title: "Sports Complex",
      image: sportsImage,
      description:
        "Indoor and outdoor sports facilities for physical development.",
    },
    {
      title: "Smart Classrooms",
      image: aboutImage,
      description:
        "Technology-enabled classrooms that make learning interactive.",
    },
  ];

  return (
    <section 
    id="facilities"
     className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-900">
          Our Facilities
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-12">
          We provide world-class infrastructure to support every student's
          academic and personal growth.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  {facility.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Facilities;