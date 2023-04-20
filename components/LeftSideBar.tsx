import React from "react";
import styles from "@/styles/LeftSideBar.module.scss";
import { useRouter } from "next/router";
import { link } from "fs";

interface List {
  src: string;
  alt: string;
  title: string;
  value: string;
  path: string;
}

const LeftSideBar = () => {
  const list: List[] = [
    {
      src: "/overview-icon.png",
      alt: "overview",
      title: "Overview",
      value: "",
      path: "/home",
    },
    {
      src: "/service-request-icon.png",
      alt: "service request",
      title: "Service Request",
      value: "100+",
      path: "/services",
    },
    {
      src: "/invoice-icon.png",
      alt: "invoice",
      title: "Invoice",
      value: "",
      path: "/invoice",
    },
    {
      src: "/certificate-icon.png",
      alt: "certificate",
      title: "Certificate",
      value: "",
      path: "/",
    },
    {
      src: "/review-icon.png",
      alt: "review",
      title: "Review",
      value: "",
      path: "/",
    },
  ];

  const router = useRouter();
  return (
    <nav className={styles.nav}>
      <div>
        <img src="/logo.png" alt="logo" />
      </div>

      <hr />

      <p>Hello User</p>

      <div className={styles.nav_items}>
        <ul>
          {list.map((list) => {
            const className =
              list.path === router.asPath ? styles.active : styles.link;
            return (
              <a
                href={list.path}
                className={`${styles.list_items} ${className}`}
              >
                <img src={list.src} alt={list.alt} /> <p>{list.title}</p>{" "}
                <span>{list.value}</span>
              </a>
            );
          })}
        </ul>
      </div>

      <hr />

      <div className={styles.nav_items}>
        <ul>
          <a href="#" className={`${styles.list_items}`}>
            <img src="/settings-icon.png" alt="settings" /> <p>Settings</p>{" "}
          </a>
          <a href="#" className={`${styles.list_items}`}>
            <img src="/contact_support-icon.png" alt="settings" />{" "}
            <p>Support</p>{" "}
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default LeftSideBar;
