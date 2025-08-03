import React from "react";
import styles from "./Layout.module.css";
import { NavLink } from "react-router-dom";

export const DarkSidebarLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className={styles.darkLayout}>
    <aside className={styles.sidebar}>
      <nav>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? `${styles.sidebarLink} ${styles.activeSidebarLink}` : styles.sidebarLink
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? `${styles.sidebarLink} ${styles.activeSidebarLink}` : styles.sidebarLink
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? `${styles.sidebarLink} ${styles.activeSidebarLink}` : styles.sidebarLink
          }
        >
          Contact
        </NavLink>
      </nav>
    </aside>
    <main className={styles.darkContent}>{children}</main>
  </div>
);
