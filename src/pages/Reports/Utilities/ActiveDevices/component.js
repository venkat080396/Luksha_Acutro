import React from 'react'
import { useSelector } from 'react-redux';
import { getAllDevices } from '../slice'
import { DeviceList } from '../../../Common/DeviceList';

const ActiveDevices = () => {
    const devices = useSelector(getAllDevices);

    return (
        <DeviceList isActiveDevice='true' deviceSx={{ width: '85vw' }} devices={devices} />
    )
}

export { ActiveDevices };