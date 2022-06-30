import React from 'react';
import MuiDialog from '@mui/material/Dialog';
import { DialogTitle, DialogContent } from '@mui/material';
import bgImage from "../../assets/images/Background.png"

const Dialog = (props) => {
    const { open, handleClose, title, content, top, left, height, width } = props

    return (
        <MuiDialog
            open={open}
            onClose={handleClose}
            fullwidth={true}
            maxWidth="1200px"
            PaperProps={{
                style: {
                    position: "fixed",
                    borderRadius: "1em",
                    border: "0.05em solid rgba(255,255,255,0.3)",
                    color: "white",
                    fontWeight: "bold",
                    backgroundImage: `url(${bgImage})`,
                    top: top,
                    left: left,
                    height: height,
                    width: width
                },
            }}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                {content}
            </DialogContent>
        </MuiDialog>
    );
}

export default Dialog