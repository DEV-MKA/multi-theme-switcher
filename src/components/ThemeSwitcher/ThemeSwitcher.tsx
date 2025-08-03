import React from "react";
import styles from "./ThemeSwitcher.module.css";
import { useTheme } from "../../context/ThemeContext";

export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <select
      className={styles.switcher}
      aria-label="Switch theme"
      value={theme}
      onChange={e => setTheme(e.target.value as any)}
    >
      <option value="minimalist">Minimalist</option>
      <option value="dark">Dark</option>
      <option value="colorful">Colorful</option>
    </select>
  );
};
