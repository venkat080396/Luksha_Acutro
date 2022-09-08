import { Grid, Typography, useTheme } from '@mui/material'
import React from 'react'
import { NOTIFICATIONS } from '../../constants'
import { ReactComponent as NotificationBellIcon } from "../../../../assets/icons/Notification Bell2.svg"

const ClearAllNotification = ({ onNoClick, onYesClick }) => {
    const theme = useTheme();

    return (
        <Grid container
            alignItems="center"
            justifyContent="center"
            direction="column"
            sx={{
                background: theme.palette.secondary.main,
                textAlign: "center",
                padding: `${theme.spacing(3.125)} ${theme.spacing(4.375)} ${theme.spacing(0)} ${theme.spacing(4.375)}`
            }}>
            <Grid item>
                <Typography variant="header3">
                    {NOTIFICATIONS.CLEAR_NOTIFICATIONS_MESSAGE}
                </Typography>
            </Grid>
            <Grid item sx={{ height: theme.spacing(13.625) }}>
                <NotificationBellIcon height={theme.spacing(14)} width={theme.spacing(12.5)} />
            </Grid>
            <Grid item>
                <Typography variant="header3">
                    {NOTIFICATIONS.ARE_YOU_SURE}
                </Typography>
            </Grid>
            <Grid container item
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                    height: theme.spacing(10),
                    padding: `${theme.spacing(1.875)} ${theme.spacing(1.25)} ${theme.spacing(0.625)} ${theme.spacing(1.25)}`
                }}>
                <Grid item>
                    <Typography
                        variant="header3"
                        sx={{ cursor: "pointer" }}
                        onClick={onNoClick}>
                        {NOTIFICATIONS.NO}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        variant="header3"
                        sx={{ cursor: "pointer" }}
                        onClick={onYesClick}>
                        {NOTIFICATIONS.YES}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export { ClearAllNotification }