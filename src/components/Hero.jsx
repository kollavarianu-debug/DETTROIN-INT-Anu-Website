import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section
      id="home"
      className="pt-20 h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(15,76,129,0.7), rgba(15,76,129,0.7)), url(${heroImage})`,
      }}
    >
      <div className="text-center text-white px-6">

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Empowering <br />
          Young Minds
        </h1>

        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Inspiring students to learn, lead, and succeed in a safe,
          innovative, and nurturing environment where every child reaches
          their full potential.
        </p>

        <div className="flex justify-center gap-5 flex-wrap">

          <button className="bg-yellow-400 text-black px-7 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition duration-300">
            Apply Now
          </button>

          <button className="border-2 border-white px-7 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition duration-300">
            Explore Campus
          </button>

        </div>

      </div>
    </section>
  );
}

export default Hero;