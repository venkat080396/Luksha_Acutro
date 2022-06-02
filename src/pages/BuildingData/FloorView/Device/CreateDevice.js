import React, { useEffect, useState } from 'react'
import { Grid, Button } from "@mui/material";
import Select from "../../../../components/forms/Select/Select"
import TextField from "../../../../components/forms/TextField/TextField"
import { useDispatch, useSelector } from "react-redux";
import { styled } from '@mui/system';
import { getSelectedFloor } from '../../../../features/Home/homeSlice';
import { fetchAsyncAllDeviceTypes, getAllDeviceTypes, saveAsyncDevice } from "../../../../features/BuildingData/buildingDataSlice";

const CreateDevice = (props) => {

    const { handleClose, handleCreate, x, y, device } = props
    const [selectedDeviceTypeId, setSelectedDeviceTypeId] = useState('')
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
        const deviceRecord = { DeviceRecId: (device ? device.RecId : null), FloorRecId: selectedFloor.RecId, DeviceTypeRecId: selectedDeviceTypeId, Name: deviceName, FloorX: x, FloorY: y }
        await dispatch(saveAsyncDevice(deviceRecord))
        handleCreate()
        handleClose()
    }

    const StyledGrid = styled(Grid)({
        borderRadius: "1em",
        fontWeight: "bold",
        width: "30vw",
        height: "20vh"
    });

    return (
        <StyledGrid
            justifyContent="center"
            alignItems="center"
            container>
            <Grid item xs={4} sx={{ color: "black" }}>
                Device Types
            </Grid>
            <Grid item xs={8}>
                <Select sx={{
                    width: "15em",
                    height: 30,
                    color: "black"
                }} value={selectedDeviceTypeId} onSelectChange={(value) => setSelectedDeviceTypeId(value.RecId)} items={deviceTypes} />
            </Grid>
            <Grid item xs={4} sx={{ color: "black" }}>
                Device Name
            </Grid>
            <Grid item xs={8}>
                <TextField autoFocus value={deviceName} onChange={(event) => setDeviceName(event.target.value)} name="Device Name" sx={{ width: "15em", color: "black", backgroundColor: "white" }} size="small" />
            </Grid>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={3}>
                    <Grid item>
                        <Button onClick={onCreateOrUpdate}>{device ? "Update" : "Create"}</Button>
                    </Grid>
                    <Grid item>
                        <Button onClick={handleClose}>Cancel</Button>
                    </Grid>
                </Grid>
            </Grid>
        </StyledGrid>
    )
}

export default CreateDevice