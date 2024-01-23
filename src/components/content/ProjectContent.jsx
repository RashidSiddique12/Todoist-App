import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ProjectContent() {
  const { id } = useParams();
  const { projectData } = useSelector((state) => state.project);
  return (
    <div>
      {projectData &&
        projectData.map((project) =>
          project.id === id ? (
            <div key={project.id}>
              {" "}
              <p key={project.id}>{project.name}</p>
            </div>
          ) : null
        )}
    </div>
  );
}

export default ProjectContent;
