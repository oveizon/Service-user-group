import Image from "next/image";
import React from "react";
import styles from "@/styles/RightSideBar.module.scss";

interface Articles {
  [key: string]: string;
}

const RightSideBar = () => {
  const articles: Articles[] = [
    {
      src: "/avatar.png",
      alt: "avatar",
      title: "New AgroTech Innovation",
      text: "Discover the latest AgroTech innovation for efficient farm management",
      href: "#",
    },
    {
      src: "/avatar.png",
      alt: "avatar",
      title: "Agricultural Policy Update",
      text: "Government announces new policy to support small-scale farmers",
      href: "#",
    },
    {
      src: "/avatar.png",
      alt: "avatar",
      title: "Climate Change Impact ",
      text: "Discover the latest AgroTech innovation for efficient farm management",
      href: "#",
    },
    {
      src: "/avatar.png",
      alt: "avatar",
      title: "Farming Best Practices",
      text: "Discover the latest AgroTech innovation for efficient farm management",
      href: "#",
    },
  ];

  return (
    <aside className={styles.aside}>
      <div className={styles.icons}>
        <div>
          {" "}
          <img src="/search-icon.png" alt="search" />{" "}
        </div>
        <div>
          <img src="/notifications.png" alt="notification" />
        </div>
      </div>
      {/* ================================================== */}
      <div className={styles.image}>
        {" "}
        <img src="/farmer.svg" alt="farmer"></img>{" "}
      </div>
      {/* ================================================== */}
      {articles.map((article) => {
        return (
          <div className={styles.article}>
            <div className={styles.article_details}>
              <div>
                <img src={article.src} alt={article.alt} />
              </div>
              <div>
                <p>{article.title}</p> <p>{article.text}</p>{" "}
                <a href={article.href}>Read more</a>
              </div>
            </div>
          </div>
        );
      })}
    </aside>
  );
};

export default RightSideBar;
