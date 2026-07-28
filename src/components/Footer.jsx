function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          {/* School Info */}
          <div>
            <h2 className="text-3xl font-extrabold mb-4">
              The Kalyani School
            </h2>

            <p className="text-gray-300 leading-7">
              Empowering young minds through quality education,
              innovation, leadership, and lifelong learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <a
                  href="#home"
                  className="hover:text-yellow-400 transition duration-300"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-yellow-400 transition duration-300"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#programs"
                  className="hover:text-yellow-400 transition duration-300"
                >
                  Programs
                </a>
              </li>

              <li>
                <a
                  href="#gallery"
                  className="hover:text-yellow-400 transition duration-300"
                >
                  Gallery
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-yellow-400 transition duration-300"
                >
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Contact
            </h3>

            <p className="text-gray-300 mb-2">
              📍 Pune, Maharashtra, India
            </p>

            <p className="text-gray-300 mb-2">
              📞 +91 98765 43210
            </p>

            <p className="text-gray-300">
              ✉️ info@kalyanischool.edu.in
            </p>
          </div>

        </div>

        <hr className="border-gray-600 my-8" />

        <p className="text-center text-gray-400 text-sm">
          © 2026 The Kalyani School. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;