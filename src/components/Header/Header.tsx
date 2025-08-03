import React from "react";
import styles from "./Header.module.css";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import logo from '../../assets/react.svg'
import { Link } from "react-router-dom";

export const Header: React.FC = () => (
  <header className={styles.header}>
    <div className={styles.left}>
      <Link to="/">
        <img src={logo} className={styles.logo} alt="App logo" />
      </Link>
    </div>
    <ThemeSwitcher />
  </header>
);
