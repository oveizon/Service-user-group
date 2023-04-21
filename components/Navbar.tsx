import React from "react";
import styles from "@/styles/Navbar.module.scss";

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
