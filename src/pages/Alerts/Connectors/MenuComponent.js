import React from "react";

import Dialog from "../../../components/dialog/Dialog";
import TextField from "../../../components/forms/TextField/TextField";

import {
    Grid,
    Box,
    Button,
    IconButton,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function MenuComponent(){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openDialog, setOpenDialog] = React.useState(false);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setOpenDialog(false);
        setAnchorEl(null);
    };
    const handleEdit = (event) => {
        setOpenDialog(true);
        setAnchorEl(event.currentTarget);
    };

    return (
        <>
            <Box>
                <IconButton onClick={handleClick}>
                    <MoreVertIcon style={{ color: "#fff" }} />
                </IconButton>
            </Box>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
            >
                <MenuItem onClick={handleEdit}>Edit</MenuItem>
                <MenuItem onClick={handleClose}>Delete</MenuItem>
            </Menu>
            <Dialog
                open={openDialog}
                handleClose={() => setOpenDialog(false)}
                title={"Update Connector"}
                content={
                    <>
                        <Box width={600}>
                            <Grid container spacing={2}>
                                <Grid item sx={12} sm={12} md={12} lg={12} xl={12}>
                                    <TextField name="Name" fullWidth />
                                </Grid>
                                <Grid item sx={12} sm={12} md={12} lg={12} xl={12}>
                                    <TextField name="Web Address" fullWidth />
                                </Grid>
                                <Grid item sx={12} sm={12} md={12} lg={12} xl={12}>
                                    <Grid container alignItems='center' flexDirection='row-reverse' spacing={2}>
                                        <Grid item>
                                            <Button variant='contained' onClick={() => setOpenDialog(false)}>Save</Button>
                                        </Grid>
                                        <Grid item>
                                            <Button variant="contained" color="error" onClick={() => setOpenDialog(false)}>Cancel</Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </>
                }
            />
        </>
    );
};

