import React from 'react'
import MuiTooltip from '@mui/material/Tooltip';
import { Zoom } from '@mui/material';

const Tooltip = (props) => {
    const { title } = props
    return (
        <MuiTooltip
            componentsProps={{
                tooltip: {
                    sx: {
                        '& .MuiTooltip-arrow': {
                            color: 'rgba(255,255,255,0.05)',
                        },
                        borderRadius: "1.5em",
                        border: "0.05em solid rgba(255,255,255,0.3)",
                        background: "rgba(255,255,255,0.2)",
                        padding: "1em"
                    },
                },
            }}
            arrow
            TransitionComponent={Zoom} title={title} placement="top">
            {props.children}
        </MuiTooltip>
    )
}

export default Tooltip