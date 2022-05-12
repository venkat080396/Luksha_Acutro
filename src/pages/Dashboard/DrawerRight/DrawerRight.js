import React from 'react'
import Drawer from "@mui/material/Drawer";
import SelectBox from "../../../components/forms/SelectBox/SelectBox"
import {
    getAllBuildings, getAllFloors, fetchAsyncFloors, setSelectedBuilding, setSelectedFloor
    , getSelectedBuilding, getSelectedFloor
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

    const onBuildingChange = (building) => {
        console.log("B", building)
        dispatch(setSelectedBuilding(building))
        dispatch(setSelectedFloor(""))
        if (building) {
            dispatch(fetchAsyncFloors(building.RecId))
        }
    }

    const onFloorChange = (value) => {
        dispatch(setSelectedFloor(value))
    }

    return (

        < ThemeProvider theme={theme} >
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
                <IconLabel sx={{ marginLeft: 3 }} icon={<FilterIcon height="40px" width="40px" />} label="FILTER" />
                <SelectBox value={selectedBuilding?.RecId} onSelectChange={onBuildingChange} label="Building" icon={<BuildingsIcon height="40px" width="40px" />} items={buildings} />
                <SelectBox value={selectedFloor?.RecId} onSelectChange={onFloorChange} label="Floor" icon={<FloorIcon height="40px" width="40px" />} items={floors} />
                <DateBox />
                <IconLabel sx={{ marginLeft: 3, marginTop: 4 }} icon={<SettingsIcon height="40px" width="40px" />} label="Dashboard Settings" />
            </Drawer>
        </ThemeProvider >
    )
}

export default DrawerRight