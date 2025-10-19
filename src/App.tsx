import MiniDrawer from './components/layouts/MiniDrawer'
import { Box, Grid, Paper, Typography } from "@mui/material";

export default function App() {

  return (
    <>
      <MiniDrawer></MiniDrawer>
      <Box sx={{ display: "flex", height: "100vh", bgcolor: "#f7f7fb" }}></Box>
    </>
  )
}

