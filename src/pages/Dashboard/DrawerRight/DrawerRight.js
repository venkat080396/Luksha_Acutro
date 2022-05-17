import React from 'react'
import Drawer from "@mui/material/Drawer";
import SelectBox from "../../../components/forms/SelectBox/SelectBox"
import {
    getAllBuildings, getAllFloors, fetchAsyncFloors, setSelectedBuilding, setSelectedFloor
    , getSelectedBuilding, getSelectedFloor, setFromDate, setToDate, getFromDate, getToDate
} from '../../../features/Home/homeSlice';
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ReactComponent as BuildingsIcon } from "../../../assets/icons/Buildings.svg"
import { ReactComponent as FloorIcon } from "../../../assets/icons/Floor.svg"
import { ReactComponent as FilterIcon } from "../../../assets/icons/Filter.svg"
import { ReactComponent as SettingsIcon } from "../../../assets/icons/Settings.svg"
import DateBox from '../../../components/forms/DateBox/DateBox';
import IconLabel from "../../../components/forms/IconLabel/IconLabel"

const theme = createTheme({
    palette: {
        primary: {
            main: "#fff",
            contrastText: "#fff",
        },
        text: {
            primary: "#fff",
        },
    },
});

const DrawerRight = (props) => {
    const { closeDrawer, openRight } = props
    const dispatch = useDispatch();
    const buildings = useSelector(getAllBuildings);
    const floors = useSelector(getAllFloors);
    const selectedBuilding = useSelector(getSelectedBuilding);
    const selectedFloor = useSelector(getSelectedFloor);
    const fromDate = useSelector(getFromDate);
    const toDate = useSelector(getToDate);

    const onBuildingChange = (building) => {
        dispatch(setSelectedBuilding(building))
        dispatch(setSelectedFloor(""))
        if (building) {
            dispatch(fetchAsyncFloors(building.RecId))
        }
    }

    const onDateChange = (value, label) => {
        if (label === "From") {
            dispatch(setFromDate(value))
        }
        else {
            dispatch(setToDate(value))
        }
    }

    const onFloorChange = (value) => {
        dispatch(setSelectedFloor(value))
    }

    return (

        <ThemeProvider theme={theme}>
            <Drawer
                PaperProps={{
                    sx: {
                        background: "linear-gradient(135deg, #1F1A3B, #344D5E)",
                        color: "white",
                        zIndex: 100000
                    },
                }}
                anchor="right"
                onClose={closeDrawer}
                open={openRight}
            >
                <IconLabel sx={{ marginLeft: 3 }} icon={<FilterIcon height="2.5em" width="2.5em" />} label="FILTER" />
                <SelectBox value={selectedBuilding?.RecId} onSelectChange={onBuildingChange} label="Building" icon={<BuildingsIcon height="2.5em" width="2.5em" />} items={buildings} />
                <SelectBox value={selectedFloor?.RecId} onSelectChange={onFloorChange} label="Floor" icon={<FloorIcon height="2.5em" width="2.5em" />} items={floors} />
                <DateBox value={{ "fromDate": fromDate, "toDate": toDate }} onDateChange={(value, label) => onDateChange(value, label)} />
                <IconLabel sx={{ marginLeft: 3, marginTop: 4 }} icon={<SettingsIcon height="2.5em" width="2.5em" />} label="Dashboard Settings" />
            </Drawer>
        </ThemeProvider>
    )
}

export default DrawerRight