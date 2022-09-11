import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { AppBarComponent } from './Appbar';
import { DrawerLeft } from './DrawerLeft';
import { DrawerRight } from './DrawerRight';
import { Home } from '../Home';
import { Utilities, HVACEfficiency, Comfort, Exports } from '../Reports';
import { fetchAsyncLeftDrawerItems } from '../../pages/Dashboard/slice';
import { fetchAsyncBuildings } from '../../pages/Home/slice';
import { BuildingData,FloorView } from '../BuildingData';
import { Alerts, Connectors, Automations } from '../Alerts';
import { LEFT_DRAWER_ITEMS } from './constants';
import { DrawerHeader,StyledBox} from './style';

const Dashboard = (props) => {
    const [open, setOpen] = useState(false);
    const [openRight, setOpenRight] = useState(false);
    const [activePage, setactivePage] = useState('Home');
    const [selectedBuilding, setSelectedBuilding] = useState({})
    const [selectedFloor, setSelectedFloor] = useState({})
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
        <StyledBox>
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
            <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
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
        </StyledBox>
    );
}

export { Dashboard }