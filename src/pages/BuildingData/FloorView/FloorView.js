import React from "react";
import { Grid } from '@mui/material'
import _ from "lodash";
import { connect } from 'react-redux'
import LightbulbImage from "../../../assets/icons/Lightbulb.png"
import FloorImage from "../../../assets/icons/Floor.png"
import Dialog from "../../../components/dialog/Dialog";
import CreateDevice from "./Device/CreateDevice";
import { getSelectedFloor, getSelectedBuilding } from '../../../features/Home/homeSlice';
import { fetchAsyncDevicesWithStatus, getAllDevicesWithStatus, saveAsyncDevice, getAllDevicesToBeSaved, updateDeviceToBeSaved } from "../../../features/BuildingData/buildingDataSlice";
import { DEVICE } from '../../../common/Constants';
import { getPosition, mergeArray } from "../../../common/Utils";
import Device from "./Device/Device";
import Save from "../../../components/forms/Button/Save/Save";
import { FLOORVIEW } from '../constants'

class FloorView extends React.Component {

    constructor(props) {
        super(props);
        this.onFloorPlanClick = this.onFloorPlanClick.bind(this);
        this.onDialogClose = this.onDialogClose.bind(this);
        this.getAllDevices = this.getAllDevices.bind(this);
        this.saveDevices = this.saveDevices.bind(this);
        this.onDeviceClick = this.onDeviceClick.bind(this);
        this.devices = [];
        this.state = { openDialog: false, FloorX: 0, FloorY: 0, selectedDevice: null };
    }

    onFloorPlanClick(event) {
        const { clientX, clientY } = event;
        this.offsetX = this.offsetY = DEVICE.WIDTH / 2;
        const { x, y } = getPosition(
            this.container,
            clientX,
            clientY,
            this.offsetX,
            this.offsetY
        );
        this.setState({ openDialog: true, FloorX: x, FloorY: y, selectedDevice: null });
    }

    onDeviceClick = device => {
        this.setState({ openDialog: true, FloorX: device.FloorX, FloorY: device.FloorY, selectedDevice: device });
    }

    onDialogClose() {
        this.setState({ openDialog: false });
    }

    componentDidMount() {
        this.getAllDevices();
    }

    getAllDevices() {
        const requestDetails = {
            siteRecId: 1,
            buildingRecId: this.props.selectedBuilding.RecId,
            floorRecId: this.props.selectedFloor.RecId,
            deviceTypeRecId: null
        }
        this.props.getDevices(requestDetails);
    }

    async saveDevices() {
        await this.props.devicesToBeSaved.length !== 0 && this.props.devicesToBeSaved.map((device) => {
            this.props.saveDevice(device)
        })
        updateDeviceToBeSaved([]);
    }

    render() {
        return [
            <Grid container direction="row">
                <Grid item>
                    <div
                        ref={ref => (this.container = ref)}
                        style={{
                            display: "inline-block",
                            position: "relative",
                            overflow: "hidden",
                            width: "70vw",
                            height: "70vh",
                            marginLeft: "3em",
                            marginTop: "3em"
                        }}
                    >
                        <img
                            ref={ref => (this.img = ref)}
                            src={this.props.floor?.SVGProperties || FloorImage}
                            alt="Floor plan"
                            style={{
                                width: "70vw",
                                height: "70vh"
                            }}
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src = FloorImage;
                            }}
                            onClick={this.onFloorPlanClick}
                        />

                        <img
                            ref={ref => (this.fooDevice = ref)}
                            style={{
                                position: "fixed",
                                top: "0px",
                                left: "0px",
                                height: "1.5em",
                                width: "1.5em",
                                willChange: "transform",
                                transform: "translateX(-9000px)",
                                display: "none"
                            }}
                            src={LightbulbImage}
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src = LightbulbImage;
                            }}
                            alt="Device"
                        />
                        {
                            this.props.alldevices.map(device => (
                                <Device
                                    device={device}
                                    dummyDeviceRef={this.fooDevice}
                                    containerRef={this.container}
                                    devices={this.props.alldevices}
                                    //onDrag={this.getAllDevices}
                                    onClick={(device) => this.onDeviceClick(device)}
                                />
                            ))
                        }
                        <Save onSave={this.saveDevices} top="0.5" left="0.5" />
                    </div>
                </Grid>
                <Grid item>
                    {/* <Devices /> */}
                    <Dialog
                        open={this.state.openDialog}
                        handleClose={this.onDialogClose}
                        title={this.state.selectedDevice ? FLOORVIEW.UPDATE_DEVICE : FLOORVIEW.CREATE_DEVICE}
                        content={<CreateDevice
                            device={this.state.selectedDevice}
                            handleClose={this.onDialogClose}
                            handleCreate={this.getAllDevices}
                            x={this.state.FloorX}
                            y={this.state.FloorY} />}
                    />
                </Grid>
            </Grid>
        ];
    }
}

const mapStateToProps = state => {
    return {
        devices: getAllDevicesWithStatus(state),
        selectedBuilding: getSelectedBuilding(state),
        selectedFloor: getSelectedFloor(state),
        devicesToBeSaved: getAllDevicesToBeSaved(state),
        alldevices: mergeArray(state.buildingData?.devices, state.buildingData?.devicesToBeSaved)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDevices: (requestDetails) => dispatch(fetchAsyncDevicesWithStatus(requestDetails)),
        saveDevice: (device) => dispatch(saveAsyncDevice(device)),
        updateDeviceToBeSaved: (device) => dispatch(updateDeviceToBeSaved(device))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FloorView);
