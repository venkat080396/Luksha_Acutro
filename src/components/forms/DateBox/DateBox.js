import React from 'react'
import Date from "../Date/Date"
import { Grid } from "@mui/material";
import { ReactComponent as DateIcon } from "../../../assets/icons/Calendar.svg"
import IconLabel from "../IconLabel/IconLabel"

const DateBox = (props) => {

    return (
        <Grid container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            sx={{ marginTop: 2, width: 250 }}
        >
            <Grid item>
                <IconLabel sx={{ marginLeft: 7, width: 250 }} icon={<DateIcon height="40px" width="40px" />} label="Dates" />
            </Grid>
            <Grid item>
                <Date label="From" />
            </Grid>
            <Grid item>
                <Date label="To" />
            </Grid>
        </Grid>
    )
}

export default DateBox