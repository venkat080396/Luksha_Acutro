import { Box, Button, CardHeader, FormControlLabel, FormGroup, Grid, Switch, Typography } from '@mui/material'
import React, { useState } from 'react'
import TextField from '../../../../../components/Inputs/TextField/TextField'
import Card from '../../../../../components/Layout/Card/Card'
import { SelectConnectors } from '../../SelectConnectors';
import { Dialog } from '../../../../../components/Feedback/Dialog';
import { ALERT_RULES } from '../../../constants';

const ConfigureActions = (props) => {
    const { selectedConnectors, selectedConnectorRecIds, handleSelectChange,
        checked, handleChange, message, handleMessageChange } = props;
    const [openConnector, setOpenConnector] = useState(false);

    return (
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Card
                headerContent={
                    <CardHeader
                        sx={{ padding: 0 }}
                        title={<Typography variant='header3'>
                            {ALERT_RULES.CONFIGURE_ACTIONS}
                        </Typography>}
                        subheader={
                            <Typography variant='body1'>
                                {ALERT_RULES.CONFIGURE_ACTIONS_DESCRIPTION}
                            </Typography>
                        }
                    />
                }
                sx={{ paddingLeft: 4, paddingBottom: 2, margin: '0px 30px 30px 30px' }}
                content={
                    <Box>
                        <Grid container spacing={2}>
                            <Grid item container
                                direction='row'
                                alignItems='center'
                                justifyContent='flex-end'
                                spacing={2}
                                sx={{ marginTop: '10px' }}>
                                {selectedConnectors && selectedConnectors.map((connector) => (
                                    <>
                                        <Grid item container
                                            direction='column'>
                                            <Grid item>
                                                {connector.ConnectorType}
                                            </Grid>
                                            <Grid item>
                                                {connector.Name}
                                            </Grid>
                                        </Grid>
                                        {/* <Grid item sx={{ marginTop: '-50px' }}>
                                Delete icon
                            </Grid> */}
                                    </>
                                ))}
                            </Grid>
                            <Grid item>
                                <FormGroup>
                                    <FormControlLabel
                                        control={<Switch checked={checked} onChange={handleChange} />}
                                        label={ALERT_RULES.OVERRIDE_TEMPLATE} />
                                    {checked && (<Grid item sx={6} sm={6} md={6} lg={6} xl={6}>
                                        <Typography sx={{ marginBottom: 1 }}>{ALERT_RULES.MESSAGE} *</Typography>
                                        <TextField name='Message'
                                            value={message}
                                            onChange={handleMessageChange}
                                            size='small' fullWidth />
                                    </Grid>)}
                                </FormGroup>
                            </Grid>

                            <Grid item sx={12} sm={12} md={12} lg={12} xl={12}>
                                <Button variant='contained' onClick={() => setOpenConnector(true)}>
                                    <Typography>
                                        {ALERT_RULES.ADD_ACTION}
                                    </Typography>
                                </Button>
                            </Grid>
                            <Grid item>
                                <Dialog
                                    open={openConnector}
                                    content={<SelectConnectors
                                        selctedConnectorRecIds={selectedConnectorRecIds}
                                        onSelectChange={handleSelectChange}
                                        handleClose={() => setOpenConnector(false)} />}
                                    handleClose={() => setOpenConnector(false)}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                }
            />
        </Grid>
    )
}

export { ConfigureActions };