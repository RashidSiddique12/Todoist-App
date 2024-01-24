import { DeleteOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React, { useState } from "react";
import { deleteTaskEP } from "../../api";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../store/slice/taskSlice";

function TaskDelete({ taskId, projectId }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    try {
      const res = await deleteTaskEP(taskId);
      console.log(res);
      if (res === true) {
        dispatch(deleteTask({ taskId, projectId }));
      }
    } catch (error) {
      alert(error.message);
    } finally {
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
        <p>Are you sure you want to Delete.</p>
      </Modal>
    </div>
  );
}

export default TaskDelete;
