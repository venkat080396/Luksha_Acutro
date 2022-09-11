import React, { useState } from 'react'
import { getImageURL, getPosition, mergeArray } from '../../../../common/utils';
import LightbulbImage from '../../../../assets/icons/Lightbulb.png'
import { useDispatch, useSelector } from 'react-redux';
import { Tooltip } from '../../../../components/DataDisplay/Tooltip';
import { TooltipContent } from './TooltipContent';
import { updateDeviceToBeSaved, getAllDevicesToBeSaved } from '../../slice';

const Device = (props) => {
    const { device, dummyDeviceRef, containerRef, devices, onDrag, onClick } = props;
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const devicesToBeSaved = useSelector(getAllDevicesToBeSaved);
    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setOffsetY] = useState(0);
    const [clientX, setClientX] = useState(0);
    const [clientY, setClientY] = useState(0);

    const handleDragStart = (event) => {
        const { clientX, clientY, target } = event;
        const { top, left } = target.getBoundingClientRect();
        setOffsetX(clientX - left);
        setOffsetY(clientY - top);
        target.style.opacity = '0';
        dummyDeviceRef.src = target.src;
        dummyDeviceRef.style.display = 'block';
    }

    const handleDrag = (event) => {
        const { clientX, clientY } = event;
        if (clientX <= 0 || clientY <= 0) return;

        dummyDeviceRef.style.transform = `translateX(${clientX -
            offsetX}px) translateY(${clientY - offsetY}px)`;
        setClientX(clientX);
        setClientY(clientY);
    }

    const handleDragEnd = (event) => {
        const { x, y } = getPosition(
            containerRef,
            clientX,
            clientY,
            offsetX,
            offsetY
        );

        const deviceId = event.target.dataset.id;
        event.target.style.opacity = '1';
        // ToDo - if device is outside the box, remove it.
        const index = devices.findIndex(device => device.RecId == deviceId);
        if (index < 0) return;
        const device = { ...devices[index], FloorX: x, FloorY: y }
        dispatch(updateDeviceToBeSaved(mergeArray(devicesToBeSaved, [device])))
        dummyDeviceRef.style.transform = 'translateX(-9000px)';
        dummyDeviceRef.style.display = 'none';
        //onDrag()
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <Tooltip
            key={device.RecId}
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            title={<TooltipContent recId={device.RecId} name={device.Name} />}>
            <img
                data-id={device.RecId}
                key={device.RecId}
                onDragStart={handleDragStart}
                onDrag={handleDrag}
                onDragEnd={handleDragEnd}
                style={{
                    position: 'absolute',
                    height: '1.5em',
                    width: '1.5em',
                    left: `${device.FloorX}%`,
                    top: `${device.FloorY}%`
                }}
                src={((typeof device.StyleIcon != 'undefined') ? getImageURL(device.StyleIcon) : LightbulbImage)}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = LightbulbImage;
                }}
                alt='Device'
                onClick={() => onClick(device)}
            />
        </Tooltip>
    )
}

export { Device };