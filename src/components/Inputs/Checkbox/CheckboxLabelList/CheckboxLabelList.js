import React from 'react'
import CheckboxLabel from '../CheckboxLabel/CheckboxLabel';
import { Grid } from "@mui/material";

const CheckboxLabelList = (props) => {
    const { items, checked, setChecked } = props;

    const handleCheck = (event, value) => {
        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...updatedList, value];
        } else {
            updatedList.splice(checked.indexOf(value), 1);
        }
        setChecked(updatedList);
    };

    return (
        <Grid container
            direction="column">
            {items && items.map((item) => (
                <Grid item>
                    <CheckboxLabel
                        value={item}
                        onChange={(e, value) => handleCheck(e, value)}
                        checked={checked}
                        label={item.name} />
                </Grid>
            ))}
        </Grid>
    )
}

export default CheckboxLabelList