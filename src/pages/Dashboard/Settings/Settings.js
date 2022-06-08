import React from 'react'
import { Grid } from "@mui/material";
import Card from '../../../components/layout/Card/Card'
import Label from "../../../components/forms/Label/Label"

const Settings = () => {
    return (
        <Grid container>
            <Grid item>
                <Card
                    headerContent={<Label sx={{ margin: 2, width: "13em", height: "5em", border: "1px solid red" }} label="Choose which tiles you see on your dashboard." />}
                    sx={{ width: "16vw", height: "60vh" }}
                    content="" />
            </Grid>
        </Grid>
    )
}

export default Settings