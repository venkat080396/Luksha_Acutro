import React from "react";
import { TextField as MuiTextField, InputAdornment } from '@mui/material';

const TextField = ({ iconStart, iconEnd, ...props }) => {
    return (
        <MuiTextField
            placeholder={props.name}
            {...props}
            autoComplete="off"
            InputProps={{
                startAdornment: iconStart ? (
                    <InputAdornment position="start">{iconStart}</InputAdornment>
                ) : null,
                endAdornment: iconEnd ? (
                    <InputAdornment position="end">{iconEnd}</InputAdornment>
                ) : null
            }}
        />
    );
};

export default TextField;