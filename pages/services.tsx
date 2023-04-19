import React from "react";
import styles from "@/styles/Services.module.scss";

interface Requests {
  [key: string]: string;
}

const Services = () => {
  const requests: Requests[] = [
    {
      name: "Farm A",
      service: "plowing",
      date: "2021-04-20",
      location: "accra, ghana",
      status: "Pending",
    },
    {
      name: "Farm A",
      service: "plowing",
      date: "2021-04-20",
      location: "accra, ghana",
      status: "Pending",
    },
    {
      name: "Farm A",
      service: "plowing",
      date: "2021-04-20",
      location: "accra, ghana",
      status: "Pending",
    },
    {
      name: "Farm A",
      service: "plowing",
      date: "2021-04-20",
      location: "accra, ghana",
      status: "Pending",
    },
  ];

  return (
    <div className={styles.services}>
      <nav className={styles.navbar}>
        <a href="#">
          <img src="/previous.png" alt="go back" />
        </a>
        <div>
          <a href="#">
            {" "}
            <img src="/question.png" alt="chat" />{" "}
          </a>
          <a href="#">
            {" "}
            <img src="/chat.png" alt="chat" />{" "}
          </a>
          <a href="#">
            {" "}
            <img src="/notifications.png" alt="notifications" />
          </a>
          <a href="#">
            {" "}
            <img src="/menu.png" alt="account" />
          </a>
        </div>
      </nav>

      <div className={styles.requests}>
        <div className={styles.links}>
          <a href="#">Active Request(20)</a>
          <a href="#">Purchase Order</a>
          <a href="#">Service Rendered</a>
          <a href="#">Cancelled</a>
        </div>
        <h2>Recent Service Request</h2>

        <div className={styles.headers}>
          <div>
            <p>NAME</p>
            <p>SERVICE TYPE</p>
            <p>DATE</p>
            <p>LOCATION</p>
            <p>STATUS</p>
          </div>

          <div>
            {requests.map((request) => {
              return (
                <>
                  <div>
                    <p>{request.name}</p>
                    <p>{request.service}</p>
                    <p>{request.date}</p>
                    <p>{request.location}</p>
                    <p>
                      {request.status}{" "}
                      <img src="/arrow-down.png" alt="down arrow" />{" "}
                    </p>
                  </div>
                  <hr />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
