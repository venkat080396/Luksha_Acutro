import React, { useState } from 'react'
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "../ListItemIcon/ListItemIcon"
import ListItemText from "../ListItemText/ListItemText"

const ListItemButtonComponent = (props) => {
    const { open, text, updateActivePage, listItemOpen, SetListItemOpen } = props;
    const handleClick = (e) => {
        updateActivePage(text);
        if (listItemOpen) {
            SetListItemOpen({ [text]: !listItemOpen[text] });
        }
    }

    const styleNode = () => {
        return (
            {
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                mx: 1,
                "&:hover": {
                    backgroundColor: "#4991BC",
                    borderRadius: 2,
                },
                "&:active": {
                    backgroundColor: "#4991BC",
                    borderRadius: 2,
                }
            }
        )
    }
    const [style, setStyle] = useState(styleNode)

    return (
        <ListItemButton
            sx={style}
            onClick={(e) => handleClick(e)} key={text}
        >
            <ListItemIcon {...props} />
            <ListItemText {...props} />
        </ListItemButton>
    )
}

export default ListItemButtonComponent