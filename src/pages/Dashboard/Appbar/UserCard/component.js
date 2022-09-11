import React from 'react'
import { Grid, Stack, Avatar, Typography, useTheme } from '@mui/material';
import { APPBAR } from '../../constants'

const UserCard = (props) => {
    const theme = useTheme();
    const { userAttributes, onClick, sx } = props
    return (
        <Grid container
            spacing={2}
            onClick={onClick}
            sx={{ ...sx }}>
            <Grid item>
                <Avatar sx={{
                    bgcolor: theme.palette.common.white,
                    color: theme.palette.secondary.main,
                    height: theme.spacing(5.625),
                    width: theme.spacing(5.625),
                    fontWeight: 'bold'
                }}>R</Avatar>
            </Grid>
            <Grid item>
                <Stack>
                    <Typography variant='header3' fontWeight={700}>
                        {userAttributes?.filter(attr => attr.Name === 'custom:companyName')[0].Value}
                    </Typography>
                    <Typography variant='body1'>
                        {APPBAR.ADMINISTRATOR}
                    </Typography>
                </Stack>
            </Grid>
        </Grid>
    )
}

export { UserCard }