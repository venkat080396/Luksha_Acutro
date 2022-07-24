import React from 'react'
import { styled } from '@mui/system';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Card from '../../../../components/layout/Card/Card';
import { useSelector } from "react-redux";
import { getAllDeviceTypes } from "../../../../features/BuildingData/buildingDataSlice";
import DeviceType from './DeviceType';

const StyledImageList = styled(ImageList)({
    '&::-webkit-scrollbar': {
        width: '3px',
        backgroundColor: '#C4C4C4',
        borderRadius: "20px"
    },
    '&::-webkit-scrollbar-track': {
        width: '3px',
        background: "rgba(196, 196, 196, 0.1)",
        borderRadius: "20px"
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'white',
        outline: '1px solid white',
    },
    height: "62vh",
    marginTop: "0.2em"
})

const AssetList = (props) => {
    const { handleClick } = props
    const allDeviceTypes = useSelector(getAllDeviceTypes);

    return (
        <StyledImageList cols={2}>
            {allDeviceTypes && allDeviceTypes.map((deviceType) => (
                <ImageListItem key={deviceType.RecId} sx={{ margin: "0.5em", alignItems: "center" }}>
                    <Card
                        sx={{
                            width: "125px", height: "125px", cursor: "pointer", "&:hover": {
                                backgroundColor: "#4991BC"
                            }
                        }}
                        content={<DeviceType deviceType={deviceType} handleClick={handleClick} />} />
                </ImageListItem>
            ))}
        </StyledImageList>
    )
}

export default AssetList