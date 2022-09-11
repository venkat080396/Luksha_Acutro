import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Checkbox from '../Checkbox';

const CheckboxLabel = (props) => {
    const { label, checked, value, onChange } = props

    return (
        <FormControl component='fieldset'>
            <FormControlLabel
                value='end'
                control={<Checkbox item={value} checked={checked} onChange={onChange} />}
                label={label}
                labelPlacement='end'
            />
        </FormControl>
    )
}

export default CheckboxLabel