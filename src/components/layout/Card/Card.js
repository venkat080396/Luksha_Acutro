import React from 'react';
import { Grid } from '@mui/material';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/system';

const Card = (props) => {
    const { sx, content, headerContent } = props

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
                {headerContent}
            </Grid>
            <Grid item>
                {content}
            </Grid>
        </StyledCard>
    )
}

export default Card