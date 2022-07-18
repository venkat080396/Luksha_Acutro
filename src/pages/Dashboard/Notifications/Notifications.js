import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Notification from './Notification/Notification'
import PersonIcon from "@mui/icons-material/Person";
import { NOTIFICATIONS } from "../constants";

export const Notifications = () => {
    const notifications = [{ icon: <PersonIcon sx={{ color: "white" }} />, title: "Overheating Warning", description: "Asset 123 is not working", time: "12:00" },
    { icon: <PersonIcon sx={{ color: "white" }} />, title: "Overheating Warning", description: "Asset 123 is not working", time: "12:00" },
    { icon: <PersonIcon sx={{ color: "white" }} />, title: "Overheating Warning", description: "Asset 123 is not working", time: "12:00" },
    { icon: <PersonIcon sx={{ color: "white" }} />, title: "Overheating Warning", description: "Asset 123 is not working", time: "12:00" },
    { icon: <PersonIcon sx={{ color: "white" }} />, title: "Overheating Warning", description: "Asset 123 is not working", time: "12:00" }];

    return (
        <Grid container
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ width: "100%", height: "100%" }}>
            <Grid item>
                <Typography variant="body3" sx={{ height: "30px" }}>
                    {NOTIFICATIONS.SWIPE_TO_DELETE}
                </Typography>
            </Grid>
            <Grid item sx={{ maxHeight: "238px", overflowY: 'auto', overflowX: "hidden" }}>
                {notifications && notifications.map((notification) =>
                (<Notification
                    icon={notification.icon}
                    title={notification.title}
                    description={notification.description}
                    time={notification.time}
                />))}
            </Grid>
            <Grid item
                sx={{ background: "#4991BC", width: "100%", height: "36px", textAlign: "center", paddingTop: "3px" }}>
                <Typography
                    variant="header3">clear all</Typography>
            </Grid>
        </Grid>
    )
}
