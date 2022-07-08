import React, { useState } from 'react'
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
import Dialog from "../../../components/dialog/Dialog";
import Settings from '../Settings/Settings';
import { Box } from '@mui/material';
import { RIGHT_DRAWER_ITEMS } from '../constants'

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
    const [openSettings, setOpenSettings] = useState(false)
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
        if (label === RIGHT_DRAWER_ITEMS.FROM_DATE) {
            dispatch(setFromDate(value))
        }
        else {
            dispatch(setToDate(value))
        }
    }

    const onFloorChange = (value) => {
        dispatch(setSelectedFloor(value))
    }

    const HandleSettingsClick = () => {
        setOpenSettings(true)
    }

    const handleSettingsSubmit = () => {
        setOpenSettings(false)
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
                <Box marginTop={10}></Box>
                <IconLabel
                    sx={{ marginLeft: 3 }}
                    icon={<FilterIcon height="2.5em" width="2.5em" />}
                    label={RIGHT_DRAWER_ITEMS.FILTER} />
                <SelectBox
                    value={selectedBuilding}
                    onSelectChange={onBuildingChange}
                    label={RIGHT_DRAWER_ITEMS.BUILDING}
                    icon={<BuildingsIcon height="2.5em" width="2.5em" />}
                    items={buildings} />
                <SelectBox
                    value={selectedFloor}
                    onSelectChange={onFloorChange}
                    label={RIGHT_DRAWER_ITEMS.FLOOR}
                    icon={<FloorIcon height="2.5em" width="2.5em" />}
                    items={floors} />
                <DateBox
                    value={{ "fromDate": fromDate, "toDate": toDate }}
                    onDateChange={(value, label) => onDateChange(value, label)} />
                <IconLabel
                    sx={{ marginLeft: 3, marginTop: 4, cursor: "pointer" }}
                    icon={<SettingsIcon height="2.5em" width="2.5em" />}
                    label={RIGHT_DRAWER_ITEMS.DASHBOARD_SETTINGS}
                    onClick={HandleSettingsClick} />
                <Dialog
                    open={openSettings}
                    handleClose={() => setOpenSettings(false)}
                    title={RIGHT_DRAWER_ITEMS.DASHBOARD_SETTINGS}
                    content={<Settings
                        handleClose={() => setOpenSettings(false)}
                        handleSubmit={handleSettingsSubmit}
                    />}
                />
            </Drawer>
        </ThemeProvider>
    )
}

export default DrawerRight