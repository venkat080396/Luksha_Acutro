import React from 'react'
import { Grid } from '@mui/material';

const TooltipContent = (props) => {
    const { name } = props
    return (
        <Grid container
            direction="column">
            <Grid item sx={{ fontSize: "1.8em", color: "rgba(255,255,255,1)" }}>
                {name}
            </Grid>
            <Grid item sx={{ fontSize: "1em", color: "#7be382" }}>
                Operational
            </Grid>
            <Grid item sx={{ fontSize: "1em", color: "rgba(255,255,255,0.5)" }}>
                Active time: 12hrs
            </Grid>
        </Grid>)
}

export default TooltipContent