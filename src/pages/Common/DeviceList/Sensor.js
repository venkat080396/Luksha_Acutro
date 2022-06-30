import React, { useState } from 'react'
import { Grid } from '@mui/material';
import Dialog from '../../../components/dialog/Dialog';
import SensorChart from './SensorChart';
import LinearProgress from '../../../components/feedback/progress/linearProgress/LinearProgress';

const Sensor = (props) => {
    const { sensor, deviceRecId, sensorRecId } = props;
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
                <LinearProgress value={sensor.Name === "Pump 1 Vibration Sensor" ? 99.99 : 100} />
            </Grid>
        </Grid>
        <Dialog
            height={500}
            width={1200}
            open={openDialog}
            handleClose={() => setOpenDialog(false)}
            title="Sensor Information"
            content={<SensorChart deviceRecId={deviceRecId} sensorRecId={sensorRecId} />} />
    </>
    )
}

export default Sensor