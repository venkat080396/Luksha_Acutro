import React from 'react';
import MuiDialog from '@mui/material/Dialog';
import { DialogTitle, DialogContent } from '@mui/material';

const Dialog = (props) => {
    const { open, handleClose, title, content, top, left, height, width } = props

    return (
        <MuiDialog
            open={open}
            onClose={handleClose}
            fullwidth={true}
            maxWidth='1200px'
            PaperProps={{
                style: {
                    position: 'fixed',
                    top: top,
                    left: left,
                    height: height,
                    width: width,
                    background: 'linear-gradient(-30.77deg, #767f82, #596a75, #425569, #323f5b, #2a294b)'
                },
            }}>
            {title && (<DialogTitle>{title}</DialogTitle>)}
            <DialogContent>
                {content}
            </DialogContent>
        </MuiDialog>
    );
}

export { Dialog };