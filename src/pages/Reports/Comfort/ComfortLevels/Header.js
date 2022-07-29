import React from 'react'
import { Grid, Typography } from '@mui/material'
import Label from "../../../../components/forms/Label/Label"
import { ReactComponent as EyeOpenIcon } from "../../../../assets/icons/Eye Open.svg"
import { COMFORT } from '../../constants'

const Header = (props) => {
    const { spacing } = props;
    return (
        <Grid container
            direction="row"
            alignItems="center"
            spacing={spacing}
            sx={{ paddingTop: "-1em" }}>
            <Grid item sx={{ marginTop: "-1em" }}>
                <Grid container
                    sx={{ marginLeft: 1 }}
                    alignItems="center"
                    justifyContent="center"
                    spacing={1.5}>
                    <Grid item>
                        <Typography variant="header2">
                            {COMFORT.COMFORT_LEVELS.HEADER}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="header3">
                            {COMFORT.COMFORT_LEVELS.SUB_HEADER}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item sx={{ marginTop: "-1em", fontWeight: "normal", fontSize: 14 }}>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                        <Typography variant="header2">
                            {COMFORT.COMFORT_LEVELS.SUB}
                        </Typography>
                    </Grid>
                    <Grid item sx={{ marginTop: "0.6em" }}>
                        <EyeOpenIcon height="3em" width="3em" />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Header