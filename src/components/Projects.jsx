import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  const projects = [
    {
      title: "E-commerce Website",
      description: "A fully responsive e-commerce site with advanced SEO techniques",
      image: "/placeholder.svg?height=200&width=300",
      link: "/project1", // Example internal link for React Router
    },
    {
      title: "Portfolio Template",
      description: "A customizable portfolio template optimized for search engines",
      image: "/placeholder.svg?height=200&width=300",
      link: "/project2", // Example internal link for React Router
    },
    {
      title: "SEO Dashboard",
      description: "An interactive dashboard for tracking and improving SEO metrics",
      image: "/placeholder.svg?height=200&width=300",
      link: "/project3", // Example internal link for React Router
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link to={project.link} className="text-indigo-600 hover:underline">
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* Add View All Projects button/link */}
        <div className="mt-8 text-right">
          <Link
            to="/projects"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md font-medium shadow-md hover:bg-indigo-700 transition"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;
