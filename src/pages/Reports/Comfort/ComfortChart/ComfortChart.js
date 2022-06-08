import React, { useState } from 'react'
import { Grid } from '@mui/material'
import StackedAreaChart from '../../../../components/charts/StackedAreaChart/StackedAreaChart';
import { ReactComponent as TooColdIcon } from "../../../../assets/icons/Too Cold.svg"
import { ReactComponent as TooHotIcon } from "../../../../assets/icons/Too Hot.svg"
import Select from "../../../../components/forms/Select/Select"

const data = [
    {
        temperature: 14,
        time: "7:00",
        Heating: 16,
        Cooling: 18,
    },
    {
        temperature: 16,
        time: "8:00",
        Heating: 21,
        Cooling: 18,
    },
    {
        temperature: 18,
        time: "9:00",
        Heating: 21,
        Cooling: 19,
    },
    {
        temperature: 20,
        time: "10:00",
        Heating: 24,
        Cooling: 19.5,
    },
    {
        temperature: 22,
        time: "11:00",
        Heating: 26,
        Cooling: 30,
    },
    {
        temperature: 24,
        time: "12:00",
        Heating: 28,
        Cooling: 21,
    },
    {
        temperature: 26,
        time: "14:00",
        Heating: 26,
        Cooling: 12,
    },
    {
        temperature: 28,
        time: "16:00",
        Heating: 29,
        Cooling: 23,
    },
    {
        temperature: 30,
        time: "18:00",
        Heating: 35,
        Cooling: 17,
    },
    {
        temperature: 32,
        time: "22:00",
        Heating: 27,
        Cooling: 16,
    },
];

const items = [...Array(50).keys()].map(i => ({ RecId: i + 1, Name: i + 1 }))

const ComfortChart = (props) => {
    const [tooHot, setTooHot] = useState({})
    const [tooCold, setTooCold] = useState({})
    const { width, height, aspetRatio } = props
    return (<>
        <Grid container
            direction="row"
            justifyContent="flex-end"
            alignItems="center">
            <Grid item>
                <Grid container alignItems="center" spacing={3}>
                    <Grid item>
                        <Grid container alignItems="center">
                            <Grid item>
                                <TooHotIcon height="1.5em" width="1.5em" />
                            </Grid>
                            <Grid item>
                                Too Hot
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Select sx={{
                            width: 50,
                            height: 20,
                            color: "black"
                        }} items={items} onSelectChange={value => setTooHot(value)} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container alignItems="center" spacing={3}>
                    <Grid item>
                        <Grid container alignItems="center">
                            <Grid item>
                                <TooColdIcon height="1.5em" width="1.5em" />
                            </Grid>
                            <Grid item>
                                Too Cold
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Select sx={{
                            width: 50,
                            height: 20,
                            color: "white"
                        }} items={items} onSelectChange={value => setTooCold(value)} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <div
            style={{ marginTop: "2em" }}>
            <StackedAreaChart
                width={width}
                height={height}
                xAxisKey="time"
                yAxisKey="temperature"
                areaKey1="Heating"
                areaKey2="Cooling"
                aspect={aspetRatio}
                data={data} />
        </div>
    </>
    )
}

export default ComfortChart