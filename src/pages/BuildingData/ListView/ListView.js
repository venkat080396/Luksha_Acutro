import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Grid } from '@mui/material'
import Card from '../../../components/layout/Card/Card'
import AssetList from './AssetList/AssetList'
import DeviceList from './DeviceList/DeviceList'
import Label from '../../../components/forms/Label/Label'
import { getSelectedFloor, getSelectedBuilding } from '../../../features/Home/homeSlice';
import { fetchAsyncAllDeviceTypes, fetchAsyncDevicesWithStatus } from "../../../features/BuildingData/buildingDataSlice";

const ListView = () => {
    const dispatch = useDispatch();
    const [assetListLabel, setAssetListLabel] = useState("Asset List")
    const [deviceListLabel, setDeviceListLabel] = useState("Device List")
    const selectedFloor = useSelector(getSelectedFloor);
    const selectedBuilding = useSelector(getSelectedBuilding);

    const onDeviceTypeClick = (deviceType) => {
        setAssetListLabel(`Asset List \\ ${deviceType.Name}`)
        setDeviceListLabel(`Device List \\ ${deviceType.Name}`)
        dispatch(fetchAsyncAllDeviceTypes(deviceType.RecId))
        const requestDetails = { siteRecId: 1, buildingRecId: selectedBuilding?.RecId, floorRecId: selectedFloor?.RecId, deviceTypeRecId: deviceType.RecId }
        dispatch(fetchAsyncDevicesWithStatus(requestDetails))
    }

    return (
        <Grid container
            direction="row"
            justifyContent="space-around"
            sx={{ marginTop: "2em" }}>
            <Grid item>
                <Card
                    headerContent={<Label label={assetListLabel} sx={{ marginLeft: "1.5em", marginTop: "0.5em" }} />}
                    sx={{ width: "17vw", height: "76vh", marginTop: "-2em" }}
                    content={<AssetList handleClick={onDeviceTypeClick} />} />
            </Grid>
            <Grid item>
                <Card
                    headerContent={<Label label={deviceListLabel} sx={{ marginLeft: "1.5em", marginTop: "0.5em" }} />}
                    sx={{ width: "65vw", height: "76vh", marginTop: "-2em" }}
                    content={<DeviceList />} />
            </Grid>
        </Grid>
    )
}

export default ListView