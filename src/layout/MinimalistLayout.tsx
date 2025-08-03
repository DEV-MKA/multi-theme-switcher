import React from "react";
import styles from "./Layout.module.css";

export const MinimalistLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <main className={styles.minimalist}>
    {children}
  </main>
);
