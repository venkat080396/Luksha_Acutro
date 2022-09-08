import React from 'react'
import { Grid } from "@mui/material";
import { styled } from '@mui/system';
import { setDashboardSettings, getDashboardSettings } from "../../slice";
import { useDispatch, useSelector } from "react-redux";
import CheckboxLabelList from '../../../../components/Inputs/Checkbox/CheckboxLabelList/CheckboxLabelList';
import { COMFORT, HVAC_EFFICIENCY, UTILITIES } from '../../../Reports/constants'
import { SETTINGS } from '../../constants'

const SettingsList = () => {
    const dispatch = useDispatch();
    const dashboardSettings = useSelector(getDashboardSettings);

    const StyledGrid = styled(Grid)({
        borderRadius: "1em",
        border: "0.05em solid rgba(255,255,255,0.3)",
        background: "rgba(255,255,255,0.1)",
        color: "white",
        marginTop: "0.5em"
    });

    const reports = [
        { id: 1, name: UTILITIES.ENERGY_REPORTS.HEADER },
        { id: 2, name: COMFORT.VALUE },
        { id: 3, name: HVAC_EFFICIENCY.VALUE }];

    const UpdateDashboardSettings = (value) => {
        dispatch(setDashboardSettings(value))
    }

    return (
        <StyledGrid container
            direction="column"
            spacing={2}
            sx={{ width: "12em", marginLeft: "1px" }}>
            <Grid item>
                <Grid container
                    alignItems="center">
                    <Grid item sx={{ fontSize: 12 }}>
                        {SETTINGS.DESCRIPTION}
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                {<CheckboxLabelList
                    checked={dashboardSettings}
                    setChecked={UpdateDashboardSettings}
                    items={reports} />}
            </Grid>
        </StyledGrid>
    )
}

export { SettingsList };