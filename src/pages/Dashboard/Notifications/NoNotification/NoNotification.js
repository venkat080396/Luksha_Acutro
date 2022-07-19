import React from 'react'
import { Grid, Typography, useTheme } from '@mui/material'
import { NOTIFICATIONS } from '../../constants'
import { ReactComponent as NotificationBellIcon } from "../../../../assets/icons/Notification Bell2.svg"

const NoNotification = () => {
    const theme = useTheme();

    return (
        <Grid container
            alignItems="center"
            justifyContent="center"
            direction="column"
            sx={{
                background: "linear-gradient(130.77deg, rgba(255, 255, 255, 0.16) 2.61%, rgba(255, 255, 255, 0.05) 94.4%)",
                paddingTop: theme.spacing(7)
            }}>
            <Grid item>
                <Typography variant="header3">
                    {NOTIFICATIONS.ALL_CAUGHT_UP}
                </Typography>
            </Grid>
            <Grid item sx={{ marginTop: theme.spacing(-1.25), height: theme.spacing(21.25) }}>
                <NotificationBellIcon height={theme.spacing(22)} width={theme.spacing(20.5)} />
            </Grid>
            <Grid item>
                <Typography variant="body1">
                    {NOTIFICATIONS.NO_NEW_NOTIFICATIONS}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default NoNotification