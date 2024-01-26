import { DeleteOutlined, EditOutlined, EllipsisOutlined} from "@ant-design/icons";
import { Popover } from "antd";
import TaskDelete from "./TaskDelete";
import MoveTask from "./MoveTask";

function TaskActions({taskId, projectId}) {
  const content = (
    <div className="projectaction">
      {/* <li><span><EditOutlined/></span>Edit</li> */}
      <li><MoveTask taskId={taskId} oldProjectId={projectId}/></li> 
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
