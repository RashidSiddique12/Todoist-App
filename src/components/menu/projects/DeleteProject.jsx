import { DeleteOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React, { useState } from "react";
import { deleteProjectEP } from "../../../api";
import { useDispatch } from "react-redux";
import { deleteProject } from "../../../store/slice/projectSlice";

function DeleteProject({ projectId }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState("")
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    try {
      const res = await deleteProjectEP(projectId);
      if (res) {
        dispatch(deleteProject(projectId));
      }
    } catch (error) {
      console.log(error);
      setError(error.message)
    }
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div onClick={showModal}>
        <span>
          <DeleteOutlined />
        </span>
        Delete
      </div>
      <Modal
        title="Delete?"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="delete"
      >
        <p>
          This will permanently delete and all its tasks. This can’t be undone.
        </p>
      </Modal>
    </div>
  );
}

export default DeleteProject;
