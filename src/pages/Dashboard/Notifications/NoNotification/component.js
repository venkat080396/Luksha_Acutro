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
                background: "linear-gradient(to left bottom, #767f82, #596a75, #425569, #323f5b, #2a294b)",
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
            <Grid item sx={{ height: theme.spacing(6.5) }}>
                <Typography variant="body1">
                    {NOTIFICATIONS.NO_NEW_NOTIFICATIONS}
                </Typography>
            </Grid>
        </Grid>
    )
}

export { NoNotification }