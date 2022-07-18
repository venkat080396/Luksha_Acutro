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
        }
    },
    typography: {
        fontFamily: 'Nunito, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,sans-serif',
        body1: {
            fontWeight: 400,
            fontSize: "12px"
        },
        body2: {
            fontWeight: 300,
            fontSize: "8px"
        },
        body3: {
            fontWeight: 200,
            fontSize: "14px"
        },
        header2: {
            fontWeight: 700
        },
        header3: {
            fontWeight: 600,
            fontSize: "18px"
        },
    },
    components: {
        MuiGrid: {
            styleOverrides: {
                root: {
                    '&::-webkit-scrollbar': {
                        width: '3px',
                        backgroundColor: '#C4C4C4',
                        borderRadius: "20px"
                    },
                    '&::-webkit-scrollbar-track': {
                        width: '3px',
                        background: "rgba(196, 196, 196, 0.1)",
                        borderRadius: "20px"
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: 'white',
                        outline: '1px solid white',
                    }
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    width: '467px',
                    height: '64px',
                    background: 'linear-gradient(130.77deg, rgba(255, 255, 255, 0.16) 2.61%, rgba(255, 255, 255, 0.05) 94.4%)',
                    border: '1px solid rgba(255, 255, 255, 0.33)',
                    boxShadow: '6px 6px 6px rgba(0, 0, 0, 0.15)',
                    borderRadius: '15px'
                },
                placeholder: {
                    color: 'red'
                }
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: { border: 'none' }
            },
            input: {
                fontWeight: '300',
                fontSize: '16px',
                lineHeight: '22px',
                color: '#FFFFFF'
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    background: 'linear-gradient(130.77deg, rgba(255, 255, 255, 0.16) 2.61%, rgba(255, 255, 255, 0.05) 94.4%)',
                    border: '1px solid rgba(255, 255, 255, 0.33)',
                    borderRadius: '15px'
                }
            }
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    background: 'linear-gradient(130.77deg, rgba(255, 255, 255, 0.16) 2.61%, rgba(255, 255, 255, 0.05) 94.4%)',
                    border: '1px solid rgba(255, 255, 255, 0.33)',
                    borderRadius: '15px'
                }
            }
        },
        MuiDialogContent: {
            styleOverrides: {
                root: { padding: 0 }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    width: "50px",
                    height: "50px"
                }
            }
        },
        MuiBadge: {
            styleOverrides: {
                root: {
                    width: "30px",
                    height: "30px"
                }
            }
        }
    },
});

export default theme;