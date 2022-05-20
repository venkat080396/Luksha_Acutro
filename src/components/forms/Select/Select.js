import React, { useState } from 'react';
import MuiSelect from '@mui/material/Select';
import { Typography, Box, FormControl, MenuItem } from "@mui/material";
import "./Select.css"

const Select = (props) => {
    const { value, sx, items, onSelectChange } = props

    const handleChange = event => {
        const selectedItem = items?.find(item => item.RecId === event.target.value)
        onSelectChange(selectedItem)
    }

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <MuiSelect
                    value={value}
                    components={Box}
                    displayEmpty
                    sx={{ ...sx, backgroundColor: "rgba(255,255,255,0.3)" }}
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
            </FormControl>
        </Box>
    );
}

export default Select
