import * as React from 'react';
import Box from '@mui/material/Box';
import MuiSlider from '@mui/material/Slider';

const marks = [
    {
        value: 0,
        label: '07:00',
    },
    {
        value: 5.88,
        label: '09:00',
    },
    {
        value: 11.76,
        label: '11:00',
    },
    {
        value: 17.64,
        label: '13:00',
    },
    {
        value: 23.52,
        label: '15:00',
    },
    {
        value: 29.40,
        label: '17:00',
    },
    {
        value: 35.28,
        label: '19:00',
    },
    {
        value: 41.16,
        label: '21:00',
    },
    {
        value: 47,
        label: '23:00',
    },
    {
        value: 52.92,
        label: '07:00',
    },
    {
        value: 58.8,
        label: '09:00',
    },
    {
        value: 64.68,
        label: '11:00',
    },
    {
        value: 70.56,
        label: '13:00',
    },
    {
        value: 76.44,
        label: '15:00',
    },
    {
        value: 82.32,
        label: '17:00',
    },
    {
        value: 88.20,
        label: '19:00',
    },
    {
        value: 94.00,
        label: '21:00',
    },
    {
        value: 100,
        label: '23:00',
    },
];

const Slider = () => {
    return (
        <Box sx={{ marginTop: 5, marginLeft: 10 }}>
            <MuiSlider
                sx={{ width: 1150, color: "rgba(255,255,255,0.3)" }}
                defaultValue={0}
                step={2.94}
                marks={marks}
            />
        </Box>
    );
}

export default Slider