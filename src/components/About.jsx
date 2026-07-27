import aboutImage from "../assets/images/about.jpg";

function About() {
  return (
    <section
    id="about"
     className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side Image */}
        <div>
          <img
            src={aboutImage}
            alt="About School"
            className="rounded-2xl shadow-xl w-full"
          />
        </div>

        {/* Right Side Content */}
        <div>
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            About Our School
          </h2>

          <p className="text-gray-600 leading-8 mb-6">
            Welcome to Kalyani School, where education meets excellence.
            We believe in nurturing young minds through innovative teaching,
            modern facilities, and a caring environment that encourages
            creativity, leadership, and lifelong learning.
          </p>

          <div className="space-y-3 text-gray-700">

            <p>✅ Experienced Faculty</p>

            <p>✅ Smart Classrooms</p>

            <p>✅ Holistic Development</p>

            <p>✅ Safe & Friendly Campus</p>

          </div>

        <button className="mt-8 bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition duration-300">
  Read More
</button>

        </div>

      </div>
    </section>
  );
}

export default About;