import { EditOutlined } from "@ant-design/icons";
import { Modal, Switch } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditProjectEP } from "../../../api";
import { setEditProject } from "../../../store/slice/projectSlice";

function EditProject({ projectId }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { projectData } = useSelector((state) => state.project);
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState();
  const [editProjectName, setEditProjectName] = useState("");

  useEffect(() => {
    projectData &&
      projectData.map((project) => {
        if (project.id === projectId) {
          setIsFavorite(project.isFavorite);
          setEditProjectName(project.name);
        }
      });
  },[projectId]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    try {
        const res = await EditProjectEP(projectId,editProjectName, isFavorite)
        // console.log(res);
        dispatch(setEditProject({projectId, res}))
    } catch (error) {
        console.log(error)
    }finally{
        setIsModalOpen(false);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div onClick={showModal}>
        <span>
          <EditOutlined />
        </span>
        Edit
      </div>
      <Modal
        title="Edit Project"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Edit"
      >
        <hr style={{ marginBottom: "1.5rem" }} />
        <form onSubmit={handleOk} className="AddProjectForm">
          <label>Name</label> <br />
          <input
            type="text"
            value={editProjectName}
            onChange={(e) => setEditProjectName(e.target.value)}
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

export default EditProject;
