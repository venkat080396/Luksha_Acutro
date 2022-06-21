import React from 'react'
import { Grid, Stack } from '@mui/material'

const users = [{ RecId: 1, username: "Adeala", role: "Sys Admin" },
{ RecId: 2, username: "Jacob", role: "User" },
{ RecId: 3, username: "Shakthi", role: "Sys Admin" },
{ RecId: 4, username: "stuart.booth@emcoruk.com", role: "User" },
{ RecId: 4, username: "thomas.clarke@emcoruk.com", role: "User" }]

const EscalationSettings = () => {
    return (
        <Grid container>
            <Grid item xs={4}>
                <Stack>
                    <div>Adeala</div>
                    <div>Sys Admin</div>
                </Stack>
            </Grid>
            <Grid item xs={7}>
                <Grid container
                    sx={{ border: "0.3px solid gray", borderRadius: 2 }}
                    justifyContent="space-around">
                    <Grid item sx={{ border: "0.3px solid gray" }}>
                        Level 1
                    </Grid>
                    <Grid item sx={{ border: "0.3px solid gray" }}>
                        Level 2
                    </Grid>
                    <Grid item sx={{ border: "0.3px solid gray" }}>
                        Level 3
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default EscalationSettings