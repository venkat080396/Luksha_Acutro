import React from 'react';
import { Grid, Stack } from '@mui/material';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/system';
import TooltipIcon from '../../tooltipIcon/TooltipIcon';

const Card = (props) => {
    const { sx, content, headerContent, informationContnet } = props

    const StyledCard = styled(MuiCard)({
        borderRadius: "1em",
        border: "0.05em solid rgba(255,255,255,0.3)",
        background: "rgba(255,255,255,0.05)",
        color: "white",
        fontWeight: "bold"
    });

    return (

        <StyledCard sx={sx} container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
        >
            <Grid item>
                <Grid container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center">
                    <Grid item>
                        {headerContent}
                    </Grid>
                    {informationContnet && (
                        <Grid item sx={{ paddingRight: "2%", paddingTop: "2%" }}>
                            <TooltipIcon content={informationContnet} />
                        </Grid>
                    )}
                </Grid>
            </Grid>
            <Grid item>
                {content}
            </Grid>
        </StyledCard>
    )
}

export default Card