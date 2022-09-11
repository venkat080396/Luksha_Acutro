import React from 'react'
import MuiCheckbox from '@mui/material/Checkbox';

const Checkbox = (props) => {
    const { onChange, checked, item } = props;

    var isChecked = (item) => {
        return checked.some(report => report.id === item.id) ? true : false;
    }

    return (
        <MuiCheckbox
            checked={isChecked(item)}
            value={item}
            onChange={(e) => onChange(e, item)}
            sx={{ color: 'white' }} />
    )
}

export default Checkbox