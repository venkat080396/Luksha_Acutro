import React from "react";

import { Grid } from "@mui/material";
import Card from "../../../../components/layout/Card/Card";
import IconLabel from "../../../../components/forms/IconLabel/IconLabel";

const ActiveAlerts = () => {
    return (
        <>
            <Grid container>
                <Grid item sm={12} md={12} lg={12} xl={12}>
                    <Card sx={{ margin: 2, padding: 2 }} content={
                        <Grid container alignItems='center'>
                            <Grid item sx={6} sm={6} md={6} lg={6} xl={6}>
                                <Grid container >
                                    <Grid item sm={12} md={12} lg={12} xl={12}>
                                        <IconLabel label="Site 1234" />
                                    </Grid>
                                    <Grid item sm={12} md={12} lg={12} xl={12}>
                                        <IconLabel label="Device 1234" />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sx={3} sm={3} md={3} lg={3} xl={3}>
                                <Grid container>
                                    <Grid item sm={12} md={12} lg={12} xl={12}>
                                        <IconLabel style label="Level" />
                                    </Grid>
                                    <Grid item sm={12} md={12} lg={12} xl={12}>
                                        <IconLabel label="2" />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sx={3} sm={3} md={3} lg={3} xl={3}></Grid>
                        </Grid>
                    } />
                </Grid>
            </Grid>
        </>
    );
};

export default ActiveAlerts;
