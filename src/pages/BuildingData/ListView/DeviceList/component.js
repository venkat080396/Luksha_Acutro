import React from 'react'
import { useSelector } from "react-redux";
import { getAllDevicesWithStatus } from "../../slice";
import { DeviceList as CommonDeviceList } from '../../../Common/DeviceList'

const DeviceList = () => {
    const devices = useSelector(getAllDevicesWithStatus);

    return (
        <CommonDeviceList
            deviceSx={{ width: "50vw" }}
            devices={devices} />
    )
}

export { DeviceList };