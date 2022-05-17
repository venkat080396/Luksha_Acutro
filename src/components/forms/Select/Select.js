import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import MuiSelect from '@mui/material/Select';
import { Typography, Box } from "@mui/material";
import "./Select.css"

const Select = (props) => {
    const { value, items, onSelectChange } = props

    const handleChange = event => {
        const selectedItem = items?.find(item => item.RecId === event.target.value)
        onSelectChange(selectedItem)
    }

    return (
        <MuiSelect
            value={value}
            components={Box}
            displayEmpty
            sx={{
                width: 170,
                height: 30,
                color: "black"
            }}
            onChange={handleChange}
            className="select"
        >
            {items && (items?.length === 0 ? (
                <></>
            ) : (
                items.map((item, index) => (
                    <MenuItem key={item.RecId} value={item.RecId}>
                        <Typography color="black">
                            {item?.Name}
                        </Typography>
                    </MenuItem>
                ))
            ))}
        </MuiSelect>
    );
}

export default Select
