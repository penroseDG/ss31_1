import React from 'react';

interface ModalProps {
  taskToDelete: string | null;
  deleteTask: () => void;
  closeDeleteModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ taskToDelete, deleteTask, closeDeleteModal }) => {
  return (
    <div className="modal">
      <p>Bạn có chắc chắn muốn xóa công việc này không?</p>
      <button onClick={deleteTask}>Đồng ý</button>
      <button onClick={closeDeleteModal}>Hủy</button>
    </div>
  );
};

export default Modal;
