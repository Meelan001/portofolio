import React from "react";

function ContactDetail() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-black mb-8">Contact Details</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Name */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-indigo-600">Name</h3>
            <p className="mt-2 text-gray-700">Milan Man Sing Khadka</p>
          </div>

          {/* Email */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-indigo-600">Email</h3>
            <p className="mt-2 text-gray-700">mmggrr839@gmail.com</p>
          </div>

          {/* Phone */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-indigo-600">Phone</h3>
            <p className="mt-2 text-gray-700">+977- 9761846968</p>
          </div>

          {/* Location */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-indigo-600">Location</h3>
            <p className="mt-2 text-gray-700">Minbhawan, Kathmandu-Nepal</p>
          </div>

          {/* LinkedIn */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-indigo-600">LinkedIn</h3>
            <p className="mt-2 text-gray-700">
              <a
                href="https://www.linkedin.com/in/meelan-khadka-1736ab30b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                meelan khadka
              </a>
            </p>
          </div>

          {/* GitHub */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-indigo-600">GitHub</h3>
            <p className="mt-2 text-gray-700">
              <a
                href="https://github.com/Meelan001"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
               https://github.com/Meelan001
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactDetail;
