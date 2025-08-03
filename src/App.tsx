import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { Header } from "./components/Header/Header";
import { AppRoutes } from "./routes/AppRoutes";
import { MinimalistLayout } from "./layout/MinimalistLayout";
import { DarkSidebarLayout } from "./layout/DarkSidebarLayout";
import { ColorfulGridLayout } from "./layout/ColorfulGridLayout";

function LayoutSelector({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  switch (theme) {
    case "minimalist": return <MinimalistLayout>{children}</MinimalistLayout>;
    case "dark": return <DarkSidebarLayout>{children}</DarkSidebarLayout>;
    case "colorful": return <ColorfulGridLayout>{children}</ColorfulGridLayout>;
    default: return <MinimalistLayout>{children}</MinimalistLayout>;
  }
}

export const App: React.FC = () => (
  <ThemeProvider>
    <BrowserRouter>
      <Header />
      <LayoutSelector>
        <AppRoutes />
      </LayoutSelector>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
