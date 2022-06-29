import React from "react";

import { Grid } from "@mui/material";

import DeviceCard from "../../../../components/devicecard/DeviceCard";

const ActiveAlerts = () => {
    return (
        <>
            <Grid container sx={{overflow:'auto',height:'40vh'}}>
                <DeviceCard state={0} level={3}/>
                <DeviceCard state={1} level={2}/>
                <DeviceCard state={0} level={3}/>
                <DeviceCard state={0} level={3}/>
            </Grid>
        </>
    );
};

export default ActiveAlerts;
