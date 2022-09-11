import { createTheme } from '@mui/material';
import { COLORS } from './common/constants';

let theme = createTheme({
    palette: {
        primary: {
            main: COLORS.BLUE
        },
        secondary: {
            main: COLORS.RED
        },
        text: {
            primary: COLORS.WHITE
        },
        common: {
            black: COLORS.BLACK,
            white: COLORS.WHITE,
            baseWhite: COLORS.BASE_WHITE
        }
    }
})

theme = createTheme(theme, {
    typography: {
        fontFamily: 'Nunito, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,sans-serif',
        body1: {
            fontWeight: 400,
            fontSize: theme.spacing(2.25),
            lineHeight: theme.spacing(3.125)
        },
        body2: {
            fontWeight: 300,
            fontSize: theme.spacing(2),
            lineHeight: theme.spacing(3.125)
        },
        body3: {
            fontWeight: 200,
            fontSize: theme.spacing(1.75),
            lineHeight: theme.spacing(2.375)
        },
        header1: {
            fontWeight: 800,
            fontSize: theme.spacing(4.5),
            lineHeight: theme.spacing(6.125)
        },
        header2: {
            fontWeight: 700,
            fontSize: theme.spacing(3),
            lineHeight: theme.spacing(4.125)
        },
        header3: {
            fontWeight: 600,
            fontSize: theme.spacing(2.25),
            lineHeight: theme.spacing(3.125)
        },
        header4: {
            fontWeight: 300,
            fontSize: theme.spacing(2)
        },
    },
    components: {
        MuiGrid: {
            styleOverrides: {
                root: {
                    '&::-webkit-scrollbar': {
                        width: theme.spacing(0.375),
                        backgroundColor: '#C4C4C4',
                        borderRadius: theme.spacing(2.5)
                    },
                    '&::-webkit-scrollbar-track': {
                        width: theme.spacing(0.375),
                        background: 'rgba(196, 196, 196, 0.1)',
                        borderRadius: theme.spacing(2.5)
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: COLORS.WHITE,
                        outline: `${theme.spacing(0.125)} solid ${COLORS.WHITE}`,
                    }
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    background: 'linear-gradient(130.77deg, rgba(255, 255, 255, 0.16) 2.61%, rgba(255, 255, 255, 0.05) 94.4%)',
                    border: `${theme.spacing(0.125)} solid rgba(255,255,255,0.33)`,
                    boxShadow: `${theme.spacing(0.75)} ${theme.spacing(0.75)} ${theme.spacing(0.75)} rgba(0, 0, 0, 0.15)`,
                    borderRadius: theme.spacing(1.875)
                }
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: { border: 'none' }
            },
            input: {
                fontWeight: '300',
                fontSize: theme.spacing(2),
                lineHeight: theme.spacing(2.75)
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    background: 'rgba(255,255,255,0.05)',
                    border: `${theme.spacing(0.1)} solid rgba(255,255,255,0.3)`,
                    borderRadius: theme.spacing(1.875)
                }
            }
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    background: 'rgba(255,255,255,0.05)',
                    border: `${theme.spacing(0.1)} solid rgba(255,255,255,0.3)`,
                    borderRadius: theme.spacing(1.875)
                }
            }
        },
        MuiDialogContent: {
            styleOverrides: {
                root: {
                    padding: 0,
                    overflowX: 'hidden',
                    overflowY: 'auto',
                    '&::-webkit-scrollbar': {
                        width: theme.spacing(0.375),
                        backgroundColor: '#C4C4C4',
                        borderRadius: theme.spacing(2.5)
                    },
                    '&::-webkit-scrollbar-track': {
                        width: theme.spacing(0.375),
                        background: 'rgba(196, 196, 196, 0.1)',
                        borderRadius: theme.spacing(2.5)
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: COLORS.WHITE,
                        outline: `${theme.spacing(0.125)} solid ${COLORS.WHITE}`
                    },
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    width: theme.spacing(6.25),
                    height: theme.spacing(6.25)
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: theme.spacing(1.25)
                }
            }
        },
        MuiBadge: {
            styleOverrides: {
                badge: {
                    minWidth: theme.spacing(1.25),
                    borderRadius: '50%'
                }
            }
        },
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    border: 'none'
                },
                filterForm: {
                    color: COLORS.BLACK
                },
                cell: {
                    borderBottom: `${theme.spacing(0.125)} solid rgba(244,244,244,0.3)`,
                    fontWeight: 300,
                    fontSize: theme.spacing(1.75)
                },
                columnHeaders: {
                    borderBottom: `${theme.spacing(0.125)} solid rgba(244,244,244,0.3)`
                },
                footerContainer: {
                    borderTop: 'none'
                },
                columnHeader: {
                    fontWeight: 400,
                    fontSize: theme.spacing(2.25)
                }
            }
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: 'rgba(244,244,244)'
                },
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    color: COLORS.BLACK
                }
            }
        }
    }
});

export default theme;