import React, { useState } from 'react'
import { Grid } from '@mui/material'
import { ReactComponent as SettingsIcon } from "../../../assets/icons/Settings.svg"
import { ReactComponent as TemperatureIcon } from "../../../assets/icons/Temperature.svg"
import Dialog from '../../../components/dialog/Dialog'
import DeviceInformation from "./DeviceInformation"
import { getRandomValuesWithinRange } from "../../../common/Utils"

const Device = (props) => {
    const { device, isActiveDevice, onDeviceClick } = props;
    const [openDialog, setOpenDialog] = useState(false);

    const handleClick = () => {
        if (isActiveDevice) {
            setOpenDialog(true);
        }
        else {
            onDeviceClick();
        }
    }

    return (
        <>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center">
                <Grid item xs={10} sx={{ paddingLeft: 3 }} onClick={handleClick}>
                    {device.Name}
                </Grid>
                <Grid item xs={2}>
                    <Grid container
                        justifyContent="flex-end"
                        alignItems="center"
                        spacing={2}>
                        <Grid item>
                            <Grid container sx={{ color: "#4ae54a" }}>
                                <Grid item sx={{ marginTop: 1 }}>
                                    <TemperatureIcon height="2em" width="2em" />
                                </Grid>
                                <Grid item sx={{ marginTop: 1.5, marginLeft: -0.5 }}>
                                    <div> {getRandomValuesWithinRange(18, 21)} &deg;C</div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sx={{ marginRight: "1em" }}>
                            <SettingsIcon height="2em" width="2em" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Dialog
                open={openDialog}
                handleClose={() => setOpenDialog(false)}
                title="Device Information"
                content={<DeviceInformation
                    device={device} />}
            />
        </>
    )
}

export default Device