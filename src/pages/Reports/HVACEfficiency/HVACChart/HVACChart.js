import React, { Grid } from 'react'
import StackedAreaChart from '../../../../components/charts/StackedAreaChart/StackedAreaChart';
import { HVAC_EFFICIENCY } from '../../constants.js'

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

const HVACChart = () => {
    return (<>
        <div>
            <StackedAreaChart
                xAxisKey={HVAC_EFFICIENCY.TIME}
                yAxisKey={HVAC_EFFICIENCY.TEMPERATURE}
                areaKey1={HVAC_EFFICIENCY.HEATING}
                areaKey2={HVAC_EFFICIENCY.COOLING}
                aspect={HVAC_EFFICIENCY.ASPECT_RATIO}
                data={data} />
        </div>
        <div style={{
            marginTop: "1em",
            textAlign: "center",
            color: '#999999',
            fontSize: 13
        }}>
            <u>{HVAC_EFFICIENCY.SEE_ALL_DEVICES}</u>
        </div>
    </>
    )
}

export default HVACChart