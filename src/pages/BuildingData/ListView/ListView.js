import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Grid } from '@mui/material'
import Card from '../../../components/layout/Card/Card'
import AssetList from './AssetList/AssetList'
import DeviceList from './DeviceList/DeviceList'
import Label from '../../../components/forms/Label/Label'
import { getSelectedFloor, getSelectedBuilding } from '../../../features/Home/homeSlice';
import { fetchAsyncAllDeviceTypes, fetchAsyncDevicesWithStatus } from "../../../features/BuildingData/buildingDataSlice";
import { LISTVIEW } from '../constants'

const ListView = () => {
    const dispatch = useDispatch();
    const [assetListLabel, setAssetListLabel] = useState(null)
    const [deviceListLabel, setDeviceListLabel] = useState(null)
    const selectedFloor = useSelector(getSelectedFloor);
    const selectedBuilding = useSelector(getSelectedBuilding);

    const onDeviceTypeClick = (deviceType) => {
        setAssetListLabel(deviceType ? ` / ${deviceType.Name}` : null)
        setDeviceListLabel(deviceType ? ` / ${deviceType.Name}` : null)
        dispatch(fetchAsyncAllDeviceTypes(deviceType ? deviceType.RecId : null))

        const requestDetails = {
            siteRecId: 1,
            buildingRecId: selectedBuilding?.RecId,
            floorRecId: selectedFloor?.RecId,
            deviceTypeRecId: deviceType ? deviceType.RecId : null
        }

        dispatch(fetchAsyncDevicesWithStatus(requestDetails))
    }

    const GetHeader = (props) => {
        const { label } = props
        return (
            <Grid container
                direction="column"
                sx={{ marginLeft: "2.2em", marginTop: "-0.5em" }}>
                <Grid item>
                    <Grid container
                        alignItems="center" spacing={1}>
                        <Grid item sx={{ fontSize: 24 }}>
                            {label}
                        </Grid>
                        <Grid item sx={{ fontSize: 18 }}>
                            {label === LISTVIEW.ASSET_LIST.HEADER ? assetListLabel : deviceListLabel}
                        </Grid>
                    </Grid>
                </Grid>
                {label === LISTVIEW.ASSET_LIST.HEADER && (
                    <Grid item
                        sx={{ textDecoration: "underline", fontSize: 14, cursor: "pointer" }}
                        onClick={() => onDeviceTypeClick(null)}>
                        {LISTVIEW.ASSET_LIST.BACK_TO_MAIN_LIST}
                    </Grid>)
                }
            </Grid>)
    }

    return (
        <Grid container
            direction="row"
            justifyContent="space-around"
            sx={{ marginTop: "2em" }}>
            <Grid item>
                <Card
                    headerContent={<GetHeader label={LISTVIEW.ASSET_LIST.HEADER} />}
                    sx={{ width: "25vw", height: "76vh", marginTop: "-2em" }}
                    content={<AssetList handleClick={onDeviceTypeClick} />} />
            </Grid>
            <Grid item>
                <Card
                    headerContent={<GetHeader label={LISTVIEW.DEVICE_LIST.HEADER} />}
                    sx={{ width: "60vw", height: "76vh", marginTop: "-2em" }}
                    content={<DeviceList />} />
            </Grid>
        </Grid>
    )
}

export default ListView