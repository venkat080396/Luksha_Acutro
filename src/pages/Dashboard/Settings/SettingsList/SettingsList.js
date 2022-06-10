import React from 'react'
import { Grid } from "@mui/material";
import { styled } from '@mui/system';
import { setDashboardSettings, getDashboardSettings } from "../../../../features/Dashboard/dashboardSlice";
import { useDispatch, useSelector } from "react-redux";
import CheckboxLabelList from '../../../../components/forms/Checkbox/CheckboxLabelList/CheckboxLabelList';

const SettingsList = () => {
    const dispatch = useDispatch();
    const dashboardSettings = useSelector(getDashboardSettings);

    const StyledGrid = styled(Grid)({
        borderRadius: "1em",
        border: "0.05em solid rgba(255,255,255,0.3)",
        background: "rgba(255,255,255,0.1)",
        color: "white",
        fontWeight: "bold"
    });

    const reports = [{ id: 1, name: "Energy Reports" }, { id: 2, name: "Comfort" }, { id: 3, name: "HVAC Efficiency" }];

    const UpdateDashboardSettings = (value) => {
        dispatch(setDashboardSettings(value))
    }

    return (
        <StyledGrid container
            direction="column"
            alignItems="center"
            spacing={3} sx={{ paddingTop: "1em" }}>
            <Grid item>
                <Grid container
                    direction="column"
                    alignItems="center">
                    <Grid item xs={8} sx={{ fontSize: 12 }}>
                        Choose which tiles you see
                    </Grid>
                    <Grid item xs={6} sx={{ fontSize: 12 }}>
                        on your dashboard.
                    </Grid>
                </Grid>
            </Grid>
            <Grid item sx={{ marginLeft: "2em" }}>
                {<CheckboxLabelList
                    checked={dashboardSettings}
                    setChecked={UpdateDashboardSettings}
                    items={reports} />}
            </Grid>
        </StyledGrid>
    )
}

export default SettingsList;