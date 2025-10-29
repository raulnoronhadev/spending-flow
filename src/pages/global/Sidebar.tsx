import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { tokens } from "../../theme";
import { ListItemIcon, useTheme } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HelpIcon from '@mui/icons-material/Help';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

const drawerWidth = 240;

export default function ResponsiveDrawer() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const drawer = (
        <div>
            <List>
                <Box display="flex" flexDirection="column" marginBottom={4} marginLeft={2}>
                    <Typography variant="h6" component="h2" fontSize={13} marginLeft={1.5}
                        sx={{
                            color: colors.grey[100],
                        }}>
                        Data
                    </Typography>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary='Dashboard' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TrendingUpIcon />
                            </ListItemIcon>
                            <ListItemText primary='Invests Details' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <ReceiptLongIcon />
                            </ListItemIcon>
                            <ListItemText primary='bank Statement' />
                        </ListItemButton>
                    </ListItem>
                </Box>

                <Box display="flex" flexDirection="column" marginBottom={4} marginLeft={2}>
                    <Typography variant="h6" component="h2" fontSize={13} marginLeft={1.5}
                        sx={{
                            color: colors.grey[100],
                        }}>
                        Pages
                    </Typography>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <ContactsIcon />
                            </ListItemIcon>
                            <ListItemText primary='Contacts' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <CalendarMonthIcon />
                            </ListItemIcon>
                            <ListItemText primary='Calendar' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <HelpIcon />
                            </ListItemIcon>
                            <ListItemText primary='FAQ Page' />
                        </ListItemButton>
                    </ListItem>
                </Box>
            </List>
            <Divider />
        </div >
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor: colors.primary[400] },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box >
    );
}
