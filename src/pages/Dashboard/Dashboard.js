import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { makeStyles } from "@mui/styles";

import AppBar from "../../components/layout/navigation/Appbar/Appbar";
import DrawerLeftComponent from "../../components/layout/DrawerLeft/DrawerLeft";
import DrawerRightComponent from "../../components/layout/DrawerRight/DrawerRight";
import Home from "../Home/Home";
import Alerts from "../Alerts/Alerts";
import BuildingData from "../BuildingData/BuildingData";

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "transparent",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const useStyles = makeStyles({
    root: {
        backgroundRepeat: "no-repeat",
        objectFit: "fill",
        width: "100vw",
        // background: "linear-gradient(135deg, #1F1A3B, #344D5E)",
        color: "white",
        display: "flex",
        height: "100vh",
        overflow: "scroll",
    },
});

export default function Dashboard(props) {
    const [open, setOpen] = React.useState(false);
    const [openRight, setOpenRight] = React.useState(false);
    const [activePage, setactivePage] = useState('');
    const classes = useStyles();

    const updateActivePage = (activePage) => {
        setactivePage(activePage)
    }

    return (
        <Box className={classes.root}>
            <CssBaseline />
            <AppBar
                open={open}
                openRight={openRight}
                leftOpen={() => setOpen(true)}
                rightOpenClose={() => setOpenRight(!openRight)}
            />
            <DrawerLeftComponent
                open={open}
                leftClose={() => setOpen(false)}
                leftOpen={() => setOpen(true)}
                updateActivePage={updateActivePage}
            />
            <Box omponent="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                {activePage && activePage === "Home" &&
                    <Home />
                }
                {activePage && activePage === "Alerts" &&
                    <Alerts />
                }
                {activePage && activePage === "Building Data" &&
                    <BuildingData />
                }
            </Box>
            <DrawerRightComponent
                openRight={openRight}
                // building={props.dashbordDate.data}
                select={props.selectBuilding}
                selectFloor={props.selectFloor}
                closeDrawer={() => setOpenRight(false)}
                openDrawer={() => setOpenRight(true)}
            />
        </Box>
    );
}