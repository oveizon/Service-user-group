import React from "react";

const Services = () => {
  return (
    <div>
      <nav>
        <a href="#">
          <img src="/previous.png" alt="go back" />
        </a>
        <div>
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
            <img src="/account.png" alt="account" />
          </a>
        </div>
      </nav>

      <div>
        <div>
          <a href="#">Active Request(20)</a>
          <a href="#">Purchase Order</a>
          <a href="#">Service Rendered</a>
          <a href="#">Cancelled</a>
        </div>
        <h2>Recent Service Request</h2>

        <div>
          <div>
            <p>NAME</p>
            <p>SERVICE TYPE</p>
            <p>DATE</p>
            <p>LOCATION</p>
            <p>STATUS</p>
          </div>

          <div>
            <p>Farm A</p>
            <p>Pending</p>
            <p>2023-03-10</p>
            <p>Accra, Ghana</p>
            <p>Pending</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
