import React from 'react'
import MuiListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import MicNoneIcon from "@mui/icons-material/MicNone";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import SettingsIcon from "@mui/icons-material/Settings";
import ContrastIcon from "@mui/icons-material/Contrast";
import { ReactComponent as UtilitiesIcon } from "../../../../assets/icons/Utilities Consumption.svg"
import { ReactComponent as ComfortIcon } from "../../../../assets/icons/Comfort.svg"
import { ReactComponent as ExportsIcon } from "../../../../assets/icons/Exports.svg"
import { ReactComponent as HVACEfficiencyIcon } from "../../../../assets/icons/HVAC Efficiency.svg"

const ListItemIcon = ({ open, text }) => {

    const getIcon = () => {
        switch (text) {
            case "Home":
                return <HomeIcon sx={{ color: "white" }} />
            case "Alerts":
                return <MicNoneIcon sx={{ color: "white" }} />
            case "Building Data":
                return <AccountBalanceIcon sx={{ color: "white" }} />
            case "Reports":
                return <ContrastIcon sx={{ color: "white" }} />
            case "Utilities/Consumption":
                return <UtilitiesIcon height="40px" width="30px" />
            case "HVAC Efficiency":
                return <HVACEfficiencyIcon height="40px" width="30px" />
            case "Comfort":
                return <ComfortIcon height="40px" width="30px" />
            case "Exports":
                return <ExportsIcon height="40px" width="30px" />
            case "Buildings":
                return <CorporateFareIcon sx={{ color: "white" }} />
            case "Setting":
                return <SettingsIcon sx={{ color: "white" }} />
            default:
                return <></>
        };
    }
    return (
        <MuiListItemIcon
            sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
            }}
        >
            {getIcon()}
        </MuiListItemIcon>
    )
}

export default ListItemIcon