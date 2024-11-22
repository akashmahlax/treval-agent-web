const testimonials = [
    {
      name: "Rajinder Kaur",
      review:
        "Vinay Harri Travels made my trip to Amritsar unforgettable! Highly professional and friendly service.",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Amanpreet Singh",
      review:
        "Fantastic experience! The tour package was perfectly tailored to our needs.",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Simran Ahuja",
      review:
        "The best travel agency in Punjab! Highly recommend their transport services.",
      image: "https://via.placeholder.com/100",
    },
  ];
  
  const Testimonials = () => (
    <section
      id="testimonials"
      className="py-16 bg-primary dark:bg-gray-900 text-white"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-white dark:bg-gray-800 text-primary dark:text-white p-6 rounded-lg shadow-lg"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="mt-3 text-gray-700 dark:text-gray-300">
                "{testimonial.review}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
  export default Testimonials;  