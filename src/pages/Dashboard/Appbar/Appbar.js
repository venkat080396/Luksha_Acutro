import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Grid, Badge } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useSelector, useDispatch } from "react-redux";
import { getSelectedBuilding, getSelectedFloor, getFromDate, getToDate } from '../../../features/Home/homeSlice';
import { getUserAttributes, setUserAttributes } from "../../../features/Login/loginSlice"
import Pool from "../../../UserPool"
import UserCard from "./UserCard/UserCard";
import UserCardDialog from "./UserCardDialog/UserCardDialog";
import Dialog from "../../../components/dialog/Dialog";
import bgImage from "../../../assets/images/Background.png";
import { APPBAR } from '../constants'
import { Notifications } from "../Notifications/Notifications";
import { ReactComponent as NotificationBellIcon } from "../../../assets/icons/Notification Bell1.svg"
import { ReactComponent as UserSettingsIcon } from "../../../assets/icons/User Settings.svg"

const drawerWidth = 300;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        }),
    }),
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        top: theme.spacing(1.75),
        left: theme.spacing(1.5),
        width: theme.spacing(1.75),
        height: theme.spacing(1.75),
        fontWeight: 400,
        fontSize: theme.spacing(1.25),
        lineHeight: theme.spacing(1.75),
        color: theme.palette.text.primary,
        padding: theme.spacing(0)
    },
}));

export default function AppBarComponent({
    open,
    openRight,
    leftOpen,
    rightOpenClose,
    floorName,
    buildingName,
}) {
    const dispatch = useDispatch();
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
            position="fixed"
            open={open}
            component={Box}
            elevation={0}
            sx={{

            }}
        >
            <Box>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={leftOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: "none" })
                        }}
                    >
                        <MenuIcon sx={{ color: "white" }} />
                    </IconButton>
                    <Typography variant="header3" noWrap component="div" sx={{ width: "150em" }}>
                        <Typography variant="header2" display={"inline"}>
                            {APPBAR.YOUR_DASHBOARD} &nbsp;
                        </Typography>
                        {selectedBuilding && selectedBuilding.Name ? `/ ${selectedBuilding.Name} ` : ""}
                        {selectedFloor && selectedFloor.Name ? `/ ${selectedFloor.Name} /` : ""}
                        {selectedBuilding && selectedBuilding.Name
                            && selectedFloor && selectedFloor.Name
                            && selectedFromDate && selectedToDate ? `${selectedFromDate} - ${selectedToDate}` : ""}
                    </Typography>
                    {!openRight && (
                        <Grid container
                            justifyContent="flex-end"
                            spacing={2}
                            alignItems="center"
                            sx={{ marginRight: "2em" }}
                        >
                            <Grid item>
                                <UserCard
                                    sx={{ cursor: "pointer" }}
                                    userAttributes={userAttributes}
                                    onClick={() => setOpenUserCard(true)}
                                />
                            </Grid>
                            {/* <Grid item>
                                <IconButton edge="start">
                                    <UserSettingsIcon height="40px" width="40px" />
                                </IconButton>
                            </Grid> */}
                            <Grid item>
                                <IconButton edge="start" onClick={() => setOpenNotifications(true)}>
                                    <StyledBadge badgeContent={5}
                                        color="secondary">
                                        <NotificationBellIcon height="40px" width="40px" />
                                    </StyledBadge>
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={rightOpenClose}
                                    edge="start"
                                >
                                    <FilterAltIcon sx={{ color: "#F4F4F4", height: "35px", width: "30px" }} />
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
                top="4%"
                left="81%"
            />
            <Dialog
                open={openNotifications}
                content={<Notifications />}
                handleClose={() => setOpenNotifications(false)}
                top="4%"
                left="80%"
                height="297px"
                width="274px"
            />
        </AppBar>
    );
}
