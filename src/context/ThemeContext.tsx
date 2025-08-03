import React, { createContext, useContext, useState, useEffect } from "react";

export type ThemeType = "minimalist" | "dark" | "colorful";
interface ThemeContextType {
  theme: ThemeType;
  setTheme: (t: ThemeType) => void;
}
const ThemeContext = createContext<ThemeContextType>({
  theme: "minimalist",
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    return (localStorage.getItem("theme") as ThemeType) || "minimalist";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
