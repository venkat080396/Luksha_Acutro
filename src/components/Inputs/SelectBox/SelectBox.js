import React from 'react'
import Select from '../Select/Select'
import { Grid } from '@mui/material';
import IconLabel from '../IconLabel/IconLabel'

const SelectBox = (props) => {
    const { value, label, items, icon, onSelectChange } = props

    const handleChange = (item) => {
        onSelectChange(item)
    }

    return (
        <Grid container
            direction='row'
            justifyContent='center'
            alignItems='center'
            sx={{ marginTop: 2, width: 250 }}
        >
            <Grid item>
                <IconLabel sx={{ marginLeft: 7, width: 250 }} icon={icon} label={label} />
            </Grid>
            <Grid item>
                <Select sx={{
                    width: 170,
                    height: 30,
                    color: 'black'
                }} value={value} onSelectChange={(val) => handleChange(val)} items={items} />
            </Grid>
        </Grid>
    )
}

export default SelectBox