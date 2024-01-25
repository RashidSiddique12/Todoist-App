import { PlusOutlined } from "@ant-design/icons";
import { Button, Input, Modal } from "antd";
import React, { useState } from "react";

function AddTask() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async (e) => {
    e.preventDefault();

    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="addTaskMn ">
      <p onClick={showModal}>
        <PlusOutlined className="icon" /> Add Task
      </p>
      <Modal
        // title="Add project"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Add task"
        
      >
        <form onSubmit={handleOk} className="addTaskModal">
          <Input
            placeholder="Task name"
            className="bold"
            // value={newcontent}
            // onChange={(e) => dispatch(setNewContent(e.target.value))}
          />
          <Input
            placeholder="Description"
            // value={newDescription}
            // onChange={(e) => dispatch(setNewDescription(e.target.value))}
          />
        </form>
      </Modal>
    </div>
  );
}

export default AddTask;
