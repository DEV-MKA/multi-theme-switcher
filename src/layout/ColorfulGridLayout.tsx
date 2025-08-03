import React from "react";
import styles from "./Layout.module.css";

export const ColorfulGridLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <main className={styles.colorfulGrid}>{children}</main>
);
