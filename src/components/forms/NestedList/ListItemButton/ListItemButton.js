import React from 'react'
import { withStyles } from "@mui/styles";
import ListItemButtonMUI from "@mui/material/ListItemButton";
import ListItemIcon from "../ListItemIcon/ListItemIcon"
import ListItemText from "../ListItemText/ListItemText"

const ListItemButton = withStyles({
    root: {
        "&$selected": {
            backgroundColor: "red",
            color: "white",
            "& .MuiListItemIcon-root": {
                color: "white",
            },
        },
        "&$selected:hover": {
            backgroundColor: "purple",
            color: "white",
            "& .MuiListItemIcon-root": {
                color: "white",
            },
        },
        "&:hover": {
            backgroundColor: "blue",
            color: "white",
            "& .MuiListItemIcon-root": {
                color: "white",
            },
        },
    },
    selected: {},
})(ListItemButtonMUI);

const ListItemButtonComponent = (props) => {
    const { open, text, updateActivePage, listItemOpen, SetListItemOpen } = props;

    const handleClick = (e) => {
        console.log("itemopen", listItemOpen)
        updateActivePage(text);
        if (listItemOpen) {
            SetListItemOpen({ [text]: !listItemOpen[text] });
        }
    }

    return (
        <ListItemButton
            sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                mx: 1,
                "&:hover": {
                    backgroundColor: "#4991BC",
                    borderRadius: 2,
                },
            }}
            onClick={(e) => handleClick(e)} key={text}
        >
            <ListItemIcon {...props} />
            <ListItemText {...props} />
        </ListItemButton>
    )
}

export default ListItemButtonComponent