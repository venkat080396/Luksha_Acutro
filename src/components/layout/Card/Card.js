import React from 'react';
import { Grid } from '@mui/material';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/system';
import { TooltipIcon } from '../../DataDisplay/TooltipIcon';

const Card = (props) => {
    const { sx, content, headerContent, informationContnet } = props

    return (

        <MuiCard sx={sx} container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
        >
            <Grid item>
                <Grid container
                    direction="row"
                    alignItems="center">
                    {headerContent && (
                        <Grid item xs sx={{ marginTop: 2, marginBottom: 2, fontWeight: "bold" }}>
                            {headerContent}
                        </Grid>
                    )}
                    {informationContnet && (
                        <Grid item xs={0.3}>
                            <TooltipIcon content={informationContnet} />
                        </Grid>
                    )}
                </Grid>
            </Grid>
            <Grid item>
                {content}
            </Grid>
        </MuiCard>
    )
}

export default Card