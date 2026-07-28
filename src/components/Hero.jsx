import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section
      id="home"
      className="pt-20 min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(15,76,129,0.7), rgba(15,76,129,0.7)), url(${heroImage})`,
      }}
    >
      <div className="text-center text-white px-6 max-w-5xl">

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Empowering <br />
          Young Minds
        </h1>

        <p className="text-lg md:text-xl leading-8 max-w-3xl mx-auto mb-10">
          Inspiring students to learn, lead, and succeed in a safe,
          innovative, and nurturing environment where every child reaches
          their full potential.
        </p>

        <div className="flex justify-center gap-5 flex-wrap">

          <a
            href="#contact"
            className="bg-yellow-400 text-black px-7 py-3 rounded-lg font-semibold shadow-lg hover:bg-yellow-300 hover:scale-105 transition-all duration-300 inline-block"
          >
            Apply Now
          </a>

          <a
            href="#gallery"
            className="border-2 border-white px-7 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 hover:scale-105 transition-all duration-300 inline-block"
          >
            Explore Campus
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;