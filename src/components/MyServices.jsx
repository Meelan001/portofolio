import React from "react";
import { FaCode, FaSearch, FaMobileAlt } from "react-icons/fa";

function MyServices() {
  const services = [
    {
      title: "MERN Stack Development",
      description:
        "Building robust and scalable full-stack web applications using MongoDB, Express.js, React, and Node.js.",
      icon: <FaCode />,
      cta: "Learn More",
    },
    {
      title: "SEO Optimization",
      description:
        "Enhancing website visibility and traffic through effective SEO strategies and optimization techniques.",
      icon: <FaSearch />,
      cta: "Optimize Now",
    },
    {
      title: "Flutter Development",
      description:
        "Creating high-performance, cross-platform mobile applications with Flutter for iOS and Android.",
      icon: <FaMobileAlt />,
      cta: "Get Started",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-10">
          My Services
        </h2>
        <p className="text-center max-w-2xl mx-auto text-lg text-gray-700 mb-10">
          I offer professional services in web development, SEO optimization, and cross-platform mobile app development. Let's build your next project together!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white text-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition duration-300"
              style={{ minHeight: "300px" }}
            >
              <div className="text-5xl text-indigo-600 mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-indigo-700 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-12">{service.description}</p>
              <button
                className="absolute bottom-4 left-4 right-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 transition"
              >
                {service.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MyServices;
