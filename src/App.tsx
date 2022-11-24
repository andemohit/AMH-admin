import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import Topbar from "./layouts/Topbar";
import { ColorModeContext, useMode } from "./themes";

const App: React.FC = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
