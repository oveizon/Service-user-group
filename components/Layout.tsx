import { ReactNode } from "react";
import styles from "../styles/Layout.module.scss";

import LeftSideBar from "./LeftSideBar";
import Modal from "./Modal";

type LayoutProps = { children?: ReactNode };

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      {/* insert Menu here */}
      <Modal />
      <LeftSideBar />
      {children}
      {/* <RightSideBar /> */}
    </div>
  );
}
