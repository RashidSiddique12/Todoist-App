import { DeleteOutlined, EditOutlined, HeartOutlined } from "@ant-design/icons";
import { Button, Popover } from "antd";
import React from "react";
import DeleteProject from "./DeleteProject";
import EditProject from "./EditProject";
import HandleFav from "../favorite/HandleFav";

function ProjectAction({ projectId }) {
  const content = (
    <div className="projectaction">
      <li>
        <EditProject projectId={projectId} />
      </li>
      <li>
        <HandleFav projectId={projectId} />
      </li>
      <li>
        <DeleteProject projectId={projectId} />
      </li>
    </div>
  );
  return (
    <div>
      <Popover
        placement="topLeft"
        content={content}
        title="Action"
        trigger="click"
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
        >
          ...
        </button>
      </Popover>
    </div>
  );
}

export default ProjectAction;
