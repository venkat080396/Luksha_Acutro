import React from 'react';
import { styled } from '@mui/system';
import { Grid, Typography, Button, useTheme } from '@mui/material';
import SmsIcon from '@mui/icons-material/Sms';
import { Type } from '../Type';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { CONNECTORS } from '../../constants';

const types = [
    { icon: <MailOutlineIcon sx={{ height: "40px", width: "40px" }} />, title: CONNECTORS.EMAIL, description: CONNECTORS.EMAIL_LIST_DESCRIPTION },
    { icon: <SmsIcon sx={{ height: "40px", width: "40px" }} />, title: CONNECTORS.SMS, description: CONNECTORS.SMS_LIST_DESCRIPTION }
]

const StyledGrid = styled(Grid)(({ theme }) => ({
    background: "linear-gradient(-30.77deg, #767f82, #596a75, #425569, #323f5b, #2a294b)",
    borderRadius: theme.spacing(1.875),
    padding: theme.spacing(2.5),
    width: theme.spacing(74.5)
}));

const TypesList = ({ onCancel, onSelect }) => {
    const theme = useTheme();
    return (
        <StyledGrid container
            direction="column">
            <Grid item>
                <Typography variant="header2">
                    {CONNECTORS.CREATE_CONNECTOR}
                </Typography>
            </Grid>
            <Grid item sx={{ height: theme.spacing(47.2) }}>
                {types && types.map(type => (
                    <Type {...type} onSelect={() => onSelect(type)} />
                ))}
            </Grid>
            <Grid item sx={{ paddingLeft: theme.spacing(62) }}>
                <Button onClick={onCancel}>
                    <Typography variant="body2">
                        {CONNECTORS.CANCEL}
                    </Typography>
                </Button>
            </Grid>
        </StyledGrid>
    )
}

export { TypesList }