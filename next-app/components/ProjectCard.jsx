"use client";

import Image from "next/image";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
      <Image
        src={project.image}
        alt={project.title}
        width={500}
        height={300}
        className="w-full h-56 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
        <p className="text-gray-600 mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tech.map((item, index) => (
            <span
              key={index}
              className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="text-gray-700 hover:underline"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
