import React from "react";
import styles from "@/styles/component_style/Modal.module.scss";

const Modal = () => {
  return (
    <div className={styles.modal}>
      <div>
        <h2>Reminder Alert</h2>
        <p>Are you sure you want to send a reminder?</p>
        <button>Decline</button>
        <button>Accept</button>
      </div>
    </div>
  );
};

export default Modal;
