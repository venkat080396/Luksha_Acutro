import React from 'react'
import Date from '../Date/Date'
import { Grid } from '@mui/material';
import { ReactComponent as DateIcon } from '../../../assets/icons/Calendar.svg'
import IconLabel from '../IconLabel/IconLabel'

const DateBox = (props) => {

    const { value, onDateChange } = props

    const handleChange = (value, label) => {
        onDateChange(value, label)
    }

    return (
        <Grid container
            direction='row'
            justifyContent='center'
            alignItems='center'
            spacing={1}
            sx={{ marginTop: 2, width: 250 }}
        >
            <Grid item>
                <IconLabel sx={{ marginLeft: 7, width: 250 }} icon={<DateIcon height='2.5em' width='2.5em' />} label='Dates' />
            </Grid>
            <Grid item>
                <Date value={value.fromDate} onDateChange={(val) => handleChange(val, 'From')} label='From' />
            </Grid>
            <Grid item>
                <Date value={value.toDate} onDateChange={(val) => handleChange(val, 'To')} label='To' />
            </Grid>
        </Grid>
    )
}

export default DateBox