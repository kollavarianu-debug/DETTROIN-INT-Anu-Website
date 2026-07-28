import aboutImage from "../assets/images/about.jpg";

function About() {
  return (
    <section
      id="about"
      className="bg-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* Left Side Image */}
        <div>
          <img
            src={aboutImage}
            alt="About School"
            className="w-full rounded-3xl shadow-2xl hover:scale-105 transition-all duration-500"
          />
        </div>

        {/* Right Side Content */}
        <div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">
            About Our School
          </h2>

          <p className="text-gray-700 text-lg leading-8 mb-6">
            Welcome to Kalyani School, where education meets excellence.
            We believe in nurturing young minds through innovative teaching,
            world-class facilities, and a caring environment that inspires
            creativity, leadership, confidence, and lifelong learning.
          </p>

          <div className="space-y-4 text-gray-700 text-lg">

            <p>✅ Experienced & Dedicated Faculty</p>

            <p>✅ Smart Digital Classrooms</p>

            <p>✅ Holistic Student Development</p>

            <p>✅ Safe, Secure & Friendly Campus</p>

          </div>

          <a
            href="#programs"
            className="mt-10 inline-block bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-900 hover:scale-105 transition-all duration-300"
          >
            Read More
          </a>

        </div>

      </div>
    </section>
  );
}

export default About;