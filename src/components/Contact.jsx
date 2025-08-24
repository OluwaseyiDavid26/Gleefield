import React from "react";

function Contact() {
  return (
    <section className="bg-white py-16" id="contact">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Text Section */}
        <div>
          <h2 className="text-5xl font-bold text-black mb-4">
            Let's build something exceptional together!
          </h2>
          <p className="text-gray-700 text-xl mb-6">
            Looking to grow, restructure or transform your business?
          </p>
        </div>

        {/* Right Form Section */}
        <div className="shadow-md p-6 rounded-lg border border-gray-200">
          <h3 className="text-2xl font-semibold text-green-700 mb-2">
            We would love to hear from you!
          </h3>
          <p className="text-gray-600 mb-4">
            Whether you have a question, need a proposal or want to explore how
            we can support your business goals, our team is ready to connect
            with you.
          </p>

          {/* Business Hours */}
          <span className="bg-[#A8E6CF] px-2 py- text-black font-semibold text-sm">
            Business Hours: 8AM to 4PM (WAT)
          </span>

          {/* Form */}
          <form className="mt-4 space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Your name"
                required
                className="w-full border text-gray-950 border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Your email"
                required
                className="w-full border text-gray-950 border-gray-300 rounded-md p-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>

            {/* Reason for reaching out */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Reason for reaching out
              </label>
              <select
                required
                className="w-full border border-gray-300 rounded-md p-2 text-black focus:ring-green-500 focus:border-green-500"
              >
                <option value="">Select a reason</option>
                <option>Consultation</option>
                <option>Training</option>
                <option>Others</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#008236] text-white font-semibold py-2 rounded-md hover:bg-green-800 transition"
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
