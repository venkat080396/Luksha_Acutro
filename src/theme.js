import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: "#4991BC"
        },
        secondary: {
            main: "#E97878"
        },
        text: {
            primary: "#FFFFFF"
        },
        body1: {
            fontWeight: 400
        },
        body2: {
            fontWeight: 300
        },
        body3: {
            fontWeight: 200
        },
        header2: {
            fontSize: 700
        },
        header3: {
            fontSize: 600
        },
    },
    typography: {
        fontFamily: 'Nunito, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,sans-serif'
    }
});

export default theme;