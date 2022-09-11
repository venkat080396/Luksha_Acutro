import React from 'react'
import { styled } from '@mui/material/styles';
import MuiLinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';



const LinearProgress = (props) => {
    const { value } = props;
    const BorderLinearProgress = styled(MuiLinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 3,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: 'orange',
        },
        [`& .${linearProgressClasses.bar}`]: {
            backgroundColor: value === 100 ? 'green' : 'red',
        },
    }));

    return (
        <BorderLinearProgress variant='determinate' value={value} />
    )
}

export { LinearProgress }