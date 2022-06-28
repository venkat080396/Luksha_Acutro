import React from 'react';
import { Grid } from '@mui/material';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/system';
import TooltipIcon from '../../tooltipIcon/TooltipIcon';

const Card = (props) => {
    const { sx, content, headerContent, informationContnet } = props

    const StyledCard = styled(MuiCard)({
        borderRadius: "10px",
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
                    alignItems="center">
                    <Grid item xs sx={{ marginTop: 2, marginBottom: 2, fontWeight: "bold" }}>
                        {headerContent}
                    </Grid>
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
        </StyledCard>
    )
}

export default Card