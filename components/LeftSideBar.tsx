import React from "react";
import styles from "@/styles/LeftSideBar.module.scss";
import { useRouter } from "next/router";

interface List {
  src: string;
  alt: string;
  title: string;
  value: string;
  path: string;
  id: number;
}

const LeftSideBar = () => {
  const list: List[] = [
    {
      src: "/overview-icon.png",
      alt: "overview",
      title: "Overview",
      value: "",
      path: "/",
      id: 1,
    },
    {
      src: "/service-request-icon.png",
      alt: "service request",
      title: "Service Request",
      value: "100+",
      path: "/services",
      id: 2,
    },
    {
      src: "/invoice-icon.png",
      alt: "invoice",
      title: "Invoice",
      value: "",
      path: "/invoice",
      id: 3,
    },
    {
      src: "/certificate-icon.png",
      alt: "certificate",
      title: "Job Certificate",
      value: "",
      path: "/certificate",
      id: 4,
    },
    {
      src: "/review-icon.png",
      alt: "review",
      title: "Review",
      value: "",
      path: "/review",
      id: 5,
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
                key={list.id}
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
