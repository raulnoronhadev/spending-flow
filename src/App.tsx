import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Topbar from './pages/global/Topbar';
import SideBar from './pages/global/Sidebar';

export default function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SideBar
        />
        <div className="app">
          <Topbar />
          <main className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
