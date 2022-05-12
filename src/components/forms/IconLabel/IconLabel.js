import React from 'react'
import Label from "../Label/Label"
import { Grid } from "@mui/material";

const IconLabel = (props) => {
    const { sx, icon, label } = props
    return (
        <Grid container justifyContent="flex-start" sx={sx} spacing={1}>
            <Grid item>
                {icon}
            </Grid>
            <Grid item>
                <Label label={label} />
            </Grid>
        </Grid>
    )
}

export default IconLabel