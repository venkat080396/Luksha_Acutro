import { Grid, Box } from "@mui/material";
import React from "react";

import { useDispatch } from "react-redux";
import { useSnackbar } from 'notistack';

import Label from "../../../components/forms/Label/Label";
import Card from "../../../components/layout/Card/Card";
import TextField from "../../../components/forms/TextField/TextField";
// import MultipleSelectBox from "../../../components/forms/MultipleSelectBox/MultipleSelectBox";
import Button from "../../../components/forms/Button/Button";
import IconLabel from "../../../components/forms/IconLabel/IconLabel";

import { grey } from '@mui/material/colors';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import TextsmsIcon from '@mui/icons-material/Textsms';

import { saveDistribution } from '../../../features/Alerts/AlertsSlice';


const DistributionListContent = () => {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const [name, setName] = React.useState("");
    const [emailUser, setEmailUser] = React.useState("");
    const [callUser, setCallUser] = React.useState("");
    const [textUser, setTextUser] = React.useState("");

    const handleSave = () => {
        const email = emailUser;
        const call = callUser;
        dispatch(saveDistribution({ email, call, name }))
        setName("");
        setEmailUser("");
        setCallUser("");
        setTextUser("");
        enqueueSnackbar("Data is Save Successfully", { variant: 'success' })
    }

    const handleReset = () => {
        setName("");
        setEmailUser("");
        setCallUser("");
        setTextUser("");
    }

    return (
        <>
            <Grid container alignItems="center">
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                    <Label label="Distribution Name" style={{ fontSize: 16, color: "white" }} />
                </Grid>
                <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                    <TextField
                        size="small"
                        value={name}
                        placeholder="Enter Distribution Name"
                        onChange={(event) => setName(event.target.value)}
                        fullWidth
                    />
                </Grid>
                {/* <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Box paddingY={2} paddingTop={4}>
                        <Grid container alignItems="center">
                            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                <IconLabel label='Email' icon={<MailOutlineIcon color={grey[50]} fontSize="large" />} />
                            </Grid>
                            <Grid item xs={10} sm={10} md={6} lg={6} xl={6}>
                                <MultipleSelectBox
                                    MenuItem={UserData.email}
                                    placeholder="Select User"
                                    currentValue={emailUser}
                                    handleChange={(event) => {
                                        setData(event, setEmailUser);
                                    }}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Box paddingY={2}>
                        <Grid container alignItems="center">
                            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                <IconLabel label='Call & Text' icon={<CallIcon color={grey[50]} fontSize="large" />} />
                            </Grid>
                            <Grid item xs={10} sm={10} md={6} lg={6} xl={6}>
                                <MultipleSelectBox
                                    MenuItem={UserData.call}
                                    placeholder="Select User"
                                    currentValue={callUser}
                                    handleChange={(event) => {
                                        setData(event, setCallUser);
                                    }}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Box paddingY={2}>
                        <Grid container alignItems="center">
                            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                <IconLabel label='Text' icon={<TextsmsIcon color={grey[50]} fontSize="large" />} />
                            </Grid>
                            <Grid item xs={10} sm={10} md={6} lg={6} xl={6}>
                                <MultipleSelectBox
                                    open={textUserOpen}
                                    onClose={() => setTextUserOpen(false)}
                                    onOpen={() => setTextUserOpen(true)}
                                    MenuItem={["user1", "user2", "user3"]}
                                    placeholder="Select User"
                                    currentValue={textUser}
                                    handleChange={(event) => {
                                        setData(event, setTextUser, setTextUserOpen);
                                    }}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Grid> */}
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Box paddingY={2} paddingTop={4}>
                        <Grid container alignItems="center">
                            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                                <IconLabel label='Email' icon={<MailOutlineIcon color={grey[50]} fontSize="large" />} />
                            </Grid>
                            <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                                <TextField
                                    size="small"
                                    value={emailUser}
                                    placeholder="Enter User Email"
                                    onChange={(event) => setEmailUser(event.target.value)}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Box paddingY={2}>
                        <Grid container alignItems="center">
                            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                                <IconLabel label='Call & Text' icon={<CallIcon color={grey[50]} fontSize="large" />} />
                            </Grid>
                            <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                                <TextField
                                    size="small"
                                    value={callUser}
                                    placeholder="Enter User  Phone Number"
                                    onChange={(event) => setCallUser(event.target.value)}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Box paddingY={2}>
                        <Grid container alignItems="center">
                            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                                <IconLabel label='Text' icon={<TextsmsIcon color={grey[50]} fontSize="large" />} />
                            </Grid>
                            <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                                <TextField
                                    size="small"
                                    value={textUser}
                                    placeholder="Enter User  Phone Number"
                                    onChange={(event) => setTextUser(event.target.value)}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Box paddingY={4}>
                        <Grid container alignItems="center" flexDirection='row-reverse' spacing={4}>
                            <Grid item>
                                <Button onClick={handleSave} value="Save" />
                            </Grid>
                            <Grid item>
                                <Button
                                    onClick={handleReset}
                                    color="error"
                                    value="Reset"
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};



export default function DistributionForm() {
    return (
        <Grid container direction="column">
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <DistributionListContent />
            </Grid>
        </Grid>
    )
};
