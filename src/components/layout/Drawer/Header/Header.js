import React from 'react'
import { Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const Header = ({ leftClose, open }) => {

    const DrawerHeader = styled("div")(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "transparent",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }));

    return (
        <DrawerHeader>
            <Grid container flex={1} component={Box}>
                <Grid item justifyContent={"flex-start"}>
                    <IconButton onClick={leftClose}>
                        {open ? <MenuIcon sx={{ color: "white" }} /> : <></>}
                    </IconButton>
                </Grid>
            </Grid>
        </DrawerHeader>
    )
}

export default Header