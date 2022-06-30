import React from "react";

import { Grid } from "@mui/material";

import DeviceCard from "../../../../components/devicecard/DeviceCard";

const ActiveAlerts = () => {
    return (
        <>
            <Grid container sx={{ overflow: 'auto', height: '40vh' }}>
                <DeviceCard name="Air Handling Unit 1" state={0} level={3} />
                <DeviceCard name="Swimming Pool Heating" state={1} level={2} />
                <DeviceCard name="Hot Water System 1" state={0} level={3} />
                <DeviceCard name="Swimming Pool Filtration" state={0} level={3} />
            </Grid>
        </>
    );
};

export default ActiveAlerts;
