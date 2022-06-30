import React from 'react'
import { useSelector } from "react-redux";
import { getAllDevices } from '../../../../features/Utilities/utilitiesSlice'
import DeviceList from '../../../Common/DeviceList/DeviceList';

const ActiveDevices = () => {
    const devices = useSelector(getAllDevices);

    return (
        <DeviceList isActiveDevice="true" deviceSx={{ width: "85vw" }} devices={devices} />
    )
}

export default ActiveDevices