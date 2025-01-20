import React from "react"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-32 min-h-screen flex items-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center  justify-between">
        <div className="md:w-2/3 mb-8 md:mb-0">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Milan Man Sing Khadka</h1>
          <motion.h2
            className="text-3xl md:text-4xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Frontend Developer
          </motion.h2>
          <motion.h2
            className="text-3xl md:text-4xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            SEO Expert
          </motion.h2>
          <p className="text-xl mb-8">Crafting beautiful, responsive, and SEO-friendly web experiences.</p>
          <a
            href="#contact"
            className="bg-white text-indigo-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/src/assets/milan.jpg"
            alt="milan"
            className="rounded-full shadow-2xl border-4 border-white"
            width={400}
            height={400}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero