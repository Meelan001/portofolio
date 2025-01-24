import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setError(null);

    emailjs
      .sendForm(
        "service_geyh21p", // replace with your service ID
        "template_sgnq58w", // replace with your template ID
        e.target,
        "OpAy1D_TffXClsJjY" // replace with your public key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setMessageSent(true);
          setIsSending(false);
        },
        (error) => {
          console.error("Error:", error);
          setError(
            `There was an issue sending your message: ${error.text}. Please try again.`
          );
          setIsSending(false);
        }
      );
  };

  return (
    <section id="getintouch" className="py-20 bg-gray-50">
      <div id="getintouch" className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition duration-300"
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
        {messageSent && (
          <p className="text-green-500 text-center mt-4">Message sent successfully!</p>
        )}
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </div>
    </section>
  );
}

export default Contact;
