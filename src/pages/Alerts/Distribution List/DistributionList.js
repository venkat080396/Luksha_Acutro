import { Grid, Box } from "@mui/material";
import React from "react";

import { useDispatch } from "react-redux";

import Label from "../../../components/forms/Label/Label";
import Card from "../../../components/layout/Card/Card";
import TextField from "../../../components/forms/TextField/TextField";
import MultipleSelectBox from "../../../components/forms/MultipleSelectBox/MultipleSelectBox";
import Button from "../../../components/forms/Button/Button";
import IconLabel from "../../../components/forms/IconLabel/IconLabel";

import { grey } from '@mui/material/colors';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
// import TextsmsIcon from '@mui/icons-material/Textsms';

import { saveDistribution } from '../../../features/Alarts/AlartsSlice';

const DistributionList = () => {
    const dispatch = useDispatch();

    const [name, setName] = React.useState("");
    const [emailUser, setEmailUser] = React.useState([]);
    const [callUser, setCallUser] = React.useState([]);
    // const [textUser, setTextUser] = React.useState([]);

    const [emailUserOpen, setEmailUserOpen] = React.useState(false);
    const [callUserOpen, setCallUserOpen] = React.useState(false);
    // const [textUserOpen, setTextUserOpen] = React.useState(false);


    const setData = (event, setFunction, setOpen) => {
        const {
            target: { value },
        } = event;
        event.preventDefault();
        setOpen(true);
        setFunction(typeof value === "string" ? value.split(",") : value);
        setOpen(true);
    };

    const handleSave = () => {
        const email = emailUser.join(',');
        const call = callUser.join(',');
        dispatch(saveDistribution({ email, call, name }))
    }

    const UserData = {
        email: ["abc@gmail.com", "abc1@gmail.com", "abc2@gmail.com"],
        call: ["1234567890", "1234567891", "1234567892"]
    }

    return (
        <Grid container direction="column">
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Card
                    headerContent={<Label sx={{ marginTop: 2, marginBottom: 2 }} style={{ fontWeight: 'bold', fontSize: 32, color: "white" }} label="Distribution List" />}
                    sx={{ paddingX: 4, paddingY: 4 }}
                    content={
                        <>
                            <Grid container alignItems="center">
                                <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                    <Label label="Distribution Name" style={{ fontSize: 16, color: "white" }} />
                                </Grid>
                                <Grid item xs={10} sm={10} md={4} lg={4} xl={4}>
                                    <TextField
                                        size="small"
                                        value={name}
                                        placeholder="Enter Distribution Name"
                                        onChange={(event) => setName(event.target.value)}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Box paddingY={2} paddingTop={4}>
                                        <Grid container alignItems="center">
                                            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                                <IconLabel label='Email' icon={<MailOutlineIcon color={grey[50]} fontSize="large" />} />
                                            </Grid>
                                            <Grid item xs={10} sm={10} md={6} lg={6} xl={6}>
                                                <MultipleSelectBox
                                                    open={emailUserOpen}
                                                    onClose={() => setEmailUserOpen(false)}
                                                    onOpen={() => setEmailUserOpen(true)}
                                                    MenuItem={UserData.email}
                                                    placeholder="Select User"
                                                    currentValue={emailUser}
                                                    handleChange={(event) => {
                                                        setData(event, setEmailUser, setEmailUserOpen);
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
                                                    open={callUserOpen}
                                                    onClose={() => setCallUserOpen(false)}
                                                    onOpen={() => setCallUserOpen(true)}
                                                    MenuItem={UserData.call}
                                                    placeholder="Select User"
                                                    currentValue={callUser}
                                                    handleChange={(event) => {
                                                        setData(event, setCallUser, setCallUserOpen);
                                                    }}
                                                    fullWidth
                                                />
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Grid>
                                {/* <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
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
                                    <Box paddingY={4}>
                                        <Grid container alignItems="center" flexDirection='row-reverse' spacing={1}>
                                            <Grid item xs={0} sm={0} md={4} lg={4} xl={4} />
                                            <Grid item>
                                                <Button onClick={handleSave} value="Save" />
                                            </Grid>
                                            <Grid item>
                                                <Button
                                                    onClick={() => { }}
                                                    color="error"
                                                    value="Cancel"
                                                />
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Grid>
                            </Grid>
                        </>
                    }
                />
            </Grid>
        </Grid>
    );
};

export default DistributionList;
