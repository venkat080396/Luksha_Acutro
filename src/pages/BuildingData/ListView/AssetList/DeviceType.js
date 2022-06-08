import React from 'react'
import { Grid } from "@mui/material";
import LightbulbImage from "../../../../assets/icons/Lightbulb.png"
import { getImageURL } from "../../../../common/Utils";
import Label from '../../../../components/forms/Label/Label';

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
                        height: "3em",
                        width: "3em",
                        marginTop: "1em"
                    }}
                />
            </Grid>
            <Grid item>
                <Label sx={{ fontSize: "0.6em" }} label={deviceType.Name} />
            </Grid>
        </Grid>
    )
}

export default DeviceType