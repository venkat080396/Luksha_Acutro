import React from 'react'
import MuiListItemText from "@mui/material/ListItemText";

const ListItemText = ({ text, open }) => {
    return (
        <MuiListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
    )
}

export default ListItemText