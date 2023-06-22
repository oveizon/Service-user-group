import React from "react";
import styles from "@/styles/component_style/ModalInvoice.module.scss";

const Invoice = () => {
  return (
    <div className={styles.modal}>
      <div>
        <h2>Thank You!</h2>
        <p>Payement Invoice has been confirmed!</p>
        <button>Set Reminder</button>
      </div>
    </div>
  );
};

export default Invoice;
