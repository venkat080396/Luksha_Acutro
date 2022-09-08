import React from 'react'
import { Grid, Typography } from "@mui/material";

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
                <Typography>
                    {label}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default IconLabel