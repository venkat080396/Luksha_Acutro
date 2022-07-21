import React from 'react'
import { Button, Grid, Typography, useTheme } from '@mui/material'
import { CONNECTORS } from '../../constants'

const Type = ({ icon, title, description, onSelect }) => {
    const theme = useTheme();

    return (
        <Grid container
            alignItems="center"
            justifyContent="center"
            sx={{ marginTop: theme.spacing(2.5) }}>
            <Grid item xs={2} sx={{ paddingTop: theme.spacing(1.25) }}>
                {icon}
            </Grid>
            <Grid item container xs={8}
                direction="column">
                <Grid item>
                    <Typography variant="body1" fontWeight="bold">
                        {title}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body2">
                        {description}
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={2}>
                <Button variant="contained" onClick={onSelect}>
                    <Typography variant="body2">
                        {CONNECTORS.SELECT}
                    </Typography>
                </Button>
            </Grid>
        </Grid>
    )
}

export default Type