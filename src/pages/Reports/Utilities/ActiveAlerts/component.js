import React from "react";
import { Grid, styled } from '@mui/material';
import Card from "../../../../components/Layout/Card/Card";
import IconLabel from "../../../../components/Inputs/IconLabel/IconLabel";

const StyledGrid = styled(Grid)({
    height: '40vh',
    overflowY: 'auto',
    overflowX: "hidden",
    maxHeight: '35vh'
})

const DeviceCard = (props) => {
    const bgcolor = props.state === 1 ? "#00ff034f" : (props.state === 2 ? "#ff000063" : (props.state === 3 ? "#FFA500" : "#808080"));
    const color = props.state === 1 ? "#a3e5c4" : "#ffc7c7";
    const levelColor = props.level === 1 ? "#a3e5c4" : props.level === 2 ? "#fffec8" : "#ffc7c7";

    return (
        <Grid item sm={12} md={12} lg={12} xl={12}>
            <Card
                sx={{ margin: 1, padding: 1, position: "relative", marginRight: 2, marginLeft: 2 }}
                content={
                    <>
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                height: "100%",
                                width: "100%",
                                backgroundImage:
                                    `linear-gradient(to top left,transparent 30%,${bgcolor})`,
                            }}
                        ></div>
                        <Grid container alignItems="center">
                            <Grid item sx={6} sm={6} md={6} lg={6} xl={6}>
                                <Grid container>
                                    <Grid item sm={12} md={12} lg={12} xl={12}>
                                        <IconLabel label={props.building} />
                                    </Grid>
                                    <Grid item sm={12} md={12} lg={12} xl={12}>
                                        <IconLabel label={props.name} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sx={3} sm={3} md={3} lg={3} xl={3}>
                                <Grid container>
                                    <Grid item sm={12} md={12} lg={12} xl={12}>
                                        <IconLabel
                                            style={{ color: levelColor, fontSize: 16 }}
                                            label="Level"
                                        />
                                    </Grid>
                                    <Grid item sm={12} md={12} lg={12} xl={12}>
                                        <IconLabel
                                            style={{ color: levelColor, fontSize: 16 }}
                                            sx={{ marginLeft: 1 }}
                                            label={props.level}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sx={3} sm={3} md={3} lg={3} xl={3}>
                                <IconLabel style={{ color: color, fontSize: 16 }} label={
                                    props.state === 1 ? "RESOLVED" :
                                        (props.state === 2 ? "OPEN" :
                                            (props.state === 3 ? "NON-RESOLVED" : "ESCALATE"))} />

                            </Grid>
                        </Grid>
                    </>
                }
            />
        </Grid>
    );
};

const ActiveAlerts = () => {
    return (
        <>
            <StyledGrid container>
                <DeviceCard building="Bunwell House" name="Air Handling Unit 1" state={3} level={3} />
                <DeviceCard building="Bunwell House" name="Swimming Pool Heating" state={3} level={2} />
                <DeviceCard building="Bunwell House" name="Hot Water System 1" state={2} level={3} />
                <DeviceCard building="Elizabeth House" name="Swimming Pool Filtration" state={4} level={3} />
                <DeviceCard building="Elizabeth House" name="Swimming Pool Filtration" state={1} level={2} />
            </StyledGrid>
        </>
    );
};

export { ActiveAlerts };
