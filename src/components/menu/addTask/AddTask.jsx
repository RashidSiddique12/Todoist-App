import {
  CaretDownOutlined,
  CheckOutlined,
  PlusOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Input, Modal, Popover, Select } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewTask,
  setNewContent,
  setNewDescription,
} from "../../../store/slice/taskSlice";
import { addTaskEP } from "../../../api";
import { Option } from "antd/es/mentions";

function AddTask() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { newcontent, newDescription } = useSelector((state) => state.tasks);

  const { projectData } = useSelector((state) => state.project);
  const [searchVal, setSearchVal] = useState("");
  const [selectedProject, setSelectedProject] = useState({ name: "inbox" });
  const dispatch = useDispatch();
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async (e) => {
    e.preventDefault();
    try {
      const data = await addTaskEP(
        selectedProject.id,
        newcontent,
        newDescription
      );
      // console.log("dd", data);
      dispatch(addNewTask({ id: data.projectId, data }));
    } catch (error) {
      console.log(error);
    }

    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const filterProjectData =
    projectData &&
    projectData.filter((project) =>
      project.name.toLowerCase().includes(searchVal.toLowerCase())
    );

  const content = (
    <div className="movetotask">
      <Input
        placeholder="Type a Project name"
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
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
          <li key={project.id} onClick={() => setSelectedProject(project)}>
            <div>
              <span>#</span>
              {project.name}
            </div>
            <div></div>
          </li>
        ))}
    </div>
  );
  return (
    <div className="addTaskMn ">
      <p onClick={showModal}>
        <PlusOutlined className="icon" /> Add Task
      </p>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Add task"
        okButtonProps={{
          disabled: newcontent.trim() !== "" ? false : true,
        }}
      >
        <form onSubmit={handleOk} className="addTaskModal">
          <Input
            placeholder="Task name"
            className="bold"
            value={newcontent}
            autoFocus={true}
            onChange={(e) => dispatch(setNewContent(e.target.value))}
          />
          <Input
            placeholder="Description"
            value={newDescription}
            onChange={(e) => dispatch(setNewDescription(e.target.value))}
          />
          <hr style={{margin:"auto -1.3rem auto -1.3rem", color:"rgb(220, 218, 218)" }} />
          <Popover content={content} trigger="click">
            <Button><span>#</span>
              {selectedProject.name}
              <span>
                <CaretDownOutlined />
              </span>
            </Button>
          </Popover>
        </form>
      </Modal>
    </div>
  );
}

export default AddTask;
