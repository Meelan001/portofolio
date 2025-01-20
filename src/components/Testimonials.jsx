import React from "react";

const Testimonials = () => {
  const testimonials = [
    { id: 1, name: "Jane Doe", feedback: "Outstanding work! Exceeded expectations in every way." },
    { id: 2, name: "John Smith", feedback: "A pleasure to work with. Highly skilled and professional." },
    { id: 3, name: "Alice Brown", feedback: "Delivered on time and with exceptional quality." },
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white shadow-md rounded-md p-4">
              <p className="text-gray-600 mb-2">"{testimonial.feedback}"</p>
              <p className="text-gray-800 font-bold">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;