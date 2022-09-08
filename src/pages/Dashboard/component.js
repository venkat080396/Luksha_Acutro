import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { AppBarComponent } from "./Appbar";
import { DrawerLeft } from "./DrawerLeft";
import { DrawerRight } from "./DrawerRight";
import { Home } from "../Home";
import { Utilities } from "../Reports/Utilities";
import { HVACEfficiency } from "../Reports/HVACEfficiency";
import { Comfort } from "../Reports/Comfort";
import { Exports } from "../Reports/Exports";
import { fetchAsyncLeftDrawerItems } from "../../pages/Dashboard/slice";
import { fetchAsyncBuildings } from "../../pages/Home/slice";
import { Container as FloorView } from "../BuildingData/FloorView";
import { BuildingData } from "../BuildingData";
import { Alerts } from "../Alerts";
import { Connectors } from "../Alerts/Connectors";
import { Automations } from "../Alerts/Automations";
import { LEFT_DRAWER_ITEMS } from "./constants"

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "transparent",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundRepeat: "no-repeat",
    objectFit: "fill",
    width: "100vw",
    marginBottom: "3%",
    // background: "linear-gradient(135deg, #1F1A3B, #344D5E)",
    color: "white",
    display: "flex",
    height: "100vh",
    overflowX: "hidden",
    scrollBehavior: "smooth",
    "&::-webkit-scrollbar": {
        width: "0.05em",
        backgroundColor: "rgba(0,0,0,.5)",
    },
    "&::-webkit-scrollbar-track": {
        boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
        webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
        backgroundColor: "white",
        outline: "1px solid white",
    }
}))

const useStyles = makeStyles({
    root: {
        backgroundRepeat: "no-repeat",
        objectFit: "fill",
        width: "100vw",
        marginBottom: "3%",
        // background: "linear-gradient(135deg, #1F1A3B, #344D5E)",
        color: "white",
        display: "flex",
        height: "100vh",
        overflowX: "hidden",
        scrollBehavior: "smooth",
        "&::-webkit-scrollbar": {
            width: "0.05em",
            backgroundColor: "rgba(0,0,0,.5)",
        },
        "&::-webkit-scrollbar-track": {
            boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
            webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
        },
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: "white",
            outline: "1px solid white",
        }
    },
});

const Dashboard = (props) => {
    const [open, setOpen] = React.useState(false);
    const [openRight, setOpenRight] = React.useState(false);
    const [activePage, setactivePage] = useState("Home");
    const [selectedBuilding, setSelectedBuilding] = useState({})
    const [selectedFloor, setSelectedFloor] = useState({})
    const classes = useStyles();
    const dispatch = useDispatch();

    const updateActivePage = (activePage) => {
        setactivePage(activePage)
    }

    useEffect(() => {
        dispatch(fetchAsyncLeftDrawerItems());
        dispatch(fetchAsyncBuildings());
    }, []);

    const populateActivePage = () => {

        switch (activePage) {
            case LEFT_DRAWER_ITEMS.HOME:
                return <Home />
            case LEFT_DRAWER_ITEMS.ALERTS:
                return <Alerts />
            case LEFT_DRAWER_ITEMS.FLOOR_VIEW:
                return <FloorView />
            case LEFT_DRAWER_ITEMS.UTILITIES:
                return <Utilities />
            case LEFT_DRAWER_ITEMS.HVAC_EFFICIENCY:
                return <HVACEfficiency />
            case LEFT_DRAWER_ITEMS.COMFORT:
                return <Comfort />
            case LEFT_DRAWER_ITEMS.EXPORTS:
                return <Exports />
            case LEFT_DRAWER_ITEMS.BUILDING_DATA:
                return <BuildingData />
            case LEFT_DRAWER_ITEMS.CONNECTORS:
                return <Connectors />
            case LEFT_DRAWER_ITEMS.AUTOMATIONS:
                return <Automations />
            default:
                return <></>
        }
    }

    return (
        <Box className={classes.root}>
            <AppBarComponent
                open={open}
                openRight={openRight}
                leftOpen={() => setOpen(true)}
                rightOpenClose={() => setOpenRight(!openRight)}
            />
            <DrawerLeft
                open={open}
                leftClose={() => setOpen(false)}
                leftOpen={() => setOpen(true)}
                updateActivePage={updateActivePage}
            />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                {activePage && populateActivePage()}
            </Box>
            <DrawerRight
                openRight={openRight}
                building={selectedBuilding?.RecId}
                floor={selectedFloor?.RecId}
                closeDrawer={() => setOpenRight(false)}
                openDrawer={() => setOpenRight(true)}
            />
        </Box>
    );
}

export { Dashboard }