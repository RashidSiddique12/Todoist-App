import React from "react";
import { Link } from "react-router-dom";
import ProjectAction from "./ProjectAction";

function ProjectList({ data }) {
  return (
    <div>
      {data &&
        data.map((project) => (
          <Link
            to={`/project/${project.id}`}
            state={{ ProjectName: project.name}}
            key={project.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {" "}
            <li>
              <div>
                <span>#</span>
                {project.name}
              </div>
              <div>
                <ProjectAction projectId={project.id} />
              </div>
            </li>
          </Link>
        ))}
    </div>
  );
}

export default ProjectList;
