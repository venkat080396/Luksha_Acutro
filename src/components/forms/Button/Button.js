import React from 'react';
import MuiButton from '@mui/material/Button';
import "./Button.Styles.css";

const Button = (props) => {
    return (
        <MuiButton className="button" variant="contained" {...props}>{props.value}</MuiButton>
    )
}

export default Button;