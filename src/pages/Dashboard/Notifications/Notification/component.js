import React from 'react'
import { Grid, Typography, useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ReactComponent as DeleteIcon } from '../../../../assets/icons/Delete.svg';
import { NOTIFICATIONS } from '../../constants';
import { StyledGrid,StyledNotification,StyledConfirmToDelete } from './style';

const Notification = ({ recId, icon, title, description, time, onDelete }) => {

    const theme = useTheme();

    return (
        <StyledGrid container>
            <Swiper>
                <SwiperSlide>
                    <StyledNotification container direction='column'>
                        <Grid item
                            sx={{
                                textAlign: 'end',
                                paddingRight: theme.spacing(1),
                                paddingTop: theme.spacing(0.5)
                            }}>
                            <Typography
                                variant='body4'
                                sx={{ color: '#F4F4F4' }}>
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
                                        direction='column'>
                                        <Grid item>
                                            <Typography variant='body2'>{title}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant='body3'>{description}</Typography>
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
                        alignItems='flex-start'
                        justifyContent='space-evenly'
                        onClick={() => onDelete(recId)}>
                        <Grid item>
                            <DeleteIcon
                                height='2.5em'
                                width='3em'
                                style={{ marginLeft: theme.spacing(-5), marginTop: theme.spacing(-0.625) }} />
                        </Grid>
                        <Grid item>
                            <Typography variant='body2'>
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