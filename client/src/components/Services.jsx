const services = [
    {
      title: "Custom Tour Packages",
      description:
        "Tailored tours to explore Punjab's rich heritage, vibrant culture, and scenic beauty.",
      icon: "🌏",
    },
    {
      title: "Hotel Bookings",
      description:
        "Comfortable and affordable stays at the best hotels across Punjab.",
      icon: "🏨",
    },
    {
      title: "Luxury Transport",
      description:
        "Travel in style with our premium vehicle services for individuals and groups.",
      icon: "🚖",
    },
  ];
  
  const Services = () => (
    <section id="services" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary dark:text-white mb-10">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-primary dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
  export default Services;  