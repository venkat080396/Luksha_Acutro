import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Card, CardHeader, Grid, Avatar, Badge } from "@mui/material";
import { makeStyles } from "@mui/styles";

import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useSelector } from "react-redux";
import { getSelectedBuilding, getSelectedFloor } from '../../../../features/Home/homeSlice';
const drawerWidth = 300;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "transparent",
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const useStyles = makeStyles({
    root: {
        background: "linear-gradient(135deg, #344D5E, #1F1A3B)",
        zIndex: 10
    },
});

export default function AppBarComponent({
    open,
    openRight,
    leftOpen,
    rightOpenClose,
    floorName,
    buildingName,
}) {
    const classes = useStyles();
    const selectedBuilding = useSelector(getSelectedBuilding);
    const selectedFloor = useSelector(getSelectedFloor);

    return (
        <AppBar
            position="fixed"
            open={open}
            component={Box}
            elevation={0}
            sx={{
                zIndex: 10,
            }}
        >
            <Box className={classes.root}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={leftOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: "none" }),
                        }}
                    >
                        <MenuIcon sx={{ color: "white" }} />
                    </IconButton>
                    <Typography variant="body1" noWrap component="div">
                        <Typography variant="h6" fontWeight={"700"} display={"inline"}>
                            Your Dashboard &nbsp;
                        </Typography>
                        {selectedBuilding && selectedBuilding.Name ? `/ ${selectedBuilding.Name} ` : ""}
                        {selectedFloor && selectedFloor.Name ? `/ ${selectedFloor.Name} /` : ""}
                        {selectedBuilding && selectedBuilding.Name && selectedFloor && selectedFloor.Name ? "19/07/21 - 21/07/21" : ""}
                    </Typography>
                    <Box flex={1}></Box>
                    {!openRight && (
                        <>
                            <Box>
                                <Card
                                    sx={{ backgroundColor: "transparent", color: "white" }}
                                    elevation={0}
                                >
                                    <CardHeader
                                        avatar={
                                            <Avatar sx={{ bgcolor: "white", color: "red" }}>R</Avatar>
                                        }
                                        title={
                                            <Typography variant="body1" fontWeight={700}>
                                                Your Company Name
                                            </Typography>
                                        }
                                        subheader={
                                            <Typography variant="body2">Administrator</Typography>
                                        }
                                        action={
                                            <Grid container spacing={2} ml={2} alignItems="center">
                                                <Grid item>
                                                    <IconButton>
                                                        <PersonIcon sx={{ color: "white" }} />
                                                    </IconButton>
                                                </Grid>
                                                <Grid item>
                                                    <IconButton>
                                                        <Badge badgeContent={4} color="primary">
                                                            <NotificationsNoneIcon sx={{ color: "white" }} />
                                                        </Badge>
                                                    </IconButton>
                                                </Grid>
                                                <Grid item>
                                                    <IconButton
                                                        color="inherit"
                                                        aria-label="open drawer"
                                                        onClick={rightOpenClose}
                                                        edge="start"
                                                    >
                                                        <FilterAltIcon />
                                                    </IconButton>
                                                </Grid>
                                            </Grid>
                                        }
                                    />
                                </Card>
                            </Box>
                        </>
                    )}
                </Toolbar>
            </Box>
        </AppBar>
    );
}
