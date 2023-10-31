import React from "react";
import projectData from "../../public/projects.json";
import ProjectCard from "@/components/ProjectCard";

const projects = () => {
  return (
    <div>
      <h1>My Pojects</h1>
      {projectData.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default projects;
