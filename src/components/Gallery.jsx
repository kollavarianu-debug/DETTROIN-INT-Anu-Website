import aboutImage from "../assets/images/about.jpg";
import labImage from "../assets/images/lab.jpg";
import libraryImage from "../assets/images/library.jpg";
import sportsImage from "../assets/images/sports.jpg";

function Gallery() {
  const images = [
    {
      image: aboutImage,
      title: "School Campus",
    },
    {
      image: labImage,
      title: "Science Laboratory",
    },
    {
      image: libraryImage,
      title: "Digital Library",
    },
    {
      image: sportsImage,
      title: "Sports Activities",
    },
  ];

  return (
    <section
      id="gallery"
      className="bg-gray-50 py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-5">
          Our Gallery
        </h2>

        <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto leading-8 mb-14">
          Explore memorable moments from our vibrant campus, classrooms,
          laboratories, library, and extracurricular activities.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {images.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-3xl shadow-lg group hover:shadow-2xl transition-all duration-300"
            >

              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-72 object-cover group-hover:scale-110 transition-all duration-500"
              />

              <div className="absolute inset-0 bg-black/30 flex items-end">

                <h3 className="text-white text-xl font-bold p-5">
                  {item.title}
                </h3>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Gallery;