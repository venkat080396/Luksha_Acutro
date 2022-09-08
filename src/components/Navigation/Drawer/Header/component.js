import React from "react";
import { Grid, Typography, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = ({ leftClose, open }) => {
    const theme = useTheme();
    return (
        <>
            {open ?
                <Grid container
                    direction="row"
                    spacing={3.5}
                    justifyContent="flex-start"
                    alignItems="center"
                    sx={{
                        paddingLeft: theme.spacing(4.25),
                        paddingTop: theme.spacing(2.5),
                        marginBottom: theme.spacing(2)
                    }}
                    onClick={leftClose}>
                    <Grid item>
                        <MenuIcon />
                    </Grid>
                    <Grid item>
                        <Typography>
                            Menu
                        </Typography>
                    </Grid>
                </Grid> : <div style={{ height: theme.spacing(8.75) }}></div>}
        </>
    )
}

export { Header }