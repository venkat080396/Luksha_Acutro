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
                <DeviceCard name="Air Handling Unit 1" state={0} level={3} />
                <DeviceCard name="Swimming Pool Heating" state={1} level={2} />
                <DeviceCard name="Hot Water System 1" state={0} level={3} />
                <DeviceCard name="Swimming Pool Filtration" state={0} level={3} />
            </StyledGrid>
        </>
    );
};

export default ActiveAlerts;
