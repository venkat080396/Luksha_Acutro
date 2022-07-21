import React from "react";
import { TextField as MuiTextField, InputAdornment } from '@mui/material';
import "./TextField.Styles.css";

const TextField = ({ iconStart, iconEnd, sx, ...props }) => {
    return (
        <MuiTextField
            placeholder={props.name}
            {...props}
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