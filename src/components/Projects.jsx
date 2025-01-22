import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./projectCard/ProjectCard";

function Projects() {
  const handleOpenInNewTab = (e, link) => {
    e.preventDefault(); // Prevent default navigation
    window.open(link, "_blank", "noopener,noreferrer"); // Open in a new tab
  };

  const projects = [
    {
      title: "Nnine Solution Website",
      description: "A fully responsive e-learning and IT institute site with advanced SEO techniques",
      image: "/assets/n9logo.png",
      link: "https://nnine.training/", // External link
    },
    {
      title: "Personal Portfolio",
      description: "A customizable portfolio template optimized for search engines",
      image: "/assets/portofolio-logo.png",
      link: "/project2", // Internal link
    },
    {
      title: "chwassa jhol momo Website",
      description: "A fully responsive food ordering website with a customer site, admin panel, and super admin panel, which is in the process of being deployed as a SaaS project..",
      image: "/assets/jhol.png",
      link: "https://jholmomo-stg.nnine.training/", // Internal link
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-48 object-fit"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                {project.link.startsWith("http") ? (
                  // Use <a> tag for external links
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline"
                  >
                    View Project
                  </a>
                ) : (
                  // Use Link with custom onClick for internal links
                  <Link
                    to={project.link}
                    onClick={(e) => handleOpenInNewTab(e, project.link)}
                    className="text-indigo-600 hover:underline"
                  >
                    View Project
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Add View All Projects button/link */}
        <div className="mt-8 text-right">
          <Link
            to="/all-projects"
            
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
