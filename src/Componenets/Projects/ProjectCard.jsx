import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { useNavigate } from "react-router";


function ProjectCard({ imgPath, title, description, ghLink, demoLink, isBlog , techstack , Descriptionpath}) {
  const navigate = useNavigate();

  return (
    <div className="bg-card dark:bg-gray-800 rounded-lg shadow-lg border border-border dark:border-gray-700 transition-transform hover:scale-105 w-full max-w-sm h-[500px] flex flex-col justify-between">
      <div className="flex-grow flex flex-col">
        <img 
          onClick={() => navigate(Descriptionpath)}
          src={imgPath} 
          alt="card-img" 
          className="w-full h-48 object-cover cursor-pointer"
        />
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-1 text-foreground dark:text-white">
            {title}
          </h3>
          <p className="text-muted-foreground dark:text-gray-300 text-justify mb-1 leading-relaxed flex-grow">
            {description}
          </p>
          {/* Tech Stack Icons */}
          <div className="flex flex-wrap gap-2 mt-2">
            {Array.isArray(techstack) ? (
              techstack.map((tech, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <img
                    src={tech.src || tech}
                    alt={`tech-${index}`}
                    className="w-8 h-8 object-contain cursor-pointer"
                  />
                  <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {tech.name}
                  </span>
                </div>
              ))
            ) : (
              <img
                src={techstack}
                alt="tech-stack"
                className="w-8 h-8 object-contain"
              />
            )}
          </div>
        </div>
      </div>
      <div className="p-6 pt-0 flex gap-3 mt-1">
        <a
          href={ghLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-primary dark:bg-blue-700 text-primary-foreground dark:text-white rounded-md font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg dark:hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <Github className="mr-2" size={16} />
          {isBlog ? "Blog" : "GitHub"}
        </a>
        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component */}
        {!isBlog && demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-secondary dark:bg-gray-700 text-secondary-foreground dark:text-white rounded-md font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg hover:bg-secondary/90 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <ExternalLink className="mr-2" size={16} />
            Live
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;