function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-2xl font-bold">
          The Kalyani School
        </h2>

        <p className="mt-3 text-gray-300">
          Empowering Young Minds For A Better Tomorrow
        </p>

        <div className="mt-6 flex justify-center gap-8">
          <a href="#" className="hover:text-yellow-400">Home</a>
          <a href="#" className="hover:text-yellow-400">About</a>
          <a href="#" className="hover:text-yellow-400">Programs</a>
          <a href="#" className="hover:text-yellow-400">Contact</a>
        </div>

        <p className="mt-8 text-sm text-gray-400">
          © 2026 The Kalyani School. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;