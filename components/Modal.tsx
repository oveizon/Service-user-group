import React from "react";
import styles from "@/styles/Modal.module.scss";

const Modal = () => {
  return (
    <div className={styles.modal}>
      <div>
        <button>Accept</button>
        <button>Decline</button>
      </div>
    </div>
  );
};

export default Modal;
