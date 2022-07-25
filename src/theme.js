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
            fontSize: "14px"
        },
        body2: {
            fontWeight: 300,
            fontSize: "12px"
        },
        body3: {
            fontWeight: 300,
            fontSize: "10px"
        },
        body4: {
            fontWeight: 200,
            fontSize: "8px"
        },
        header2: {
            fontWeight: 700,
            fontSize: "24px"
        },
        header3: {
            fontWeight: 600,
            fontSize: "18px"
        },
        header4: {
            fontWeight: 300,
            fontSize: "16px"
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
                    background: 'rgba(255,255,255,0.05)',
                    border: '0.05em solid rgba(255,255,255,0.3)',
                    boxShadow: '6px 6px 6px rgba(0, 0, 0, 0.15)',
                    borderRadius: '15px'
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
                lineHeight: '22px'
            }
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    "&:-webkit-autofill": {
                        //WebkitBoxShadow: "0 0 0 1000px rgba(255,255,255,0.05) inset !important"
                    }
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    background: 'rgba(255,255,255,0.05)',
                    border: '0.05em solid rgba(255,255,255,0.3)',
                    borderRadius: '15px'
                }
            }
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    background: 'rgba(255,255,255,0.05)',
                    border: '0.05em solid rgba(255,255,255,0.3)',
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
                badge: {
                    minWidth: "10px",
                    borderRadius: "50%"
                }
            }
        },
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    border: "none"
                },
                filterForm: {
                    color: "black"
                },
                cell: {
                    borderBottom: "1px solid rgba(244,244,244,0.3)",
                    fontWeight: 300,
                    fontSize: "14px"
                },
                columnHeaders: {
                    borderBottom: "1px solid rgba(244,244,244,0.3)"
                },
                footerContainer: {
                    borderTop: "none"
                },
                columnHeader: {
                    fontWeight: 400,
                    fontSize: "18px"
                }
            }
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: "rgba(244,244,244)"
                },
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    color: "black"
                }
            }
        }
    },
});

export default theme;