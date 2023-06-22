import React from "react";
import styles from "@/styles/component_style/RightSideBar.module.scss";


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
    <>

      <aside className={styles.aside}>
        <nav className={styles.navbar}>
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

        {/* ================================================== */}
        <div className={styles.image}>
          {" "}
          <img src="/farmer1.png" alt="farmer"></img>{" "}
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
    </>
  );
};

export default RightSideBar;
