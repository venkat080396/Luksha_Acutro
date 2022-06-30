import React from "react";
import { styled } from '@mui/material';
import { Grid } from "@mui/material";
import DeviceCard from "../../../../components/devicecard/DeviceCard";


const StyledGrid = styled(Grid)({
    height: '40vh',
    overflowY: 'auto',
    overflowX: "hidden",
    scrollBehavior: "smooth",
    '&::-webkit-scrollbar': {
        width: '0.05em',
        backgroundColor: 'rgba(0,0,0,.5)',
    },
    '&::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
        webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'white',
        outline: '1px solid white',
    }
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
