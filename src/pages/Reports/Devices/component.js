import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { PieChartComponent } from '../../../components/Utils/Charts/PieChart';
import { fetchAsyncDeviceTypeforFloorId, getDeviceTypeForFloorId } from '../../BuildingData/slice';
const DeviceTypePie = () => {
    const dispatch = useDispatch();
    const data = useSelector(getDeviceTypeForFloorId);
    useEffect(() => {
        dispatch(fetchAsyncDeviceTypeforFloorId(null));
    }, [dispatch]);

    // const data = [
    //     { name: 'AHU', DeviceCount: 400 },
    //     { name: 'Chiller', DeviceCount: 300 },
    //     { name: 'Pump', DeviceCount: 300 },
    //     { name: 'Boiler', DeviceCount: 200 },
    // ];

    return (<>
        <div style={{ marginTop: '-20px', marginLeft: '10px' }}>
            <PieChartComponent
                data={data}
                piekey='DeviceCount'
            />
        </div>
    </>
    )
}
export { DeviceTypePie }