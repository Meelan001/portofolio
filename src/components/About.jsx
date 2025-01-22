import React from "react"
import CvSection from "./CvSection"

function About() {
  return (
    <section id="about" className="py-20 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="/src/assets/milann.jpg"

              alt="John Doe"
              className="rounded-full w-64 h-64 mx-auto object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg mb-4">
            Hi, I'm Milan Man Sing Khadka, a passionate frontend developer with a keen eye for design and a solid understanding of SEO principles. With 1 year of experience, I specialize in creating responsive, user-friendly websites that not only look great but also perform well in search engines.


            </p>
            <p className="text-lg mb-4">
            My mission is to bridge the gap between visually stunning designs and technically sound implementations, ensuring that every project I work on is both aesthetically pleasing and optimized for search engines.
            </p>

            <CvSection />
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default About

