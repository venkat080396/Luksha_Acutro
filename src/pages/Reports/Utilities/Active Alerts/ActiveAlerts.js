import React from "react";
import { styled } from '@mui/material';
import { Grid } from "@mui/material";
import DeviceCard from "../../../../components/devicecard/DeviceCard";


const StyledGrid = styled(Grid)({
    height: '40vh',
    overflowY: 'auto',
    overflowX: "hidden",
    maxHeight: '35vh'
})

const ActiveAlerts = () => {
    return (
        <>
            <StyledGrid container>
                <DeviceCard building="Grassmere House" name="Air Handling Unit 1" state={3} level={3} />
                <DeviceCard building="Grassmere House" name="Swimming Pool Heating" state={3} level={2} />
                <DeviceCard building="Grassmere House" name="Hot Water System 1" state={2} level={3} />
                <DeviceCard building="Haveswater House" name="Swimming Pool Filtration" state={4} level={3} />
                <DeviceCard building="Haveswater House" name="Swimming Pool Filtration" state={1} level={2} />
            </StyledGrid>
        </>
    );
};

export default ActiveAlerts;
