import React from 'react'
import { useSelector } from "react-redux";
import { getAllDevicesWithStatus } from "../../../../features/BuildingData/buildingDataSlice";
import CommonDeviceList from '../../../Common/DeviceList/DeviceList'

const DeviceList = () => {
    const devices = useSelector(getAllDevicesWithStatus);

    return (
        <CommonDeviceList
            deviceSx={{ width: "50vw" }}
            devices={devices} />
    )
}

export default DeviceList