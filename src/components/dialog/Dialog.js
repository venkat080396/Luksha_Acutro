import * as React from 'react';
import MuiDialog from '@mui/material/Dialog';
import { DialogTitle, DialogContent } from '@mui/material';

const Dialog = (props) => {
    const { open, handleClose, title, content } = props

    return (
        <div>
            <MuiDialog open={open} onClose={handleClose}>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    {content}
                </DialogContent>
            </MuiDialog>
        </div>
    );
}

export default Dialog