import React from 'react'
import { Drawer as MuiDrawer, styled } from "@mui/material";
import { Header } from '../../../components/Navigation/Drawer/Header'
import NestedList from "../../../components/Inputs/NestedList/NestedList";

const drawerWidth = 300;
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
        width: `calc(${theme.spacing(7)} + 1px)`,
    },
});

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

const DrawerLeft = (props) => {
    const { open, leftOpen, leftClose } = props

    return (
        <Drawer
            variant="permanent"
            open={open}
            PaperProps={{
                sx: {
                    backgroundColor: "transparent",
                    color: "white"
                },
            }}
            onMouseEnter={leftOpen}
            onMouseLeave={leftClose}
        >
            <Header {...props} />
            <NestedList {...props} />
        </Drawer>
    )
}

export { DrawerLeft }