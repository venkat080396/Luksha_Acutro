
import { AppBar as MuiAppBar, Badge, styled } from "@mui/material";
import bgImage from "../../../assets/images/Background.png";

const drawerWidth = 300;

export const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
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

export const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
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