import { ReactNode } from "react";
import styles from "../styles/component_style/Layout.module.scss";

import LeftSideBar from "./LeftSideBar";
import Invoice from "./ModalInvoice";
import ModalOps from "./ModalOps";

type LayoutProps = { children?: ReactNode };

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      {/* <ModalOps />*/}
      <LeftSideBar />
      {children}
    </div>
  );
}
