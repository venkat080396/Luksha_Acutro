import React from 'react';
import { styled } from '@mui/system';
import { Grid, Typography, useTheme, TextField, Button } from '@mui/material';
import { CONNECTORS } from '../../constants';

const StyledGrid = styled(Grid)(({ theme }) => ({
    background: "linear-gradient(-30.77deg, #767f82, #596a75, #425569, #323f5b, #2a294b)",
    borderRadius: theme.spacing(1.875),
    padding: theme.spacing(2.5)
}));

const Create = ({ onCancel, type, item }) => {
    const theme = useTheme();

    return (
        <StyledGrid container
            direction="column"
            spacing={2}>
            <Grid item>
                {item && (
                    <Typography variant="header2">
                        {CONNECTORS.UPDATE_CONNECTOR}
                    </Typography>
                )}
                {!item && (
                    <Typography variant="header2">
                        {CONNECTORS.CREATE_CONNECTOR}
                    </Typography>
                )}
            </Grid>
            <Grid item container
                direction="column">
                <Grid item>
                    <Typography variant="body1">
                        {CONNECTORS.NAME} *
                    </Typography>
                </Grid>
                <Grid item>
                    <TextField
                        value={item?.name}
                        sx={{
                            width: theme.spacing(60),
                            height: theme.spacing(5),
                            borderRadius: theme.spacing(1),
                        }}
                    />
                </Grid>
            </Grid>
            <Grid item container
                direction="column">
                <Grid item>
                    <Typography variant="body1">
                        {CONNECTORS.RECIPIENTS} *
                    </Typography>
                    {type && type === CONNECTORS.EMAIL_LIST && (
                        <Typography>
                            {CONNECTORS.EMAIL_MESSAGE}
                        </Typography>
                    )}
                    {type && type === CONNECTORS.SMS_LIST && (
                        <Typography>
                            {CONNECTORS.SMS_MESSAGE}
                        </Typography>
                    )}
                </Grid>
                <Grid item>
                    <TextField multiline
                        value={item?.recipients}
                        sx={{
                            width: theme.spacing(60),
                            height: theme.spacing(8.7),
                            borderRadius: theme.spacing(1)
                        }}
                    />
                </Grid>
            </Grid>
            <Grid item container
                alignItems="center"
                justifyContent="flex-end"
                spacing={2}>
                <Grid item>
                    <Button variant="contained">
                        <Typography variant="body2">
                            {CONNECTORS.SAVE}
                        </Typography>
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" onClick={onCancel}>
                        <Typography variant="body2">
                            {CONNECTORS.CANCEL}
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </StyledGrid>
    )
}

export default Create