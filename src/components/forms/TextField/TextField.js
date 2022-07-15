import React from "react";
import MuiTextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import "./TextField.Styles.css";

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#fff',
            darker: '#fff',
            contrastText: '#fff'
        },
        neutral: {
            main: '#fff',
            contrastText: '#fff',
        },
    },
});

const TextField = ({ iconStart, iconEnd, ...props }) => {
    return (
        <ThemeProvider theme={theme}>
            <MuiTextField
                className="textfield"
                color="primary"
                placeholder={props.name}
                {...props}
                sx={{ input: { color: 'white' } }}
                InputProps={{
                    startAdornment: iconStart ? (
                        <InputAdornment position="start">{iconStart}</InputAdornment>
                    ) : null,
                    endAdornment: iconEnd ? (
                        <InputAdornment position="end">{iconEnd}</InputAdornment>
                    ) : null
                }}
            />
        </ThemeProvider>
    );
};

export default TextField;