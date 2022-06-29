import React from "react";
import { Grid, Box } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";

import Label from "../../../components/forms/Label/Label";
import Select from "../../../components/forms/Select/Select";
import Button from "../../../components/forms/Button/Button";

import {
    fetchAsyncDevices,
    fetchAsyncSites,
    fetchAsyncBuildings,
    fetchAsyncFloors,
    fetchAsyncDistributionList,
    getDistributionList,
    getAllDevices,
    getAllSites,
    getAllBuildings,
    getAllFloors,
    getSelectedSites,
    getSelectedBuilding,
    getSelectedFloor,
    getSelectedDevice,
    setSelectedSite,
    setSelectedBuilding,
    setSelectedFloor,
    setSelectedDevice
} from "../../../features/Alerts/AlertsSlice";


const EscalationSettings = () => {
    const dispatch = useDispatch();

    const [LevelFirst, setLevelFirst] = React.useState("");
    const [LevelSecound, setLevelSecound] = React.useState("");
    const [LevelThird, setLevelThird] = React.useState("");

    const buildings = useSelector(getAllBuildings);
    const floors = useSelector(getAllFloors);
    const site = useSelector(getAllSites);
    const device = useSelector(getAllDevices);
    const selectedSite = useSelector(getSelectedSites);
    const selectedBuilding = useSelector(getSelectedBuilding);
    const selectedFloor = useSelector(getSelectedFloor);
    const selectedDevice = useSelector(getSelectedDevice);
    const distributionList = useSelector(getDistributionList);

    console.log(distributionList);
    console.log(selectedSite);

    React.useEffect(() => {
        dispatch(fetchAsyncSites());
        dispatch(fetchAsyncDistributionList("BL"));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const hendleChangeValue = (item, setFunction) => setFunction(item.RecId);

    const hendleChangeSite = (item) => {
        dispatch(setSelectedSite(item));
        dispatch(setSelectedBuilding({}));
        dispatch(setSelectedFloor({}));
        dispatch(setSelectedDevice({}));
        dispatch(fetchAsyncBuildings(`${item.RecId}`));
    };

    const hendleChangeBuilding = (item) => {
        dispatch(setSelectedBuilding(item));
        dispatch(setSelectedFloor({}));
        dispatch(setSelectedDevice({}));
        dispatch(fetchAsyncFloors(item));
    };

    const hendleChangeFloor = (item) => {
        dispatch(setSelectedFloor(item));
        dispatch(setSelectedDevice({}));
        dispatch(fetchAsyncDevices({ ...item, SiteRecId: selectedSite.RecId }));
    };

    const hendleChangeDevice = (item) => {
        dispatch(setSelectedDevice(item));
    };

    const handleSave = () => { };

    return (
        <Box padding={4}>
            <Grid container spacing={4} alignItems="flex-start">
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Grid container alignItems="center" spacing={2}>
                        <Grid item xs={6} sm={6} md={2} lg={2} xl={2}>
                            <Label label="Site" />
                        </Grid>
                        <Grid item xs={6} sm={6} md={10} lg={10} xl={10}>
                            <Select
                                placeholder="Select Devices"
                                value={selectedSite}
                                onSelectChange={(item) => hendleChangeSite(item)}
                                props={{ size: "small", placeholder: "Select Devices" }}
                                items={site}
                                fullWidth={true}
                            />
                        </Grid>
                        <Grid item xs={6} sm={6} md={2} lg={2} xl={2}>
                            <Label label="Building" />
                        </Grid>
                        <Grid item xs={6} sm={6} md={10} lg={10} xl={10}>
                            <Select
                                placeholder="Select Building"
                                value={selectedBuilding}
                                onSelectChange={(item) => hendleChangeBuilding(item)}
                                props={{ size: "small", placeholder: "Select Building" }}
                                items={buildings}
                                fullWidth={true}
                            />
                        </Grid>
                        <Grid item xs={6} sm={6} md={2} lg={2} xl={2}>
                            <Label label="Floor" />
                        </Grid>
                        <Grid item xs={6} sm={6} md={10} lg={10} xl={10}>
                            <Select
                                placeholder="Select Floor"
                                value={selectedFloor}
                                onSelectChange={(item) => hendleChangeFloor(item)}
                                props={{ size: "small", placeholder: "Select Floor" }}
                                items={floors}
                                fullWidth={true}
                            />
                        </Grid>
                        <Grid item xs={6} sm={6} md={2} lg={2} xl={2}>
                            <Label label="Devices" />
                        </Grid>
                        <Grid item xs={6} sm={6} md={10} lg={10} xl={10}>
                            <Select
                                placeholder="Select Devices"
                                value={selectedDevice}
                                onSelectChange={(item) => hendleChangeDevice(item)}
                                props={{ size: "small", placeholder: "Select Devices" }}
                                items={device}
                                fullWidth={true}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Grid container alignItems="center" spacing={2}>
                        <Grid item xs={6} sm={6} md={2} lg={2} xl={2}>
                            <Label label="Level 1" />
                        </Grid>
                        <Grid item xs={6} sm={6} md={10} lg={10} xl={10}>
                            <Select
                                placeholder="Select List"
                                value={LevelFirst}
                                defaultValue={""}
                                onSelectChange={(item) =>
                                    hendleChangeValue(item, setLevelFirst)
                                }
                                props={{ size: "small", placeholder: "Select List" }}
                                items={distributionList}
                                fullWidth={true}
                            />
                        </Grid>
                        <Grid item xs={6} sm={6} md={2} lg={2} xl={2}>
                            <Label label="Level 2" />
                        </Grid>
                        <Grid item xs={6} sm={6} md={10} lg={10} xl={10}>
                            <Select
                                placeholder="Select List"
                                value={LevelSecound}
                                defaultValue={""}
                                onSelectChange={(item) =>
                                    hendleChangeValue(item, setLevelSecound)
                                }
                                props={{ size: "small", placeholder: "Select List" }}
                                items={distributionList}
                                fullWidth={true}
                            />
                        </Grid>
                        <Grid item xs={6} sm={6} md={2} lg={2} xl={2}>
                            <Label label="Level 3" />
                        </Grid>
                        <Grid item xs={6} sm={6} md={10} lg={10} xl={10}>
                            <Select
                                placeholder="Select List"
                                value={LevelThird}
                                defaultValue={""}
                                onSelectChange={(item) =>
                                    hendleChangeValue(item, setLevelThird)
                                }
                                props={{ size: "small", placeholder: "Select List" }}
                                items={distributionList}
                                fullWidth={true}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Grid container alignItems="center" flexDirection="row-reverse">
                                <Grid item>
                                    <Button onClick={handleSave} value="Save" />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default EscalationSettings;
