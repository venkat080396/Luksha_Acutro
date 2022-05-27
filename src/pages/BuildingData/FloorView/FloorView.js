import React from "react";
import { Grid } from '@mui/material'
import _ from "lodash";
import LightbulbImage from "../../../assets/icons/Lightbulb.png"
import { ReactComponent as LightbulbIcon } from "../../../assets/icons/Lightbulb.svg"

const deviceWidth = 40;

class FloorView extends React.Component {
    constructor(props) {
        super(props);
        this.addDevice = this.addDevice.bind(this);
        this.getDevices = this.getDevices.bind(this);
        this.handleDragStart = this.handleDragStart.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
        this.handleDragEnd = this.handleDragEnd.bind(this);
        this.devices = [];
    }

    getDevices() {
        const devices = this.devices.map(device => {
            return (
                <img
                    data-id={device.id}
                    key={device.id}
                    onDragStart={this.handleDragStart}
                    onDrag={this.handleDrag}
                    onDragEnd={this.handleDragEnd}
                    width={deviceWidth}
                    style={{
                        position: "absolute",
                        left: `${device.x}%`,
                        top: `${device.y}%`
                    }}
                    src={LightbulbImage}
                    alt="Device"
                />
            );
        });
        return devices;
    }

    getPosition(container, clientX, clientY) {
        const { top, left, width, height } = container.getBoundingClientRect();
        const x = (clientX - left - this.offsetX) * 100 / width;
        const y = (clientY - top - this.offsetY) * 100 / height;
        return { x, y };
    }

    addDevice(event) {
        this.offsetX = this.offsetY = deviceWidth / 2;
        const { x, y } = this.getPosition(this.container, 200, 200);
        this.devices.push({ x: x, y: y, id: this.devices.length + 1 });
        this.forceUpdate();
    }

    handleDragStart(event) {
        const { clientX, clientY, target } = event;
        const { top, left } = target.getBoundingClientRect();
        this.offsetX = clientX - left;
        this.offsetY = clientY - top;
        target.style.opacity = "0";
        this.fooDevice.style.display = "block";
    }

    handleDrag(event) {
        const { clientX, clientY } = event;
        if (clientX <= 0 || clientY <= 0) return;

        this.fooDevice.style.transform = `translateX(${clientX -
            this.offsetX}px) translateY(${clientY - this.offsetY}px)`;
        this.clientX = clientX;
        this.clientY = clientY;
    }

    handleDragEnd(event) {
        const { x, y } = this.getPosition(
            this.container,
            this.clientX,
            this.clientY
        );
        const deviceId = event.target.dataset.id;
        event.target.style.opacity = "1";

        // ToDo - if device is outside the box, remove it.
        const index = this.devices.findIndex(device => device.id == deviceId);
        if (index < 0) return;
        this.devices[index].x = x;
        this.devices[index].y = y;
        this.forceUpdate();
        this.fooDevice.style.transform = "translateX(-9000px)";
        this.fooDevice.style.display = "none";
    }

    render() {

        return [

            <Grid container spacing={3}>
                <Grid item>
                    <div
                        ref={ref => (this.container = ref)}
                        style={{
                            display: "inline-block",
                            position: "relative",
                            overflow: "hidden",
                            width: "75vw",
                            height: "70vh",
                            marginLeft: "3em",
                            marginTop: "3em"
                        }}
                    >
                        <img
                            ref={ref => (this.img = ref)}
                            src={this.props.floor?.SVGProperties}
                            alt="Floor plan"
                            style={{
                                width: "75vw",
                                height: "70vh"
                            }}
                        />

                        <img
                            ref={ref => (this.fooDevice = ref)}
                            width={deviceWidth}
                            style={{
                                position: "fixed",
                                top: "0px",
                                left: "0px",
                                willChange: "transform",
                                transform: "translateX(-9000px)",
                                display: "none"
                            }}
                            src={LightbulbImage}
                            alt="Device"
                        />
                        {this.getDevices()}
                    </div>
                </Grid>
                <Grid item>
                    <Grid container
                        onClick={this.addDevice}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ marginTop: "5em" }}>
                        <Grid item>
                            <LightbulbIcon height="2.5em" width="2.5em" sx={{ paddingTop: "1em" }} />
                        </Grid>
                        <Grid item>
                            Light Fixture
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        ];
    }
}

export default FloorView;
