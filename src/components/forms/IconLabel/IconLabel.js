import React from 'react'
import Label from "../Label/Label"
import { Grid } from "@mui/material";

const IconLabel = (props) => {
    const { sx, icon, label, onClick } = props

    return (
        <Grid container
            justifyContent="flex-start"
            alignItems="center"
            sx={sx}
            spacing={1}
            onClick={onClick}>
            {icon && (
                <Grid item>
                    {icon}
                </Grid>
            )}
            <Grid item>
                <Label sx={{ marginTop: 0 }} label={label} />
            </Grid>
        </Grid>
    )
}

export default IconLabel