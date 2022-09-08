import React from 'react'
import { Grid, Typography, useTheme } from '@mui/material'
import { styled } from '@mui/system';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { ReactComponent as DeleteIcon } from "../../../../assets/icons/Delete.svg";
import { NOTIFICATIONS } from "../../constants";

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
    border: `${theme.spacing(0.125)} solid rgba(255, 255, 255, 0.33)`,
    boxShadow: `${theme.spacing(0.75)} ${theme.spacing(0.75)} ${theme.spacing(0.75)} rgba(0, 0, 0, 0.15)`,
    borderRadius: theme.spacing(1.25),
    lineHeight: "12px"
}));

const StyledConfirmToDelete = styled(Grid)(({ theme }) => ({
    width: "100%",
    height: "100%",
    background: "rgba(233, 120, 120, 0.8)",
    boxShadow: `${theme.spacing(0.75)} ${theme.spacing(0.75)} ${theme.spacing(0.75)} rgba(0, 0, 0, 0.15)`,
    borderRadius: theme.spacing(1.25),
    marginTop: theme.spacing(0.3),
    cursor: "pointer",
    marginLeft: 0
}))

const Notification = ({ recId, icon, title, description, time, onDelete }) => {

    const theme = useTheme();

    return (
        <StyledGrid container>
            <Swiper>
                <SwiperSlide>
                    <StyledNotification container direction="column">
                        <Grid item
                            sx={{
                                textAlign: "end",
                                paddingRight: theme.spacing(1),
                                paddingTop: theme.spacing(0.5)
                            }}>
                            <Typography
                                variant="body4"
                                sx={{ color: "#F4F4F4" }}>
                                {time}
                            </Typography>
                        </Grid>
                        <Grid item sx={{ marginTop: theme.spacing(-1) }}>
                            <Grid container
                                spacing={1.5}>
                                <Grid item sx={{ marginLeft: theme.spacing(1.5), marginTop: theme.spacing(0.5) }}>
                                    {icon}
                                </Grid>
                                <Grid item>
                                    <Grid container
                                        direction="column">
                                        <Grid item>
                                            <Typography variant="body2">{title}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="body3">{description}</Typography>
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
                        justifyContent="space-evenly"
                        onClick={() => onDelete(recId)}>
                        <Grid item>
                            <DeleteIcon
                                height="2.5em"
                                width="3em"
                                style={{ marginLeft: theme.spacing(-5), marginTop: theme.spacing(-0.625) }} />
                        </Grid>
                        <Grid item>
                            <Typography variant="body2">
                                {NOTIFICATIONS.TAP_TO_CONFIRM_DELETE}
                            </Typography>
                        </Grid>
                    </StyledConfirmToDelete>
                </SwiperSlide>
            </Swiper>
        </StyledGrid>
    )
}

export { Notification }