import React from 'react'
import { Grid } from '@mui/material'
import Label from "../../../../components/forms/Label/Label"
import { ReactComponent as EyeOpenIcon } from "../../../../assets/icons/Eye Open.svg"

const Header = () => {
    return (
        <Grid container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ paddingRight: 5 }}>
            <Grid item>
                <Label sx={{ marginLeft: 4, marginBottom: 2, marginTop: 2 }} label="Comfort Levels (by device)" />
            </Grid>
            <Grid item>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                        Comfortable Levels
                    </Grid>
                    <Grid item>
                        <EyeOpenIcon height="2.5em" width="2.5em" />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Header