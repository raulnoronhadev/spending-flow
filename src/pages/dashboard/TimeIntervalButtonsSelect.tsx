import { Box, IconButton, useTheme } from "@mui/material";
import Button from '@mui/material/Button';
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function TimeIntervalButtonsSelect() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display="flex" p={0} width="100%" height="60px" justifyContent="flex-end" gap={2}>
            <Button variant="contained" sx={{ bgcolor: colors.blueAccent[600], borderRadius: 7, height: 35 }}>Day</Button>
            <Button variant="contained" sx={{ bgcolor: colors.blueAccent[600], borderRadius: 7, height: 35 }}>Week</Button>
            <Button variant="contained" sx={{ bgcolor: colors.blueAccent[600], borderRadius: 7, height: 35 }}>Month</Button>
            <Button variant="contained" sx={{ bgcolor: colors.blueAccent[600], borderRadius: 7, height: 35 }}>Year</Button>
            <Button variant="contained" sx={{ bgcolor: colors.blueAccent[600], borderRadius: 7, height: 35 }}>
                <CalendarMonthIcon />
            </Button>

        </Box >
    )
}