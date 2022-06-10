import React from 'react'
import { Button, Grid } from "@mui/material";
import Card from '../../../components/layout/Card/Card'
import SettingsList from './SettingsList/SettingsList';

const Settings = (props) => {
    const { handleClose, handleSubmit } = props;

    return (
        <Grid container
            direction="column"
            alignItems="center">
            <Grid item>
                <Card
                    content={<SettingsList />} />
            </Grid>
            <Grid item>
                <Grid container
                    spacing={2}
                    sx={{ marginTop: "0.5em" }}>
                    <Grid item>
                        <Button variant="contained" color="error" onClick={handleClose}>Cancel</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="info" onClick={handleSubmit}>Submit</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Settings