import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Card from '../../../../components/layout/Card/Card';
import { useSelector } from "react-redux";
import { getAllDeviceTypes } from "../../../../features/BuildingData/buildingDataSlice";
import DeviceType from './DeviceType';

const AssetList = (props) => {
    const { handleClick } = props
    const allDeviceTypes = useSelector(getAllDeviceTypes);

    return (
        <ImageList cols={2} sx={{ height: "70vh", marginTop: "0.2em" }}>
            {allDeviceTypes && allDeviceTypes.map((deviceType) => (
                <ImageListItem key={deviceType.RecId} sx={{ margin: "0.2em", alignItems: "center" }}>
                    <Card
                        sx={{
                            width: "5em", height: "5em", cursor: "pointer", "&:hover": {
                                backgroundColor: "#4991BC"
                            }
                        }}
                        content={<DeviceType deviceType={deviceType} handleClick={handleClick} />} />
                </ImageListItem>
            ))}
        </ImageList>
    )
}

export default AssetList