const ContactUs = () => (
    <section
      id="contact"
      className="py-16 bg-gray-50 dark:bg-gray-800 text-center"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-primary dark:text-white mb-6">
          Contact Us
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Ready to plan your next trip? Get in touch with us today!
        </p>
        <form className="max-w-md mx-auto bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 focus:outline-none"
            ></textarea>
          </div>
          <button className="w-full py-3 bg-primary text-white rounded-lg shadow-md hover:bg-accent transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
  
  export default ContactUs;  