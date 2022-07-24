import React from 'react'
import { Grid, Typography } from "@mui/material";
import LightbulbImage from "../../../../assets/icons/Lightbulb.png"
import { getImageURL } from "../../../../common/Utils";

const DeviceType = (props) => {
    const { deviceType, handleClick } = props

    return (
        <Grid container
            direction="column"
            alignItems="center"
            onClick={() => handleClick(deviceType)}>
            <Grid item>
                <img
                    key={deviceType.RecId}
                    src={((typeof deviceType.StyleIcon != "undefined") ? getImageURL(deviceType.StyleIcon) : LightbulbImage)}
                    alt="Device"
                    style={{
                        height: "5em",
                        width: "5em",
                        marginTop: "1em"
                    }}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = LightbulbImage;
                    }}
                />
            </Grid>
            <Grid item>
                <Typography variant="body1" color="#F4F4F4">
                    {deviceType.Name}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default DeviceType