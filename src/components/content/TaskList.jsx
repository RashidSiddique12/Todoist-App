import { CheckCircleOutlined, EditOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import TaskActions from "./TaskActions";
import { Button, Input } from "antd";
import { editTaskEP } from "../../api";
import { useDispatch } from "react-redux";
import { updateTask } from "../../store/slice/taskSlice";

function TaskList({ task, projectId }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editTask, setEditTask] = useState(task.content);
  const [editDes, setEditDes] = useState(task.description);

  const dispatch = useDispatch();

  const handleEditTask = async () => {
    try {
      const res = await editTaskEP(task.id, editTask, editDes);
      console.log(res);
      dispatch(updateTask({taskId: task.id, projectId, res}));
    } catch (error) {
      alert(error.message);
    } finally {
      setIsEdit(false);
    }
  };

  return !isEdit ? (
    <>
      <div>
        <p>
          <CheckCircleOutlined style={{ fontSize: "1.2rem" }} /> {task.content}
        </p>
        <p className="taskDes">{task.description}</p>
      </div>
      <div className="taskAction">
        <button onClick={() => setIsEdit(true)}>
          <EditOutlined />
        </button>
        <TaskActions taskId={task.id} projectId={projectId} />
      </div>
    </>
  ) : (
    <div className="addTaskBox EditTask">
      <form onSubmit={handleEditTask}>
        <Input
          placeholder="Task name"
          className="bold"
          value={editTask}
          onChange={(e) => setEditTask(e.target.value)}
        />
        <Input
          placeholder="Description"
          value={editDes}
          onChange={(e) => setEditDes(e.target.value)}
        />
        <hr />
        <div className="addTaskAction">
          <Button className="cancle" onClick={() => setIsEdit(false)}>
            Cancle
          </Button>
          <Button type="submit" onClick={handleEditTask} className="add">
            Add Task
          </Button>
        </div>
      </form>
    </div>
  );
}

export default TaskList;
