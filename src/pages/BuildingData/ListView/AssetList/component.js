import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Typography, ImageList, ImageListItem } from '@mui/material';
import Card from '../../../../components/Layout/Card/Card';
import { getAllDeviceTypes } from '../../slice';
import LightbulbImage from '../../../../assets/icons/Lightbulb.png';
import { getImageURL } from '../../../../common/utils';
import { StyledImageList } from './style';

const DeviceType = (props) => {
    const { deviceType, handleClick } = props

    return (
        <Grid container
            direction='column'
            alignItems='center'
            onClick={() => handleClick(deviceType)}>
            <Grid item>
                <img
                    key={deviceType.RecId}
                    src={((typeof deviceType.StyleIcon != 'undefined') ? getImageURL(deviceType.StyleIcon) : LightbulbImage)}
                    alt='Device'
                    style={{
                        height: '5em',
                        width: '5em',
                        marginTop: '1em'
                    }}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = LightbulbImage;
                    }}
                />
            </Grid>
            <Grid item>
                <Typography variant='body1' color='#F4F4F4'>
                    {deviceType.Name}
                </Typography>
            </Grid>
        </Grid>
    )
}

const AssetList = (props) => {
    const { handleClick } = props
    const allDeviceTypes = useSelector(getAllDeviceTypes);

    return (
        <StyledImageList cols={2}>
            {allDeviceTypes && allDeviceTypes.map((deviceType) => (
                <ImageListItem key={deviceType.RecId} sx={{ margin: '0.5em', alignItems: 'center' }}>
                    <Card
                        sx={{
                            width: '125px', height: '125px', cursor: 'pointer', '&:hover': {
                                backgroundColor: '#4991BC'
                            }
                        }}
                        content={<DeviceType deviceType={deviceType} handleClick={handleClick} />} />
                </ImageListItem>
            ))}
        </StyledImageList>
    )
}

export { AssetList }