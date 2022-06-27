import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function MultipleSelectBox(props) {
    const theme = useTheme();

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
                    {props.MenuItem.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, props.currentValue, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}