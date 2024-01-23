import { useState } from "react";
import { Button, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addNewProject } from "../../../store/slice/projectSlice";
import { AddProjectEP } from "../../../api";

function AddProject({ from = "" }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [newProjectName, setNewProjectName] = useState("");
  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async (e) => {
    e.preventDefault();
    try {
      const res = await AddProjectEP(newProjectName, isFavorite);
      dispatch(addNewProject(res));
    } catch (error) {
      console.log(error);
    } finally {
      setIsModalOpen(false);
      setNewProjectName("");
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {from === "myproject" ? (
        <Button onClick={showModal} icon={<PlusOutlined />}>
          Add Project
        </Button>
      ) : (
        <PlusOutlined onClick={showModal} />
      )}

      <Modal
        title="Add project"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Add"
      >
        <hr style={{ marginBottom: "1.5rem" }} />
        <form onSubmit={handleOk} className="AddProjectForm">
          <label>Name</label> <br />
          <input
            type="text"
            value={newProjectName}
            onChange={(e) => setNewProjectName(e.target.value)}
          />
          <Switch
            checked={isFavorite}
            onChange={(checked) => setIsFavorite(checked)}
          />{" "}
          <label>Add to favorites</label>
        </form>
      </Modal>
    </div>
  );
}

export default AddProject;
