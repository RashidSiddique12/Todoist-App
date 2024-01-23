import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import React, { useState } from "react";
import ProjectList from "../menu/projects/ProjectList";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProjectAction from "../menu/projects/ProjectAction";
import AddProject from "../menu/projects/AddProject";

function MyProjects() {
  const { projectData } = useSelector((state) => state.project);
  const dispatch = useDispatch();
  const [newProjectName, setNewProjectName] = useState("");

  return (
    <div className="bodySection">
      <h1>My Projects</h1>
      <p>Free Plan</p>
      <Input
        size="large"
        placeholder="Search Projects"
        prefix={<SearchOutlined />}
        value={newProjectName}
        onChange={(e) => setNewProjectName(e.target.value)}
      />
      <div className="addDiv">
        {" "}
        <AddProject from={"myproject"}/>
      </div>

      <h3>{projectData && projectData.length} projects</h3>
      <div>
        {projectData &&
          projectData.map((project) => (
            <Link
              to={`/project/${project.id}`}
              key={project.id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              <li className="ProjectList">
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
    </div>
  );
}

export default MyProjects;