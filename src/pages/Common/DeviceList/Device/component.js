import React, { useState } from 'react'
import { Grid, Box } from '@mui/material'
import { ReactComponent as SettingsIcon } from '../../../../assets/icons/Settings.svg'
import { ReactComponent as TemperatureIcon } from '../../../../assets/icons/Temperature.svg'
import { Dialog } from '../../../../components/Feedback/Dialog'
import { getRandomValuesWithinRange } from '../../../../common/utils'
import LightbulbImage from '../../../../assets/icons/Lightbulb.png'
import { getImageURL } from '../../../../common/utils';
import { Table } from '../../../../components/DataDisplay/Table'

const columns = [
    { field: 'manufacturer', headerName: 'Manufacturer', width: 350 },
    { field: 'modelType', headerName: 'Model Type', width: 350 },
    { field: 'serialNumber', headerName: 'Serial Number', width: 350 }]

const rows = [
    { manufacturer: 'Manufacturer 1', modelType: 'Test Model Type 1', serialNumber: '12345' }
]

const DeviceInformation = ({ device }) => {
    return (
        <Box>
            <Table
                rows={rows}
                columns={columns}
            />
        </Box>
    )
}

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
                direction='row'
                justifyContent='center'
                alignItems='center'
                sx={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <Grid item xs sx={{ width: '2em' }}>
                    <img
                        src={((typeof device.StyleIcon != 'undefined') ? getImageURL(device.StyleIcon) : LightbulbImage)}
                        alt='Device'
                        style={{
                            height: '3em',
                            width: '3em'
                        }}
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src = LightbulbImage;
                        }}
                    />
                </Grid>
                <Grid item xs={9}>
                    {device.Name}
                </Grid>
                <Grid item container xs={2}
                    justifyContent='center'
                    alignItems='center'
                    spacing={2}>
                    <Grid item container sx={{ color: '#4ae54a' }}>
                        {/* <Grid item sx={{ marginTop: 1 }}>
                                    <TemperatureIcon height='2em' width='2em' />
                                </Grid> */}
                        <Grid item sx={{ paddingLeft: 10 }}>
                            <div> {getRandomValuesWithinRange(18, 24)} &deg;C</div>
                        </Grid>
                    </Grid>
                    {/* <Grid item sx={{ marginRight: '1em' }}>
                            <SettingsIcon height='2em' width='2em' />
                        </Grid> */}
                </Grid>
            </Grid>
            <Dialog
                open={openDialog}
                handleClose={() => setOpenDialog(false)}
                title='Device Information'
                content={<DeviceInformation
                    device={device} />}
            />
        </>
    )
}

export { Device };