import React from "react";

import { Grid } from "@mui/material";
import Card from "../layout/Card/Card";
import IconLabel from "../forms/IconLabel/IconLabel";

const DeviceCard = (props) => {
    const bgcolor = props.state === 1 ? "#00ff034f" : "#ff000063";
    const color = props.state === 1 ? "green" : "red";
    const levelColor = props.level === 1 ? "green" : props.level === 2 ? "yellow" : "red";

    return (
        <Grid item sm={12} md={12} lg={12} xl={12}>
            <Card
                sx={{ margin: 1, padding: 1, position: "relative",marginRight:2,marginLeft:2 }}
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
                                        <IconLabel label="Site 1234" />
                                    </Grid>
                                    <Grid item sm={12} md={12} lg={12} xl={12}>
                                        <IconLabel label="Device 1234" />
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
                                <IconLabel style={{ color: color, fontSize: 16 }} label={props.state !== 1 ? "OPEN" : "RESOLVED"} />
                            </Grid>
                        </Grid>
                    </>
                }
            />
        </Grid>
    );
};

export default DeviceCard;
