import { DeleteOutlined, EditOutlined, EllipsisOutlined, VerticalLeftOutlined } from "@ant-design/icons";
import { Popover } from "antd";
import TaskDelete from "./TaskDelete";

function TaskActions({taskId, projectId}) {
  const content = (
    <div className="projectaction">
      <li><span><EditOutlined/></span>Edit</li>
      <li><span><VerticalLeftOutlined/></span>Move to</li>
      <li> <TaskDelete taskId={taskId} projectId={projectId}/></li>
      <li></li>
    </div>
  );
  return (
    <div>
      <Popover content={content} title="Action" trigger="click">
        <button>
          <EllipsisOutlined />
        </button>
      </Popover>
    </div>
  );
}

export default TaskActions;
