import React from 'react'
import { Grid, Typography } from '@mui/material'
import ImageCard from "../../components/layout/ImageCard/ImageCard"
import { useSelector } from "react-redux";
import { getSelectedBuilding } from '../../features/Home/homeSlice';
import Card from '../../components/layout/Card/Card'
import Label from "../../components/forms/Label/Label"
import EnergyReports from '../Reports/Utilities/Energy Reports/EnergyReports'
import HVACDeviceList from '../Reports/HVACEfficiency/HVACDeviceList/HVACDeviceList'
import ComfortLevels from '../Reports/Comfort/ComfortLevels/ComfortLevels'
import Header from '../Reports/Comfort/ComfortLevels/Header'
import { getDashboardSettings } from "../../features/Dashboard/dashboardSlice";
import ActiveAlerts from '../Reports/Utilities/Active Alerts/ActiveAlerts';
import { UTILITIES, COMFORT, HVAC_EFFICIENCY, DEVICESTATS } from "../Reports/constants";
import DeviceTypePie from '../Reports/Devices/DeviceTypePie';

const Home = () => {
    const building = useSelector(getSelectedBuilding);
    const dashboardSettings = useSelector(getDashboardSettings);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <ImageCard data={building} />
            </Grid>
            <Grid item xs={12}>
                <Grid container
                    direction="row"
                    spacing={3}>
                    {dashboardSettings && dashboardSettings.some(settings => settings.name === UTILITIES.ENERGY_REPORTS.HEADER) && (
                        <Grid item>
                            <Card
                                headerContent={<Typography sx={{ marginLeft: 4 }} variant="header2">
                                    {UTILITIES.ENERGY_REPORTS.HEADER}
                                </Typography>}
                                sx={{ width: "55vw", height: "50vh" }}
                                content={<EnergyReports
                                    sx={{ width: "15vw", height: "40vh" }}
                                    estimationSx={{ marginLeft: "-6.5em" }} />} />
                        </Grid>
                    )}
                    {dashboardSettings && dashboardSettings.some(settings => settings.name === DEVICESTATS.VALUE) && (
                        <Grid item>
                            <Card headerContent={<Typography sx={{ marginLeft: 4 }} variant="header2">
                                {DEVICESTATS.DEVICETYPE.HEADER}
                            </Typography>}
                                sx={{ width: "35vw", height: "50vh" }}
                                content={<DeviceTypePie />} />
                        </Grid>
                    )}
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container
                    direction="row"
                    spacing={3}>
                    {dashboardSettings && dashboardSettings.some(settings => settings.name === COMFORT.VALUE) && (
                        <Grid item>
                            <Card headerContent={<Header spacing={47} />}
                                sx={{ width: "55vw", height: "50vh" }}
                                content={<ComfortLevels
                                    chartSx={{ width: "50vw", height: "37vh" }}
                                    sliderSx={{ width: "30vw", height: "10vh" }}
                                    isSliderVisible={false}
                                    aspectRatio="3.2" />} />
                        </Grid>
                    )}
                    {/* {dashboardSettings && dashboardSettings.some(settings => settings.name === HVAC_EFFICIENCY.VALUE) && (
                        <Grid item>
                            <Card
                                headerContent={<Label sx={{ marginLeft: 4 }} label={HVAC_EFFICIENCY.HEADER} />}
                                sx={{ width: "55vw", height: "50vh" }}
                                content={<HVACDeviceList chartSx={{ width: "15vw", height: "37vh" }} />} />
                        </Grid>
                    )} */}
                    <Grid item>
                        <Card
                            sx={{ width: "35vw", height: "50vh" }}
                            headerContent={
                                <Grid container>
                                    <Grid xs={12} sm={12} md={12} lg={12}>
                                        <Label
                                            style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}
                                            sx={{ marginLeft: 4 }}
                                            label={UTILITIES.ACTIVE_ALERTS.HEADER} />
                                    </Grid>
                                    <Grid xs={12} sm={12} md={12} lg={12}>
                                        <Label
                                            style={{ fontSize: 12, fontWeight: '400', color: 'rgba(255, 255, 255, 0.74)' }}
                                            sx={{ marginLeft: 4 }}
                                            label={UTILITIES.ACTIVE_ALERTS.DESCRIPTION} />
                                    </Grid>
                                </Grid>
                            }
                            content={<ActiveAlerts />} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Home