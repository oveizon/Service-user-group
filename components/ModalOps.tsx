import React from "react";
import styles from "@/styles/component_style/ModalOps.module.scss";


interface Modal {
  [key: string | number]: any;
}

const ModalOps = () => {
  const modal: Modal[] = [
    {
      service: 12009,
      description: "Sept 20, 2023",
      quantity: 12345,
      unitPrice: "Delivered",
      total: "Total Price",
      id: 1,
    },
    {
      service: 12009,
      description: "Sept 20, 2023",
      quantity: 12345,
      unitPrice: "Delivered",
      total: "Total Price",
      id: 2,
    },



  ];
  const po: Modal[] = [
    {
      payement: "Visa Card (****69)",
      delivery: "65, Fulham road (454)625-7869",
      id: 1,
    },
    {
      payement: "Visa Card (****69)",
      delivery: "65, Fulham road (454)625-7869",
      id: 2,
    },




  ];

  return (
    <div className={styles.modal}>
      <div className={styles.main}>
        <h3>Operations &gt; Order History &gt; Waiting to be approved</h3>

        <div className={styles.tab1}>

          <div className={styles.headers}>
            <h4>Order Number</h4>
            <h4>Last Updated</h4>
            <h4>PO</h4>
            <h4>Status</h4>
            <h4>Total Price</h4>
          </div>

          <div className={styles.rowbody}>
            {modal.map((rend) => {
              return (
                <div className={styles.rows}>
                  <p key={rend.id}>{rend.service}</p>
                  <p>{rend.description}</p>
                  <p>{rend.quantity}</p>
                  <p>{rend.unitPrice}</p>
                  <p>{rend.total}</p>
                  <hr />
                </div>
              )
            })}
          </div>

        </div>

        <h2 className={styles.po}>PO List</h2>
        <div className={styles.tab2}>

          <div className={styles.headers}>
            <h4>Payement</h4>
            <h4>Delivery</h4>
          </div>

          <div className={styles.rowbody}>
            {po.map((po) => {
              return (
                <div className={styles.rows}>
                  <p key={po.id}>{po.payement}</p>
                  <p>{po.delivery}</p>
                  <hr />
                </div>
              )
            })}
          </div>

        </div>
        <div className={styles.buttons}>
          <button className={styles.cancel}>Decline</button>
          <button className={styles.accept}>Accept</button>
        </div>
      </div>



    </div>

  );
};
export default ModalOps;

