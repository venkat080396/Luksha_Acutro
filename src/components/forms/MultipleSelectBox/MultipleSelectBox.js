import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import './MultipleSelectBoxStyle.css';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        },
    },
};


export default function MultipleSelectBox(props) {

    return (
        <div>
            <FormControl fullWidth>
                <Select
                    multiple
                    className="multipleselect"
                    displayEmpty
                    value={props.currentValue}
                    onChange={props.handleChange}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                        if (selected.length === 0) {
                            return <em>{props.placeholder ? props.placeholder : "Select Value"}</em>;
                        }
                        return selected.join(', ');
                    }}
                    inputProps={{ 'aria-label': 'Without label' }}
                    MenuProps={MenuProps}
                    {...props}
                    size='small'
                >
                    {props.MenuItem.map((name,index) => (
                        <MenuItem key={name} value={name}>
                            <Checkbox checked={props.currentValue.indexOf(name) > -1} />
                            <ListItemText primary={`User ${index}`} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}