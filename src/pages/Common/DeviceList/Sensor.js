import React, { useState } from 'react'
import { Grid } from '@mui/material';
import Dialog from '../../../components/dialog/Dialog';
import SensorChart from './SensorChart';
import LinearProgress from '../../../components/feedback/progress/linearProgress/LinearProgress';

const Sensor = (props) => {
    const { sensor } = props;
    const [openDialog, setOpenDialog] = useState(false);
    return (<>
        <Grid container
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
            sx={{ paddingLeft: 3, paddingTop: "0.5em" }}
            onClick={() => setOpenDialog(true)}>
            <Grid item xs={4}>
                {sensor.Name}
            </Grid>
            <Grid xs={8} sx={{ width: "30em", paddingRight: "0.5em" }}>
                <LinearProgress value={100} />
            </Grid>
        </Grid>
        <Dialog
            open={openDialog}
            handleClose={() => setOpenDialog(false)}
            title="Sensor Information"
            content={<SensorChart />} />
    </>
    )
}

export default Sensor