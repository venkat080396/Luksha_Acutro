import React from 'react'
import { Grid, Typography } from '@mui/material'
import { styled } from '@mui/system';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { ReactComponent as DeleteIcon } from "../../../../assets/icons/Delete.svg";

const StyledGrid = styled(Grid)(({ theme }) => ({
    width: theme.spacing(28.625),
    height: theme.spacing(6.875),
    marginTop: theme.spacing(1.25),
    marginRight: theme.spacing(1.25)
}));

const StyledNotification = styled(Grid)(({ theme }) => ({
    width: "100%",
    height: "100%",
    background: "linear-gradient(130.77deg, rgba(255, 126, 126, 0.16) 2.61%, rgba(255, 255, 255, 0.05) 94.4%)",
    border: "1px solid rgba(255, 255, 255, 0.33)",
    boxShadow: "6px 6px 6px rgba(0, 0, 0, 0.15)",
    borderRadius: theme.spacing(1.25),
    //marginTop: theme.spacing(1.25),
    //marginRight: theme.spacing(1.25)
}));

const StyledConfirmToDelete = styled(Grid)(({ theme }) => ({
    width: "100%",
    height: "100%",
    background: "rgba(233, 120, 120, 0.8)",
    boxShadow: "6px 6px 6px rgba(0, 0, 0, 0.15)",
    borderRadius: theme.spacing(1.25),
    marginTop: theme.spacing(0.3),
    marginLeft: 0
}))

const Notification = ({ icon, title, description, time }) => {
    return (
        <StyledGrid container>
            <Swiper>
                <SwiperSlide>
                    <StyledNotification container direction="column">
                        <Grid item sx={{ textAlign: "end", paddingRight: "5px" }}>
                            <Typography variant="body2" sx={{ color: "#F4F4F4" }}>{time}</Typography>
                        </Grid>
                        <Grid item>
                            <Grid container
                                spacing={2}>
                                <Grid item sx={{ margin: "5px" }}>
                                    {icon}
                                </Grid>
                                <Grid item>
                                    <Grid container
                                        direction="column">
                                        <Grid item>
                                            <Typography variant="body1">{title}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="body1">{description}</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </StyledNotification>
                </SwiperSlide>
                <SwiperSlide>
                    <StyledConfirmToDelete container
                        spacing={2}
                        alignItems="flex-start"
                        justifyContent="space-evenly">
                        <Grid item>
                            <DeleteIcon height="2.5em" width="3em" style={{ marginLeft: "-40px", marginTop: "-5px" }} />
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">
                                Tap to Confirm delete
                            </Typography>
                        </Grid>
                    </StyledConfirmToDelete>
                </SwiperSlide>
            </Swiper>
        </StyledGrid>
    )
}

export default Notification