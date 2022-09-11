import React from 'react'
import MuiListItemIcon from '@mui/material/ListItemIcon';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import SettingsIcon from '@mui/icons-material/Settings';
import { ReactComponent as HomeIcon } from '../../../../assets/icons/Home.svg'
import { ReactComponent as ReportsIcon } from '../../../../assets/icons/Reports.svg'
import { ReactComponent as BuildingDataIcon } from '../../../../assets/icons/BuildingData.svg'
import { ReactComponent as AlertsIcon } from '../../../../assets/icons/Alerts.svg'
import { ReactComponent as UtilitiesIcon } from '../../../../assets/icons/UtilitiesConsumption.svg'
import { ReactComponent as ComfortIcon } from '../../../../assets/icons/Comfort.svg'
import { ReactComponent as ExportsIcon } from '../../../../assets/icons/Exports.svg'
import { ReactComponent as HVACEfficiencyIcon } from '../../../../assets/icons/HVACEfficiency.svg'

const ListItemIcon = ({ open, text }) => {

    const getIcon = () => {
        switch (text) {
            case 'Home':
                return <HomeIcon height='2.5em' width='2em' />
            case 'Alerts':
                return <AlertsIcon height='2.5em' width='2em' />
            case 'Building Data':
                return <BuildingDataIcon height='2.5em' width='2em' />
            case 'Reports':
                return <ReportsIcon height='2.5em' width='2em' />
            case 'Utilities/Consumption':
                return <UtilitiesIcon height='2.5em' width='2em' />
            case 'HVAC Efficiency':
                return <HVACEfficiencyIcon height='2.5em' width='2em' />
            case 'Comfort':
                return <ComfortIcon height='2.5em' width='2em' />
            case 'Exports':
                return <ExportsIcon height='2.5em' width='2em' />
            case 'Buildings':
                return <CorporateFareIcon sx={{ color: 'white' }} />
            case 'Setting':
                return <SettingsIcon sx={{ color: 'white' }} />
            default:
                return <></>
        };
    }
    return (
        <MuiListItemIcon
            sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
            }}
        >
            {getIcon()}
        </MuiListItemIcon>
    )
}

export default ListItemIcon