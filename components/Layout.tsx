import { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Layout.module.scss";

import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";

/* Menu Component here */
interface Link {
  title: string;
  path: string;
}
function Menu() {
  const links: Link[] = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Top Stories",
      path: "/news/",
    },
    {
      title: "Popular",
      path: "/news/popular",
    },
    {
      title: "Sections",
      path: "/sections",
    },
    {
      title: "Contacts",
      path: "/contacts",
    },
  ];
  const router = useRouter();
  return (
    <ul className={styles.navbar}>
      {links.map((link) => {
        const className =
          link.path === router.asPath ? styles.active : styles.link;
        return (
          <Link href={link.path} key={link.title} className={className}>
            {link.title}{" "}
          </Link>
        );
      })}
    </ul>
  );
}

type LayoutProps = { children?: ReactNode };

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      {/* insert Menu here */}

      <LeftSideBar />
      {children}
      {/* <RightSideBar /> */}
    </div>
  );
}
