import React from 'react'
import { Grid } from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Card from '../../../../components/layout/Card/Card';
import { useSelector } from "react-redux";
import { getAllDeviceTypes } from "../../../../features/BuildingData/buildingDataSlice";
import LightbulbImage from "../../../../assets/icons/Lightbulb.png"
import { getImageURL } from "../../../../common/Utils";
import Label from '../../../../components/forms/Label/Label';

const getContent = (deviceType, handleClick) => {

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
                        height: "3.5em",
                        width: "3.5em",
                        marginTop: "1em"
                    }}
                />
            </Grid>
            <Grid item>
                <Label sx={{ fontSize: "0.7em" }} label={deviceType.Name} />
            </Grid>
        </Grid>
    )
}

const AssetList = (props) => {
    const { handleClick } = props

    const allDeviceTypes = useSelector(getAllDeviceTypes);
    return (
        <ImageList cols={2} sx={{ marginLeft: "0.7em", height: "65vh" }}>
            {allDeviceTypes.map((deviceType) => (
                <ImageListItem key={deviceType.RecId} sx={{ margin: "0.5em" }}>
                    <Card
                        sx={{ width: "6em", height: "6em" }}
                        content={getContent(deviceType, handleClick)} />
                </ImageListItem>
            ))}
        </ImageList>
    )
}

export default AssetList