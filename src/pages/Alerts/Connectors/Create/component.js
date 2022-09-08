import React, { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import { Grid, Typography, useTheme, TextField, Button } from '@mui/material';
import { useSnackbar } from 'notistack';
import { CONNECTORS } from '../../constants';


const StyledGrid = styled(Grid)(({ theme }) => ({
    background: "linear-gradient(-30.77deg, #767f82, #596a75, #425569, #323f5b, #2a294b)",
    borderRadius: theme.spacing(1.875),
    padding: theme.spacing(2.5)
}));

const Create = ({ onCancel, onSave, type, item }) => {
    const theme = useTheme();
    const [name, setName] = useState("");
    const [recipients, setRecipients] = useState("");
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        setName(item?.Name);
        setRecipients(item?.Recipients);
    }, [item?.Name, item?.Recipients])

    const handleSave = () => {
        onSave(item?.RecId, type, name, recipients);
        onCancel();
        enqueueSnackbar(item?.RecId ?
            (type === CONNECTORS.EMAIL ? CONNECTORS.EMAIL_LIST_UPDATED : CONNECTORS.SMS_LIST_UPDATED) :
            (type === CONNECTORS.EMAIL ? CONNECTORS.EMAIL_LIST_CREATED : CONNECTORS.SMS_LIST_CREATED),
            { variant: 'success' })
    }

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
                        value={name}
                        sx={{
                            width: theme.spacing(60),
                            height: theme.spacing(5),
                            borderRadius: theme.spacing(1),
                        }}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Grid item container
                direction="column">
                <Grid item>
                    <Typography variant="body1">
                        {CONNECTORS.RECIPIENTS} *
                    </Typography>
                    {type && type === CONNECTORS.EMAIL && (
                        <Typography>
                            {CONNECTORS.EMAIL_MESSAGE}
                        </Typography>
                    )}
                    {type && type === CONNECTORS.SMS && (
                        <Typography>
                            {CONNECTORS.SMS_MESSAGE}
                        </Typography>
                    )}
                </Grid>
                <Grid item>
                    <TextField multiline
                        value={recipients}
                        sx={{
                            width: theme.spacing(60),
                            height: theme.spacing(8.7),
                            borderRadius: theme.spacing(1)
                        }}
                        onChange={(e) => setRecipients(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Grid item container
                alignItems="center"
                justifyContent="flex-end"
                spacing={2}>
                <Grid item>
                    <Button variant="contained" onClick={handleSave}>
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

export { Create }