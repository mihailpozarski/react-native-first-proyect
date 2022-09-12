import React from "react";
import { Modal } from "react-native";

const CustomModal = ({ visible, children, animationType, onRequestClose }) => {
  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={onRequestClose}  >
      {children}
    </Modal>
  );
}

export default CustomModal;