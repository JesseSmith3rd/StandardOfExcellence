export default function Contact() {
  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
      <p className="mt-4 text-lg text-gray-600">Have a question? Fill out the form below.</p>

      {/* Contact Form (Formspree Integration) */}
      <form
        action="https://formspree.io/f/xqaewyqa" // Replace with your actual Formspree URL
        method="POST"
        className="mt-8 max-w-lg mx-auto bg-white shadow-md rounded-lg p-6"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Message</label>
          <textarea
            name="message"
            required
            rows={4}
            className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>

      {/* Contact Information */}
      <div className="mt-8 text-gray-700">
        <p>Email: <a href="mailto:info@standardofexcellence.org" className="text-blue-600 hover:underline">info@standardofexcellence.org</a></p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Nonprofit Street, Atlanta, GA</p>
      </div>
    </div>
  );
}
