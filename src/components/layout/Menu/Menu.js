import { Menu as MuiMenu, MenuItem, IconButton } from '@mui/material'
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React, { useState } from 'react'

const Menu = ({ items, onClick }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (name) => {
        onClick(name);
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton onClick={handleClick}>
                <MoreVertIcon style={{ color: "#fff" }} />
            </IconButton>
            <MuiMenu
                open={open}
                anchorEl={anchorEl}
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
                {items && items.map(item => (
                    <MenuItem onClick={() => handleClose(item.name)}>
                        {item.name}
                    </MenuItem>
                ))}
            </MuiMenu>
        </>
    )
}

export default Menu