import React from "react";
import styles from "@/styles/Services.module.scss";
import Navbar from "@/components/Navbar";

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
      id: "1",
    },
    {
      name: "Farm A",
      service: "plowing",
      date: "2021-04-20",
      location: "accra, ghana",
      status: "Pending",
      id: "2",
    },
    {
      name: "Farm A",
      service: "plowing",
      date: "2021-04-20",
      location: "accra, ghana",
      status: "Pending",
      id: "3",
    },
    {
      name: "Farm A",
      service: "plowing",
      date: "2021-04-20",
      location: "accra, ghana",
      status: "Pending",
      id: "4",
    },
  ];

  return (
    <div className={styles.services}>
      <Navbar />
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
                    <p key={request.id}>{request.name}</p>
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
