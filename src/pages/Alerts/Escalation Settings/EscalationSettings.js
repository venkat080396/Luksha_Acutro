import React from "react";
import { Grid, Box } from "@mui/material";

import Label from "../../../components/forms/Label/Label";
import Select from "../../../components/forms/Select/Select";
import Button from "../../../components/forms/Button/Button";

// const users = [
//     { RecId: 1, username: "Adeala", role: "Sys Admin" },
//     { RecId: 2, username: "Jacob", role: "User" },
//     { RecId: 3, username: "Shakthi", role: "Sys Admin" },
//     { RecId: 4, username: "stuart.booth@emcoruk.com", role: "User" },
//     { RecId: 4, username: "thomas.clarke@emcoruk.com", role: "User" },
// ];

const EscalationSettings = () => {
    const [device, setDevice] = React.useState("");
    const [Site, setSite] = React.useState("");
    const [Building, setBuilding] = React.useState("");
    const [Floor, setFloor] = React.useState("");
    const [LevelFirst, setLevelFirst] = React.useState("");
    const [LevelSecound, setLevelSecound] = React.useState("");
    const [LevelThird, setLevelThird] = React.useState("");

    React.useEffect(() => {
        //fetch initial value
    }, [])

    const hendleSelectDevice = (item) => {
        setDevice(item.RecId);
        //code to fetch by default value
    }

    const hendleChangeValue = (item, setFunction) => setFunction(item.RecId);

    const handleSave = () => {
    }

    return (
        <Box padding={4} sx={{ paddingLeft: "4rem", paddingRight: "4rem" }}>
            <Grid container spacing={4} alignItems='flex-start'>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Grid container alignItems="center" spacing={2}>
                        <Grid item xs={6} sm={6} md={2} lg={2} xl={2}>
                            <Label label="Site" />
                        </Grid>
                        <Grid item xs={6} sm={6} md={10} lg={10} xl={10}>
                            <Select
                                placeholder="Select Devices"
                                value={Site}
                                defaultValue={""}
                                onSelectChange={(item) => hendleChangeValue(item, setSite)}
                                props={{ size: "small", placeholder: "Select Devices" }}
                                items={[
                                    { RecId: 1, Name: "All Site" },
                                    { RecId: 2, Name: "Site 1" },
                                ]}
                                fullWidth={true}
                            />
                        </Grid>
                        <Grid item xs={6} sm={6} md={2} lg={2} xl={2}>
                            <Label label="Building" />
                        </Grid>
                        <Grid item xs={6} sm={6} md={10} lg={10} xl={10}>
                            <Select
                                placeholder="Select Building"
                                value={Building}
                                defaultValue={""}
                                onSelectChange={(item) => hendleChangeValue(item, setBuilding)}
                                props={{ size: "small", placeholder: "Select Building" }}
                                items={[
                                    { RecId: 1, Name: "All Building" },
                                    { RecId: 2, Name: "Building 1" },
                                ]}
                                fullWidth={true}
                            />
                        </Grid>
                        <Grid item xs={6} sm={6} md={2} lg={2} xl={2}>
                            <Label label="Floor" />
                        </Grid>
                        <Grid item xs={6} sm={6} md={10} lg={10} xl={10}>
                            <Select
                                placeholder="Select Floor"
                                value={Floor}
                                defaultValue={""}
                                onSelectChange={(item) => hendleChangeValue(item, setFloor)}
                                props={{ size: "small", placeholder: "Select Floor" }}
                                items={[
                                    { RecId: 1, Name: "All Site" },
                                    { RecId: 2, Name: "Floor 1" },
                                ]}
                                fullWidth={true}
                            />
                        </Grid>
                        <Grid item xs={6} sm={6} md={2} lg={2} xl={2}>
                            <Label label="Devices" />
                        </Grid>
                        <Grid item xs={6} sm={6} md={10} lg={10} xl={10}>
                            <Select
                                placeholder="Select Devices"
                                value={device}
                                defaultValue={""}
                                onSelectChange={hendleSelectDevice}
                                props={{ size: "small", placeholder: "Select Devices" }}
                                items={[
                                    { RecId: 1, Name: "Device1" },
                                    { RecId: 2, Name: "Device2" },
                                ]}
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
                                onSelectChange={(item) => hendleChangeValue(item, setLevelFirst)}
                                props={{ size: "small", placeholder: "Select List" }}
                                items={[
                                    { RecId: 1, Name: "List 1" },
                                    { RecId: 2, Name: "List 2" },
                                ]}
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
                                onSelectChange={(item) => hendleChangeValue(item, setLevelSecound)}
                                props={{ size: "small", placeholder: "Select List" }}
                                items={[
                                    { RecId: 1, Name: "List 1" },
                                    { RecId: 2, Name: "List 2" },
                                ]}
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
                                onSelectChange={(item) => hendleChangeValue(item, setLevelThird)}
                                props={{ size: "small", placeholder: "Select List" }}
                                items={[
                                    { RecId: 1, Name: "List 1" },
                                    { RecId: 2, Name: "List 2" },
                                ]}
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
