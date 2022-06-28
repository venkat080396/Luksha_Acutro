import { InputLabel } from "@mui/material";

import React from 'react'

const Label = (props) => {
    return (
        <InputLabel
            sx={{
                marginTop: 0,
                ...props.sx
            }}
            style={{
                color: "white",
                ...props.style
            }}
            {...props}
        >
            {props.label}
        </InputLabel>
    )
}

export default Label
