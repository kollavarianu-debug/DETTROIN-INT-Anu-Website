function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-blue-900">
          Kalyani School
        </h1>

        {/* Navigation Links */}
        <ul className="flex gap-8 font-medium text-gray-700">

          <li>
            <a
              href="#home"
              className="hover:text-blue-700 transition duration-300 font-medium"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-blue-700 transition duration-300 font-medium"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#programs"
             className="hover:text-blue-700 transition duration-300 font-medium"
            >
              Programs
            </a>
          </li>

          <li>
            <a
              href="#facilities"
             className="hover:text-blue-700 transition duration-300 font-medium"
            >
              Facilities
            </a>
          </li>

          <li>
            <a
              href="#gallery"
              className="hover:text-blue-700 transition duration-300 font-medium"
            >
              Gallery
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-blue-700 transition duration-300 font-medium"
            >
              Contact
            </a>
          </li>

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;