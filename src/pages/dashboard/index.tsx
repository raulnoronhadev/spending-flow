import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import TimeIntervalButtonsSelect from "./TimeIntervalButtonsSelect";

export default function Dashboard() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display="flex">
            <Box display="flex" width="100%">
                <TimeIntervalButtonsSelect />
            </Box>
        </Box >
    )
}