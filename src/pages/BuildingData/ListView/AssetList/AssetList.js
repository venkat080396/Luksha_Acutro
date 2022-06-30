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
        <ImageList cols={2} sx={{ height: "70vh", marginTop: "-1em" }}>
            {allDeviceTypes.map((deviceType) => (
                <ImageListItem key={deviceType.RecId} sx={{ alignItems: "center", justifyContent: "center" }}>
                    <Card
                        sx={{
                            width: "5.3em", height: "5.3em", cursor: "pointer", "&:hover": {
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