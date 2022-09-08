import React from 'react'
import { TextField, Typography } from "@mui/material";

const Date = (props) => {
    const { value, Label, onDateChange } = props

    const handleChange = event => {
        onDateChange(event.target.value)
    }

    return (
        <TextField
            label={<Typography sx={{ color: "white" }}>{Label}</Typography>}
            size="small"
            fullWidth
            type={"date"}
            sx={{
                outlineColor: "white",
                borderColor: "white",
                color: "white",
                backgroundColor: "rgba(255,255,255,0.3)"
            }}
            value={value}
            onChange={handleChange}
        />
    )
}

export default Date

