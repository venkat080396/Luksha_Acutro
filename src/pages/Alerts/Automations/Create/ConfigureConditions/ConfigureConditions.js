import React from 'react'
import { Box, CardHeader, FormControlLabel, Grid, Switch, Typography } from '@mui/material'
import Card from '../../../../../components/layout/Card/Card'
import TextField from '../../../../../components/forms/TextField/TextField'
import Select from "../../../../../components/forms/Select/Select";
import { ALERT_RULES } from "../../../constants";

const ConfigureConditions = (props) => {
    const { selectedAssetType, onAssetTypeChange, deviceTypes, selectedDevice, onDeviceChange,
        devices, selectedSensor, onSensorChange, sensors, selectedOperator, onOperatorChange,
        operators, thresholdValue, onThresholdValueChange } = props;

    return (
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Card
                headerContent={
                    <CardHeader
                        sx={{ padding: 0 }}
                        title={<Typography variant="header3">
                            {ALERT_RULES.CONFIGURE_CONDITIONS}
                        </Typography>}
                        subheader={
                            <Typography variant="body1">
                                {ALERT_RULES.CONFIGURE_CONDITIONS_DESCRIPTION}
                            </Typography>
                        }
                    />
                }
                sx={{ paddingLeft: 4, paddingBottom: 4, margin: "0px 30px 30px 30px" }}
                content={
                    <Box>
                        <Grid container spacing={2}>
                            <Grid item sm={12} md={12} lg={12} xl={12}>
                                <Typography sx={{ marginBottom: 1 }}>
                                    {ALERT_RULES.ASSET_TYPE}
                                </Typography>
                                <Select
                                    sx={{ width: "460px" }}
                                    value={selectedAssetType}
                                    onSelectChange={onAssetTypeChange}
                                    props={{
                                        size: "small"
                                    }}
                                    items={deviceTypes}
                                    fullWidth={true}
                                />
                            </Grid>
                            <Grid item sm={12} md={12} lg={12} xl={12}>
                                <Typography sx={{ marginBottom: 1 }}>
                                    {ALERT_RULES.DEVICE}
                                </Typography>
                                <Select
                                    sx={{ width: "460px" }}
                                    value={selectedDevice}
                                    onSelectChange={onDeviceChange}
                                    props={{
                                        size: "small"
                                    }}
                                    items={devices}
                                    fullWidth={true}
                                />
                            </Grid>
                            <Grid item sm={12} md={12} lg={12} xl={12}>
                                <Typography sx={{ marginBottom: 1 }}>
                                    {ALERT_RULES.SENSOR}
                                </Typography>
                                <Select
                                    sx={{ width: "460px" }}
                                    value={selectedSensor}
                                    onSelectChange={onSensorChange}
                                    props={{
                                        size: "small"
                                    }}
                                    items={sensors}
                                    fullWidth={true}
                                />
                            </Grid>
                            <Grid item sx={12} sm={12} md={12} lg={12} xl={12}>
                                <Typography sx={{ marginBottom: 1 }}>
                                    {ALERT_RULES.OPERATOR}
                                </Typography>
                                <Select
                                    sx={{ width: "460px" }}
                                    value={selectedOperator}
                                    onSelectChange={onOperatorChange}
                                    props={{
                                        size: "small"
                                    }}
                                    items={operators}
                                    fullWidth={true}
                                />
                            </Grid>
                            <Grid item sx={6} sm={6} md={6} lg={6} xl={6} container
                                alignItems="center"
                                spacing={5}>
                                <Grid item>
                                    <Typography sx={{ marginBottom: 1 }}>
                                        {ALERT_RULES.VALUE}
                                    </Typography>
                                    <TextField
                                        sx={{ width: "150px", height: "50px" }}
                                        value={thresholdValue}
                                        onChange={onThresholdValueChange}
                                        name="Value" type="number" size="small" fullWidth />
                                </Grid>
                                <Grid item>
                                    <FormControlLabel
                                        control={<Switch />}
                                        label={ALERT_RULES.ALLOW_AI_ADJUSTMENT} />
                                </Grid>
                            </Grid>
                            {/* <Grid item sx={6} sm={6} md={6} lg={6} xl={6}>
                    <Typography sx={{ marginBottom: 1 }}>Violations Count</Typography>
                    <TextField name="Violations Count *" type="number" size="small" fullWidth />
                </Grid> */}
                        </Grid>
                    </Box>
                }
            />
        </Grid>
    )
}

export default ConfigureConditions