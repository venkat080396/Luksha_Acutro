import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { Grid } from '@mui/material'
import { fetchAsyncDevicesWithStatus, getAllDevicesWithStatus } from "../../../../features/BuildingData/buildingDataSlice";
import SelectBox from "../../../../components/forms/SelectBox/SelectBox"
import { ReactComponent as LightbulbIcon } from "../../../../assets/icons/Lightbulb.svg"
import { ReactComponent as HotWaterTanksIcon } from "../../../../assets/icons/Hot Water Tanks.svg"
import { getSelectedBuilding, getSelectedFloor } from '../../../../features/Home/homeSlice'

const Devices = () => {
    const dispatch = useDispatch();
    const selectedBuilding = useSelector(getSelectedBuilding);
    const selectedFloor = useSelector(getSelectedFloor);
    const devices = useSelector(getAllDevicesWithStatus);
    const devicesGroupedByDeviceType = _.groupBy(devices, 'DeviceType');

    useEffect(() => {
        dispatch(fetchAsyncDevicesWithStatus([1, selectedBuilding.RecId, selectedFloor.RecId]))
    }, [dispatch, selectedBuilding.RecId, selectedFloor.RecId])

    const onDeviceChange = () => {

    }

    const getIcon = (key) => {

        switch (key) {
            case "AC Units":
                return <LightbulbIcon height="2.5em" width="2.5em" />

            case "AHU":
                return <HotWaterTanksIcon height="2.5em" width="2.5em" />

            default:
                return <LightbulbIcon height="2.5em" width="2.5em" />
        }
    }

    return (
        <>
            {devicesGroupedByDeviceType && _.size(devicesGroupedByDeviceType) !== 0 && (
                <Grid container direction="column">
                    {_.map(devicesGroupedByDeviceType, (value, key) => (
                        <Grid item>
                            <SelectBox
                                onSelectChange={onDeviceChange}
                                label={key}
                                icon={getIcon(key)}
                                items={value} />

                            {/* <Grid container
        onClick={this.addDevice}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: "5em" }}>
        <Grid item>
            <LightbulbIcon height="2.5em" width="2.5em"/>
        </Grid>
        <Grid item>
            Light Fixture
        </Grid>
    </Grid> */}
                        </Grid>

                    ))}
                </Grid>

            )}
        </>
    )
}

export default Devices