// React
import React from "react";
import { Route, Routes } from "react-router-dom";

// MUI
import { CssBaseline, ThemeProvider } from "@mui/material";

// Layouts
import Sidebar from "./layouts/Sidebar";
import Topbar from "./layouts/Topbar";

// Pages
import Dashboard from "./pages/dashboard";
import Staff from "./pages/staff";

// Theme
import { ColorModeContext, useMode } from "./themes";

const App: React.FC = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/staff" element={<Staff />}></Route>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
