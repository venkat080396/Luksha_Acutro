import React from "react";

import Dialog from "../../../components/dialog/Dialog";

import {
    Grid,
    Box,
    Button,
    CardHeader,
    Typography,
} from "@mui/material";

export default function ConnectorsListComponents(props) {

    return (
        <Dialog
            open={props.openDialog}
            handleClose={() => props.setOpenDialog(false)}
            title={""}
            content={
                <>
                    <Box maxWidth={400}>
                        <Grid container spacing={2}>
                            {[
                                { title: 'Email List', subtitle: '  Use this Connect to send messages' },
                                { title: 'Microsoft Team', subtitle: '  Use this Connect to send messages' },
                                { title: 'SMS List', subtitle: '  Use this Connect to send messages' },
                                { title: 'Webhook', subtitle: '  Use this Connect to send messages' }
                            ].map((item) => (
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <CardHeader
                                        title={
                                            <Typography
                                                sx={{
                                                    color: "white",
                                                    fontWeight: "900",
                                                }}
                                                variant="body1"
                                            >
                                                {item.title}
                                            </Typography>
                                        }
                                        subheader={
                                            <Typography sx={{ color: "white" }} variant="body2">
                                                {item.subtitle}
                                            </Typography>
                                        }
                                        action={
                                            <Box pt={2}>
                                                <Button
                                                    variant="contained"
                                                    onClick={() => {
                                                        props.setOpenDialog(false);
                                                        props.setOpenDialogForm(true);
                                                    }}
                                                >
                                                    Select
                                                </Button>
                                            </Box>
                                        }
                                    />
                                </Grid>
                            ))}

                        </Grid>
                    </Box>
                </>
            }
        />
    );
}
