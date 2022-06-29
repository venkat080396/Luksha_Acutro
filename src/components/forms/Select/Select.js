import React from 'react';
import MuiSelect from '@mui/material/Select';
import { Typography, Box, FormControl, MenuItem } from "@mui/material";
import "./Select.css"

const Select = (props) => {
    const { defaultValue, value, sx, items, onSelectChange } = props

    const handleChange = event => {
        const selectedItem = items?.find(item => item.RecId === event.target.value)
        onSelectChange(selectedItem)
    }

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <MuiSelect
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue={defaultValue}
                    value={value}
                    components={Box}
                    renderValue={(_)=><Typography color='#fff'>{value?.Name}</Typography>}
                    displayEmpty
                    sx={{ ...sx, backgroundColor: "rgba(255,255,255,0.3)",color:'white' }}
                    onChange={handleChange}
                    className="select"
                    {...props.props}
                >
                    {items && (items?.length === 0 ? (
                        <></>
                    ) : (
                        items.map((item, index) => (
                            <MenuItem key={item.RecId} value={item.RecId}>
                                <Typography sx={{ color: "black" }}>
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
