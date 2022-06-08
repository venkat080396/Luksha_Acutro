import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import AppBar from "../../components/layout/navigation/Appbar/Appbar";
import DrawerLeftComponent from "./DrawerLeft/DrawerLeft";
import DrawerRightComponent from "./DrawerRight/DrawerRight";
import Home from "../Home/Home";
import Alerts from "../Alerts/Alerts";
import Utilities from "../Reports/Utilities/Utilities";
import HVACEfficiency from "../Reports/HVACEfficiency/HVACEfficiency";
import Comfort from "../Reports/Comfort/Comfort";
import Exports from "../Reports/Exports/Exports";
import { fetchAsyncLeftDrawerItems } from "../../features/Dashboard/dashboardSlice";
import { fetchAsyncBuildings } from '../../features/Home/homeSlice';
import FloorView from "../BuildingData/FloorView/Container";
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
        marginBottom: "3%",
        // background: "linear-gradient(135deg, #1F1A3B, #344D5E)",
        color: "white",
        display: "flex",
        height: "100vh",
        overflowX: "hidden"
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
            case "Home":
                return <Home />
            case "Alerts":
                return <Alerts />
            case "Floor View":
                return <FloorView />
            case "Utilities/Consumption":
                return <Utilities />
            case "HVAC Efficiency":
                return <HVACEfficiency />
            case "Comfort":
                return <Comfort />
            case "Exports":
                return <Exports />
            case "Building Data":
                return <BuildingData />
            default:
                return <></>
        }
    }

    return (
        <Box className={classes.root}>
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