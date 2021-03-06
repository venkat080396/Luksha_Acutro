import React, { useState, useEffect } from 'react'
//import { Grid } from '@mui/material'
import { useDispatch, useSelector } from "react-redux";
import StackedAreaChart from '../../../../components/charts/StackedAreaChart/StackedAreaChart';
//import { ReactComponent as TooColdIcon } from "../../../../assets/icons/Too Cold.svg"
//import { ReactComponent as TooHotIcon } from "../../../../assets/icons/Too Hot.svg"
//import Select from "../../../../components/forms/Select/Select"
import { fetchAsyncDeviceReadingsForFilter, getDeviceReadings } from "../../../../features/BuildingData/buildingDataSlice"
import { getFromDate, getToDate } from '../../../../features/Home/homeSlice';

//const items = [...Array(50).keys()].map(i => ({ RecId: i + 1, Name: i + 1 }))

const ComfortChart = (props) => {
    //const [tooHot, setTooHot] = useState({})
    //const [tooCold, setTooCold] = useState({})
    const { deviceRecId, sensorRecId, xAxisValues, aspetRatio } = props;
    const dispatch = useDispatch();
    const readings = useSelector(getDeviceReadings);
    const fromDate = useSelector(getFromDate);
    const toDate = useSelector(getToDate);
    const readingsFilter = { FromDate: fromDate, ToDate: toDate, DeviceRecId: deviceRecId, DeviceSensorRecId: sensorRecId };

    useEffect(() => {
        dispatch(fetchAsyncDeviceReadingsForFilter(readingsFilter));
    }, []);

    return (<>
        {/* <Grid container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            sx={{ paddingRight: "1.3em" }}>
            <Grid item>
                <Grid container
                    alignItems="center"
                    spacing={3}>
                    <Grid item>
                        <Grid container alignItems="center" justifyContent="center">
                            <Grid item sx={{ paddingTop: "0.5em" }}>
                                <TooHotIcon height="1.5em" width="1.5em" />
                            </Grid>
                            <Grid item>
                                Too Hot
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sx={{ width: "5em" }}>
                        <Select sx={{
                            width: 50,
                            height: 17,
                            marginTop: "0.2em",
                            paddingRight: "0.5em"
                        }} items={items} onSelectChange={value => setTooHot(value)} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container
                    alignItems="center"
                    spacing={3}
                    sx={{ paddingLeft: "5em" }}>
                    <Grid item>
                        <Grid container alignItems="center" justifyContent="center">
                            <Grid item sx={{ paddingTop: "0.5em" }}>
                                <TooColdIcon height="1.5em" width="1.5em" />
                            </Grid>
                            <Grid item>
                                Too Cold
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sx={{ width: "5em" }}>
                        <Select sx={{
                            width: 50,
                            height: 17,
                            marginTop: "0.2em",
                            paddingRight: "0.5em"
                        }} items={items} onSelectChange={value => setTooCold(value)} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid> */}
        <div
            style={{ marginTop: "1em" }}>
            <StackedAreaChart
                xAxisValues={xAxisValues}
                areaKey1="Value"
                aspect={aspetRatio}
                data={readings} />
        </div>
    </>
    )
}

export default ComfortChart