import React from 'react'
import { TextField, Typography } from "@mui/material";

const Date = (props) => {
    const { date, Label, setDate } = props
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
            value={date}
            onChange={(event) => setDate(event.target.value)}
        />
    )
}

export default Date

