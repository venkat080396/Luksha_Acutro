import React from 'react'
import { Grid, Stack, Avatar, Typography, } from "@mui/material";


const UserCard = (props) => {
    const { userAttributes, onClick, sx } = props
    return (
        <Grid container
            spacing={2}
            onClick={onClick}
            sx={{ ...sx }}>
            <Grid item>
                <Avatar sx={{ bgcolor: "white", color: "red" }}>R</Avatar>
            </Grid>
            <Grid item>
                <Stack>
                    <Typography variant="body1" fontWeight={700}>
                        {userAttributes?.filter(attr => attr.Name === "custom:companyName")[0].Value}
                    </Typography>
                    <Typography sx={{ fontSize: 10, color: "#c9c9c9" }}>Administrator</Typography>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default UserCard