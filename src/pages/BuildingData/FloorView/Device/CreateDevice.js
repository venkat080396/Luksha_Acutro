import React, { useEffect, useState } from 'react'
import { Grid, Button } from "@mui/material";
import Select from "../../../../components/forms/Select/Select"
import TextField from "../../../../components/forms/TextField/TextField"
import { useDispatch, useSelector } from "react-redux";
import { styled } from '@mui/system';
import { getSelectedFloor } from '../../../../features/Home/homeSlice';
import { fetchAsyncAllDeviceTypes, getAllDeviceTypes, saveAsyncDevice } from "../../../../features/BuildingData/buildingDataSlice";
import { FLOORVIEW } from '../../constants'

const CreateDevice = (props) => {

    const { handleClose, handleCreate, x, y, device } = props
    const [selectedDeviceTypeId, setSelectedDeviceTypeId] = useState('');
    const [selectedDeviceType, setSelectedDeviceType] = useState('');
    const [deviceName, setDeviceName] = useState('')

    const dispatch = useDispatch();
    const deviceTypes = useSelector(getAllDeviceTypes);
    const selectedFloor = useSelector(getSelectedFloor);

    useEffect(() => {
        dispatch(fetchAsyncAllDeviceTypes(null))
        if (device) {
            setSelectedDeviceTypeId(device.DeviceTypeRecId)
            setDeviceName(device.Name)
        }
    }, [])

    const onCreateOrUpdate = async () => {
        const deviceRecord = {
            DeviceRecId: (device ? device.RecId : null),
            FloorRecId: selectedFloor.RecId,
            DeviceTypeRecId: selectedDeviceTypeId,
            Name: deviceName,
            FloorX: x,
            FloorY: y
        }
        await dispatch(saveAsyncDevice(deviceRecord))
        handleCreate()
        handleClose()
    }

    const StyledGrid = styled(Grid)({
        width: "30vw",
        height: "20vh"
    });

    return (
        <StyledGrid
            justifyContent="center"
            alignItems="center"
            container>
            <Grid item xs={4}>
                {FLOORVIEW.DEVICE_TYPES}
            </Grid>
            <Grid item xs={8}>
                <Select sx={{
                    width: "15em",
                    height: 30,
                    color: "black"
                }} value={selectedDeviceType} onSelectChange={(value) => {
                    setSelectedDeviceTypeId(value.RecId);
                    setSelectedDeviceType(value);
                }} items={deviceTypes} />
            </Grid>
            <Grid item xs={4}>
                {FLOORVIEW.DEVICE_NAME}
            </Grid>
            <Grid item xs={8}>
                <TextField
                    autoFocus
                    value={deviceName}
                    onChange={(event) => setDeviceName(event.target.value)}
                    name="Device Name"
                    sx={{ width: "15em", color: "black", backgroundColor: "white" }}
                    size="small" />
            </Grid>
            <Grid item xs={11}>
                <Grid container
                    justifyContent="center"
                    spacing={3}
                    sx={{ marginLeft: "0.1em" }}>
                    <Grid item>
                        <Button
                            variant="contained"
                            color="info"
                            onClick={onCreateOrUpdate}>{device ? FLOORVIEW.BUTTONS.UPDATE : FLOORVIEW.BUTTONS.CREATE}</Button>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            color="error"
                            onClick={handleClose}>{FLOORVIEW.BUTTONS.CANCEL}</Button>
                    </Grid>
                </Grid>
            </Grid>
        </StyledGrid>
    )
}

export default CreateDevice