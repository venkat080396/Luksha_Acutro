import React from 'react';
import { Grid, Typography, Button, useTheme } from '@mui/material';
import { Sms as SmsIcon, MailOutline as MailOutlineIcon } from '@mui/icons-material';
import { Type } from '../Type';
import { CONNECTORS } from '../../constants';
import { StyledGrid } from './style';

const types = [
    { icon: <MailOutlineIcon sx={{ height: '40px', width: '40px' }} />, title: CONNECTORS.EMAIL, description: CONNECTORS.EMAIL_LIST_DESCRIPTION },
    { icon: <SmsIcon sx={{ height: '40px', width: '40px' }} />, title: CONNECTORS.SMS, description: CONNECTORS.SMS_LIST_DESCRIPTION }
]

const TypesList = ({ onCancel, onSelect }) => {
    const theme = useTheme();
    return (
        <StyledGrid container
            direction='column'>
            <Grid item>
                <Typography variant='header2'>
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
                    <Typography variant='body2'>
                        {CONNECTORS.CANCEL}
                    </Typography>
                </Button>
            </Grid>
        </StyledGrid>
    )
}

export { TypesList }