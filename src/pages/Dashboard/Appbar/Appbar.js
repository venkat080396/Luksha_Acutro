import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Grid, Badge } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useSelector, useDispatch } from "react-redux";
import { getSelectedBuilding, getSelectedFloor } from '../../../features/Home/homeSlice';
import { getUserAttributes, setUserAttributes } from "../../../features/Login/loginSlice"
import Pool from "../../../UserPool"
import UserCard from "./UserCard/UserCard";
import UserCardDialog from "./UserCardDialog/UserCardDialog";
import Dialog from "../../../components/dialog/Dialog";
import bgImage from "../../../assets/images/Background.png";

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
    const selectedBuilding = useSelector(getSelectedBuilding);
    const selectedFloor = useSelector(getSelectedFloor);
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
                    <Typography variant="body1" noWrap component="div" sx={{ width: "150em" }}>
                        <Typography variant="h6" fontWeight={"700"} display={"inline"}>
                            Your Dashboard &nbsp;
                        </Typography>
                        {selectedBuilding && selectedBuilding.Name ? `/ ${selectedBuilding.Name} ` : ""}
                        {selectedFloor && selectedFloor.Name ? `/ ${selectedFloor.Name} /` : ""}
                        {selectedBuilding && selectedBuilding.Name && selectedFloor && selectedFloor.Name ? "19/07/21 - 21/07/21" : ""}
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
                            <Grid item>
                                <IconButton edge="start">
                                    <PersonIcon sx={{ color: "white" }} />
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton edge="start">
                                    <Badge badgeContent={4} color="primary">
                                        <NotificationsNoneIcon sx={{ color: "white" }} />
                                    </Badge>
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={rightOpenClose}
                                    edge="start"
                                >
                                    <FilterAltIcon />
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
                top={30}
                left={1130}
            />
        </AppBar>
    );
}
