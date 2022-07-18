import React from "react";
import MuiTextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import "./TextField.Styles.css";

const TextField = ({ iconStart, iconEnd, ...props }) => {
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