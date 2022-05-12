import { InputLabel } from "@mui/material";

import React from 'react'

const Label = (props) => {
    return (
        <InputLabel
            sx={{
                color: "white",
                marginTop: 1
            }}
            style={{
                color: "white"
            }}
            {...props}
        >
            {props.label}
        </InputLabel>
    )
}

export default Label
