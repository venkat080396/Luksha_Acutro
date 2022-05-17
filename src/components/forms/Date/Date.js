import React from 'react'
import { TextField, Typography } from "@mui/material";

const Date = (props) => {
    const { value, Label, onDateChange } = props

    const handleChange = event => {
        onDateChange(event.target.value)
    }

    return (
        <TextField
            label={<Typography color={"white"}>{Label}</Typography>}
            size="small"
            fullWidth
            type={"date"}
            sx={{
                outlineColor: "white",
                borderColor: "white",
                color: "white",
            }}
            color="primary"
            value={value}
            onChange={handleChange}
        />
    )
}

export default Date

