import React from 'react'
import { Grid, Stack, Avatar, Typography, } from "@mui/material";
import { APPBAR } from '../../constants'

const UserCard = (props) => {
    const { userAttributes, onClick, sx } = props
    return (
        <Grid container
            spacing={2}
            onClick={onClick}
            sx={{ ...sx }}>
            <Grid item>
                <Avatar sx={{ bgcolor: "white", color: "red", height: "45px", width: "45px" }}>R</Avatar>
            </Grid>
            <Grid item>
                <Stack>
                    <Typography variant="header3" fontWeight={700}>
                        {userAttributes?.filter(attr => attr.Name === "custom:companyName")[0].Value}
                    </Typography>
                    <Typography variant="body1">
                        {APPBAR.ADMINISTRATOR}
                    </Typography>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default UserCard