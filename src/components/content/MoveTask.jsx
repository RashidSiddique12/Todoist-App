import {
  CheckOutlined,
  UserOutlined,
  VerticalLeftOutlined,
} from "@ant-design/icons";
import { Avatar, Input, Popover } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { moveTaskEP } from "../../api";

function MoveTask({ taskId, oldProjectId }) {
  const { projectData } = useSelector((state) => state.project);
  const [inputVal, setInputVal] = useState("");

  const handleMoveTask = async (newProjId) => {
    console.log("taskId", taskId)
    console.log("old", oldProjectId)
    console.log("new",newProjId)
    try {
      const res = await moveTaskEP(taskId, newProjId);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const filterProjectData =
    projectData &&
    projectData.filter((project) =>
      project.name.toLowerCase().includes(inputVal.toLowerCase())
    );

  const content = (
    <div className="movetotask">
      <Input
        placeholder="Type a Project name"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <hr style={{ color: "lightgray" }} />
      <h4>
        {" "}
        <span>
          <Avatar size="small" icon={<UserOutlined />} />
        </span>
        My Projects
      </h4>
      {filterProjectData &&
        filterProjectData.map((project) => (
          <li
            key={project.id}
            onClick={() => handleMoveTask(project.id)}
          >
            <div>
              <span>#</span>
              {project.name}
            </div>
            <div>
              {project.id === oldProjectId ? (
                <CheckOutlined
                  style={{ color: "red", float: "end", margin: "0" }}
                />
              ) : null}
            </div>
          </li>
        ))}
    </div>
  );
  return (
    <div>
      <Popover content={content} trigger="click">
        <div>
          <span>
            <VerticalLeftOutlined />
          </span>
          Move to
        </div>
      </Popover>
    </div>
  );
}

export default MoveTask;
