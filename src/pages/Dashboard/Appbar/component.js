import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Box, Toolbar, Typography, IconButton, useTheme } from '@mui/material';
import { Menu as MenuIcon, FilterAlt as FilterAltIcon } from '@mui/icons-material';
import { StyledBadge, AppBar } from './style';
import { getSelectedBuilding, getSelectedFloor, getFromDate, getToDate } from '../../Home/slice';
import { getUserAttributes, setUserAttributes } from '../../Login/slice'
import Pool from '../../../UserPool'
import { UserCard } from './UserCard';
import { UserCardDialog } from './UserCardDialog';
import { Dialog } from '../../../components/Feedback/Dialog';
import { APPBAR } from '../constants'
import { Notifications } from '../Notifications';
import { ReactComponent as NotificationBellIcon } from '../../../assets/icons/NotificationBell1.svg'
import { ReactComponent as UserSettingsIcon } from '../../../assets/icons/UserSettings.svg'

const AppBarComponent = ({
    open,
    openRight,
    leftOpen,
    rightOpenClose,
    floorName,
    buildingName,
}) => {
    const dispatch = useDispatch();
    const theme = useTheme();
    const [openUserCard, setOpenUserCard] = useState(false);
    const [openNotifications, setOpenNotifications] = useState(false);
    const selectedBuilding = useSelector(getSelectedBuilding);
    const selectedFloor = useSelector(getSelectedFloor);
    const selectedFromDate = useSelector(getFromDate);
    const selectedToDate = useSelector(getToDate);
    const userAttributes = useSelector(getUserAttributes);

    const fetchUserAttributes = async () => {
        const user = Pool.getCurrentUser();

        user.getSession(function (err, session) {
        });

        user.getUserAttributes(function (err, result) {
            dispatch(setUserAttributes(result));
        });
    }

    useEffect(() => {
        fetchUserAttributes();
    }, [])


    return (
        <AppBar
            position='fixed'
            open={open}
            component={Box}
            elevation={0}
        >
            <Box>
                <Toolbar>
                    <IconButton
                        color='inherit'
                        onClick={leftOpen}
                        edge='start'
                        sx={{
                            marginRight: theme.spacing(0.625),
                            paddingRight: theme.spacing(4),
                            ...(open && { display: 'none' })
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography noWrap
                        variant='header3'
                        sx={{ width: '100vw' }}>
                        <Typography variant='header2'>
                            {APPBAR.YOUR_DASHBOARD} &nbsp;
                        </Typography>
                        {selectedBuilding && selectedBuilding.Name ? `/ ${selectedBuilding.Name} ` : ''}
                        {selectedFloor && selectedFloor.Name ? `/ ${selectedFloor.Name} ` : ''}
                        {selectedBuilding && selectedBuilding.Name
                            && selectedFloor && selectedFloor.Name
                            && selectedFromDate && selectedToDate ? `/ ${selectedFromDate} - ${selectedToDate}` : ''}
                    </Typography>
                    {!openRight && (
                        <Grid container
                            justifyContent='flex-end'
                            spacing={2}
                            alignItems='center'
                            sx={{ marginRight: theme.spacing(4) }}
                        >
                            <Grid item>
                                <UserCard
                                    sx={{ cursor: 'pointer' }}
                                    userAttributes={userAttributes}
                                    onClick={() => setOpenUserCard(true)}
                                />
                            </Grid>
                            {/* <Grid item>
                                <IconButton edge='start'>
                                    <UserSettingsIcon height='40px' width='40px' />
                                </IconButton>
                            </Grid> */}
                            <Grid item>
                                <IconButton
                                    edge='start'
                                    onClick={() => setOpenNotifications(true)}>
                                    <StyledBadge
                                        badgeContent={5}
                                        color='secondary'>
                                        <NotificationBellIcon
                                            height={theme.spacing(5)}
                                            width={theme.spacing(5)} />
                                    </StyledBadge>
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton
                                    color='inherit'
                                    onClick={rightOpenClose}
                                    edge='start'
                                >
                                    <FilterAltIcon sx={{ height: theme.spacing(4.375), width: theme.spacing(3.75) }} />
                                </IconButton>
                            </Grid>
                        </Grid>
                    )}
                </Toolbar>
            </Box>
            <Dialog
                open={openUserCard}
                content={<UserCardDialog userAttributes={userAttributes} />}
                handleClose={() => setOpenUserCard(false)}
                top='4%'
                left='81%'
            />
            <Dialog
                open={openNotifications}
                content={<Notifications />}
                handleClose={() => setOpenNotifications(false)}
                top='4%'
                left='80%'
                height={theme.spacing(37.125)}
                width={theme.spacing(34.25)}
            />
        </AppBar>
    );
}

export { AppBarComponent }