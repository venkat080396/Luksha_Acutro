import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Tooltip from '../tooltip/Tooltip';

const TooltipIcon = (props) => {
    const { content } = props
    return (
        <Tooltip title={content}>
            <InfoOutlinedIcon />
        </Tooltip>
    )
}

export default TooltipIcon