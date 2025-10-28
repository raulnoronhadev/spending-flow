import { Box, IconButton, useTheme } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import SearchIcon from "@mui/icons-material/Search";

export default function Topbar() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display="flex" p={1} width="100%" height="60px" justifyContent="space-between">
            <Typography variant="h3" sx={{ p: 1 }}>
                Dashboard
            </Typography>
            <Box display="flex" width="100%" justifyContent="flex-end" alignItems="center">
                {/* SEARCH INPUT */}
                <Box
                    display="flex"
                    borderRadius="30px"
                    alignItems="center"
                    width="350px"
                    sx={{
                        p: 0.2,
                        bgcolor: colors.primary[400]
                    }}
                >
                    <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
                    <IconButton type="button" sx={{ p: 1 }}>
                        <SearchIcon />
                    </IconButton>
                </Box>
                {/* ICONS */}
                <Box display="flex">
                    <IconButton onClick={colorMode.toggleColorMode}>
                        {theme.palette.mode === "dark" ? (
                            <DarkModeOutlinedIcon />
                        ) : (
                            <LightModeOutlinedIcon />
                        )}
                    </IconButton>
                    <IconButton type="button" sx={{ p: 1 }}>
                        <NotificationsOutlinedIcon />
                    </IconButton>
                    <IconButton type="button" sx={{ p: 1 }}>
                        <AccountCircleIcon />
                    </IconButton>
                </Box>
            </Box>
        </Box >
    )
}