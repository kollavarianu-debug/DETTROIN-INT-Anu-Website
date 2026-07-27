function Contact() {
  return (
    <section 
    id="contact"
    className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900">
          Contact Us
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-12">
          We'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Details */}

          <div className="space-y-6">

            <div>
              <h3 className="text-xl font-semibold text-blue-900">
                Address
              </h3>
              <p className="text-gray-600">
                The Kalyani School, Pune, Maharashtra, India
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-900">
                Phone
              </h3>
              <p className="text-gray-600">
                +91 98765 43210
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-900">
                Email
              </h3>
              <p className="text-gray-600">
                info@kalyanischool.edu.in
              </p>
            </div>

          </div>

          {/* Contact Form */}

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg p-3"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-lg p-3"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border rounded-lg p-3"
            ></textarea>

           <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition duration-300">
  Send Message
</button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;