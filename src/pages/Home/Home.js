import React from 'react'
import { Grid } from '@mui/material'
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
                    {dashboardSettings && dashboardSettings.some(settings => settings.name === "Energy Reports") && (
                        <Grid item>
                            <Card
                                headerContent={<Label sx={{ marginLeft: 4, marginBottom: 2, marginTop: 2 }} label="Energy Reports" />}
                                sx={{ width: "55vw", height: "50vh" }}
                                content={<EnergyReports sx={{ width: "15vw", height: "40vh" }} estimationSx={{ marginLeft: "-6.5em" }} />} />
                        </Grid>
                    )}
                    {dashboardSettings && dashboardSettings.some(settings => settings.name === "Comfort") && (
                        <Grid item>
                            <Card headerContent={<Header spacing={10} />}
                                sx={{ width: "35vw", height: "50vh" }}
                                content={<ComfortLevels chartSx={{ width: "30vw", height: "40vh" }} sliderSx={{ width: "30vw", height: "10vh" }} chartWidth={550} chartHeight={500} isSliderVisible={false} aspetRatio="2.1" />} />
                        </Grid>
                    )}
                </Grid>
            </Grid>
            {dashboardSettings && dashboardSettings.some(settings => settings.name === "HVAC Efficiency") && (
                <Grid item xs={12}>
                    <Card
                        headerContent={<Label sx={{ marginLeft: 4, marginBottom: 2, marginTop: 2 }} label="HVAC Device List" />}
                        sx={{ width: "55vw", height: "50vh" }}
                        content={<HVACDeviceList chartSx={{ width: "15vw", height: "37vh" }} />} />
                </Grid>
            )}
        </Grid>
    )
}

export default Home