function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-50 py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-5">
          Contact Us
        </h2>

        <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto leading-8 mb-14">
          We'd love to hear from you. Get in touch with us for admissions,
          academic programs, or any other queries.
        </p>

        <div className="grid gap-12 md:grid-cols-2">

          {/* Contact Details */}

          <div className="space-y-8">

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-3">
                📍 Address
              </h3>

              <p className="text-gray-700 leading-7">
                The Kalyani School,
                <br />
                Pune, Maharashtra,
                <br />
                India
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-3">
                📞 Phone
              </h3>

              <p className="text-gray-700">
                +91 98765 43210
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-3">
                ✉️ Email
              </h3>

              <p className="text-gray-700">
                info@kalyanischool.edu.in
              </p>
            </div>

          </div>

          {/* Contact Form */}

          <form className="bg-white p-8 rounded-3xl shadow-xl space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-700"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-700"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-700"
            ></textarea>

            <button
              className="w-full bg-blue-700 text-white py-4 rounded-xl font-semibold hover:bg-blue-900 hover:scale-105 transition-all duration-300"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;