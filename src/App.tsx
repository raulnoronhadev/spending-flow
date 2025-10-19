import MiniDrawer from './components/layouts/MiniDrawer'
import Header from './components/layouts/Header'
import { Box, Grid, Paper, Typography } from "@mui/material";

export default function App() {

  return (
    <>
      <MiniDrawer></MiniDrawer>
      <Header />
      <Box sx={{ display: "flex", height: "100vh", bgcolor: "#f7f7fb" }}>
      </Box>
    </>
  )
}

