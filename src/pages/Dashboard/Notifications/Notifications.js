import React, { useState } from 'react'
import { Grid, Typography, useTheme } from '@mui/material'
import { useDispatch, useSelector } from "react-redux";
import PersonIcon from "@mui/icons-material/Person";
import Notification from './Notification/Notification'
import { NOTIFICATIONS } from "../constants";
import ClearAllNotification from './ClearAllNotification/ClearAllNotification';
import NoNotification from './NoNotification/NoNotification';
import { setNotifications, getNotifications } from "../../../features/Dashboard/dashboardSlice";

export const Notifications = () => {
    const [clearAll, setClearAll] = useState(false);
    const theme = useTheme();
    const dispatch = useDispatch();
    const notifications = useSelector(getNotifications);

    const handleDelete = (recId) => {
        //Delete selected notification
    }

    return (
        <Grid container
            direction="column"
            alignItems="center"
            justifyContent="center">
            {
                !clearAll && notifications && (
                    <>
                        <Grid item>
                            <Typography
                                variant="body1"
                                sx={{ height: theme.spacing(3.75) }}>
                                {NOTIFICATIONS.SWIPE_TO_DELETE}
                            </Typography>
                        </Grid>
                        <Grid item
                            sx={{
                                maxHeight: theme.spacing(28.626),
                                overflowY: 'auto',
                                overflowX: "hidden"
                            }}>
                            {notifications && notifications.map((notification) =>
                            (<Notification
                                {...notification}
                                icon={<PersonIcon sx={{ color: "white" }} />}
                                onDelete={handleDelete}
                            />))}
                        </Grid>
                        <Grid item
                            sx={{
                                background: theme.palette.primary.main,
                                width: "100%",
                                height: theme.spacing(4.5),
                                textAlign: "center",
                                paddingTop: theme.spacing(0.375),
                                cursor: "pointer"
                            }}
                            onClick={() => setClearAll(true)}
                        >
                            <Typography variant="header3">
                                {NOTIFICATIONS.CLEAR_ALL}
                            </Typography>
                        </Grid>
                    </>
                )}
            {
                clearAll && notifications && (
                    <ClearAllNotification
                        onNoClick={() => setClearAll(false)}
                        onYesClick={() => dispatch(setNotifications(null))} />
                )}
            {
                !notifications && (
                    <NoNotification />
                )}
        </Grid>
    )
}
