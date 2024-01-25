import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addTaskEP, getTasksEP } from "../../api";
import {
  addNewTask,
  displayTasks,
  setNewContent,
  setNewDescription,
} from "../../store/slice/taskSlice";
import { useLocation } from "react-router-dom";
import LoadingEle from "../handler/LoadingEle";
import { Button, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import TaskList from "./TaskList";
import { Header } from "antd/es/layout/layout";
import ProjectAction from "../menu/projects/ProjectAction";
function ProjectContent() {
  const location = useLocation();
  const ProjectName = location.state?.ProjectName || "Task";
  // console.log(ProjectName);

  const { id } = useParams();
  const dispatch = useDispatch();
  const { tasksData, loading, newcontent, newDescription } = useSelector(
    (state) => state.tasks
  );
  const tasks = tasksData[id];
  let isLoading = loading[id];
  console.log(tasks);

  const [isopenBox, setOpenBox] = useState(false);

  const fetchProjectTask = async () => {
    const data = await getTasksEP(id);
    dispatch(displayTasks({ id, data }));
  };

  useEffect(() => {
    fetchProjectTask();
  }, [id]);

  const handleAddTask = async (e) => {
    console.log("dee");
    e.preventDefault();
    try {
      const data = await addTaskEP(id, newcontent, newDescription);
      console.log(data);
      dispatch(addNewTask({ id, data }));
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };
  return (
    <>
      <Header
        className="projectHeader"
        style={{
          background: "white",
        }}
      >
        <h3>My Projects /</h3>
        <div>
          <ProjectAction projectId={id} />
        </div>
      </Header>
      <div className="bodySection">
        <h1>{ProjectName}</h1>
        {isLoading ? (
          <LoadingEle size={100} />
        ) : (
          <>
            <div>
              {tasks && tasks.length > 0
                ? tasks.map((task) => (
                    <div key={task.id}>
                      <li className="taskList">
                        <TaskList task={task} projectId={id} />
                      </li>
                      <hr />
                    </div>
                  ))
                : null}
            </div>
            {isopenBox ? (
              <div className="addTaskBox">
                <form onSubmit={handleAddTask}>
                  <Input
                    placeholder="Task name"
                    className="bold"
                    value={newcontent}
                    onChange={(e) => dispatch(setNewContent(e.target.value))}
                  />
                  <Input
                    placeholder="Description"
                    value={newDescription}
                    onChange={(e) =>
                      dispatch(setNewDescription(e.target.value))
                    }
                  />
                  <hr />
                  <div className="addTaskAction">
                    <Button
                      className="cancle"
                      onClick={() => setOpenBox(false)}
                    >
                      Cancle
                    </Button>
                    <Button
                      type="submit"
                      onClick={handleAddTask}
                      className="add"
                      disabled={false}
                    >
                      Add Task
                    </Button>
                  </div>
                </form>
              </div>
            ) : (
              <li className="taskList addTask" onClick={() => setOpenBox(true)}>
                {" "}
                <PlusOutlined className="icon" /> Add Task
              </li>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default ProjectContent;
