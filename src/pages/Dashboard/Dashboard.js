import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import Appbar from "./Appbar/Appbar";
import DrawerLeftComponent from "./DrawerLeft/DrawerLeft";
import DrawerRightComponent from "./DrawerRight/DrawerRight";
import Home from "../Home/Home";
import Utilities from "../Reports/Utilities/Utilities";
import HVACEfficiency from "../Reports/HVACEfficiency/HVACEfficiency";
import Comfort from "../Reports/Comfort/Comfort";
import Exports from "../Reports/Exports/Exports";
import { fetchAsyncLeftDrawerItems } from "../../features/Dashboard/dashboardSlice";
import { fetchAsyncBuildings } from '../../features/Home/homeSlice';
import FloorView from "../BuildingData/FloorView/Container";
import BuildingData from "../BuildingData/BuildingData";
import Alerts from "../Alerts/Container";
import Connectors from "../Alerts/Connectors/Index";
import Automations from "../Alerts/Automations/Automations";
import { LEFT_DRAWER_ITEMS } from './constants'

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
        marginBottom: "3%",
        // background: "linear-gradient(135deg, #1F1A3B, #344D5E)",
        color: "white",
        display: "flex",
        height: "100vh",
        overflowX: "hidden",
        scrollBehavior: "smooth",
        '&::-webkit-scrollbar': {
            width: '0.05em',
            backgroundColor: 'rgba(0,0,0,.5)',
        },
        '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'white',
            outline: '1px solid white',
        }
    },
});

const Dashboard = (props) => {
    const [open, setOpen] = React.useState(false);
    const [openRight, setOpenRight] = React.useState(false);
    const [activePage, setactivePage] = useState('Home');
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
    });

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
            <Appbar
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
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                {activePage && populateActivePage()}
            </Box>
            <DrawerRightComponent
                openRight={openRight}
                building={selectedBuilding?.RecId}
                floor={selectedFloor?.RecId}
                closeDrawer={() => setOpenRight(false)}
                openDrawer={() => setOpenRight(true)}
            />
        </Box>
    );
}

export default Dashboard