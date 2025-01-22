import React from 'react'

const ProjectCard = ({projects}) => {
  return (
    <div>
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
    </div>
  )
}

export default ProjectCard
