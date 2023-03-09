import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import Button from "@mui/material/Button";

const AppBarComp = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}>
                        Dashboard
                    </Typography>
                    <Button color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default AppBarComp;
