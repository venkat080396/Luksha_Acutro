import * as React from 'react';
import MuiDialog from '@mui/material/Dialog';
import { DialogTitle, DialogContent } from '@mui/material';
import bgImage from "../../assets/images/Background.png"

const Dialog = (props) => {
    const { open, handleClose, title, content } = props

    return (
        <div>
            <MuiDialog open={open} onClose={handleClose}
                PaperProps={{
                    style: {
                        borderRadius: "1em",
                        border: "0.05em solid rgba(255,255,255,0.3)",
                        color: "white",
                        fontWeight: "bold",
                        backgroundImage: `url(${bgImage})`
                    },
                }}>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    {content}
                </DialogContent>
            </MuiDialog>
        </div>
    );
}

export default Dialog