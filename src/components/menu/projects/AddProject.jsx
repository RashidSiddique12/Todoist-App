import { useState } from "react";
import { Alert, Button, Modal, Spin } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addNewProject } from "../../../store/slice/projectSlice";
import { AddProjectEP } from "../../../api";

function AddProject({ from = "" }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [newProjectName, setNewProjectName] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await AddProjectEP(newProjectName, isFavorite);
      dispatch(addNewProject(res));
    } catch (error) {
      console.log(error);
      setError(error.message || "An error occurred");
    } finally {
      setLoading(false);
      setIsModalOpen(false);
      setNewProjectName("");
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleCloseError = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <Alert
          message={error}
          type="error"
          showIcon
          closable
          onClose={handleCloseError}
          style={{
            position: "fixed",
            top: 10,
            right: 10,
            width: "50%",
            zIndex: 9,
          }}
        />
      )}
      {/* <Spin spinning={loading}/>  */}
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
          <Spin spinning={loading} size="medium" />
        </form>
      </Modal>
      {/* </Spin> */}
    </div>
  );
}

export default AddProject;
