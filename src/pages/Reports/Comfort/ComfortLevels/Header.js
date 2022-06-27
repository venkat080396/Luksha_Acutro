import React from 'react'
import { Grid } from '@mui/material'
import Label from "../../../../components/forms/Label/Label"
import { ReactComponent as EyeOpenIcon } from "../../../../assets/icons/Eye Open.svg"
import { COMFORT } from '../../constants'

const Header = (props) => {
    const { spacing } = props;
    return (
        <Grid container
            direction="row"
            alignItems="center"
            spacing={spacing}>
            <Grid item>
                <Label sx={{ marginLeft: 4, marginBottom: 2, marginTop: 2 }} label={`${COMFORT.COMFORT_LEVELS.HEADER} ${COMFORT.COMFORT_LEVELS.SUB}`} />
            </Grid>
            <Grid item>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                        {COMFORT.COMFORT_LEVELS.HEADER}
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