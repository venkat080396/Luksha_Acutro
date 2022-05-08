import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import ListItemButtonMUI from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Grid, Collapse, ListItem } from "@mui/material";
import { withStyles } from "@mui/styles";

import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import MicNoneIcon from "@mui/icons-material/MicNone";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import SettingsIcon from "@mui/icons-material/Settings";
import ContrastIcon from "@mui/icons-material/Contrast";
import { Link } from "react-router-dom";

const RoutsPath = ['/Dashboard', '/alerts', '/buildingData']

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "transparent",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

const ListItemButton = withStyles({
    root: {
        "&$selected": {
            backgroundColor: "red",
            color: "white",
            "& .MuiListItemIcon-root": {
                color: "white",
            },
        },
        "&$selected:hover": {
            backgroundColor: "purple",
            color: "white",
            "& .MuiListItemIcon-root": {
                color: "white",
            },
        },
        "&:hover": {
            backgroundColor: "blue",
            color: "white",
            "& .MuiListItemIcon-root": {
                color: "white",
            },
        },
    },
    selected: {},
})(ListItemButtonMUI);

export default function DrawerLeftComponent({ open, leftClose, leftOpen, updateActivePage }) {
    const [isOpenReport, setIsOpenReport] = React.useState(false);

    return (
        <Drawer
            variant="permanent"
            open={open}
            PaperProps={{
                sx: {
                    backgroundColor: "transparent",
                    color: "white",
                },
            }}
            onMouseEnter={leftOpen}
            onMouseLeave={leftClose}
        >
            <DrawerHeader>
                <Grid container flex={1} component={Box}>
                    <Grid item justifyContent={"flex-start"}>
                        <IconButton onClick={leftClose}>
                            {open ? <MenuIcon sx={{ color: "white" }} /> : <></>}
                        </IconButton>
                    </Grid>
                </Grid>
            </DrawerHeader>
            <List>
                {["Home", "Alerts", "Building Data"].map((text, index) => (
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? "initial" : "center",
                            px: 2.5,
                            mx: 1,
                            "&:hover": {
                                backgroundColor: "#4991BC",
                                borderRadius: 2,
                            },
                        }}
                        onClick={() => updateActivePage(text)} key={text}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : "auto",
                                justifyContent: "center",
                            }}
                        >
                            {index === 0 ? <HomeIcon sx={{ color: "white" }} /> : <></>}
                            {index === 1 ? <MicNoneIcon sx={{ color: "white" }} /> : <></>}
                            {index === 2 ? (
                                <AccountBalanceIcon sx={{ color: "white" }} />
                            ) : (
                                <></>
                            )}
                        </ListItemIcon>
                        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                ))}
            </List>
            <List>
                {["Reports"].map((text, index) => (
                    <ListItemButton
                        key={text}
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? "initial" : "center",
                            px: 2.5,
                            mx: 1,
                            "&:hover": {
                                backgroundColor: "#4991BC",
                                borderRadius: 2,
                            },
                        }}
                        onClick={() => setIsOpenReport(!isOpenReport)}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : "auto",
                                justifyContent: "center",
                            }}
                        >
                            {index === 0 ? <ContrastIcon sx={{ color: "white" }} /> : <></>}
                        </ListItemIcon>
                        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                ))}
                <Collapse in={isOpenReport}>
                    <List disablePadding component={Box} style={{ paddingLeft: 40 }}>
                        <ListItem button>
                            <ListItemText primary="Nested Item 1" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Nested Item 2" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Nested Item 3" />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
            <List>
                {["Buildings", "Setting"].map((text, index) => (
                    <ListItemButton
                        key={text}
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? "initial" : "center",
                            px: 2.5,
                            mx: 1,
                            "&:hover": {
                                backgroundColor: "#4991BC",
                                borderRadius: 2,
                            },
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : "auto",
                                justifyContent: "center",
                                "&:hover": {
                                    backgroundColor: "#4991BC",
                                },
                            }}
                        >
                            {index === 0 ? (
                                <CorporateFareIcon sx={{ color: "white" }} />
                            ) : (
                                <></>
                            )}
                            {index === 1 ? <SettingsIcon sx={{ color: "white" }} /> : <></>}
                        </ListItemIcon>
                        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                ))}
            </List>
        </Drawer>
    );
}
