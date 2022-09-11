import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import Card from '../../../../../components/Layout/Card/Card'
import TextField from '../../../../../components/Inputs/TextField/TextField'
import { ALERT_RULES } from '../../../constants';

const Details = (props) => {
    const { automationName, description, onAutomationNameChange, onDescriptionChange } = props;

    return (
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Card
                headerContent={
                    <Typography variant='header3'>
                        {ALERT_RULES.ENTER_NAME_FOR_ALERT_RULE}
                    </Typography>
                }
                sx={{ paddingLeft: 4, paddingBottom: 4, margin: '0px 30px 30px 30px' }}
                content={
                    <Box>
                        <Grid container spacing={2}>
                            <Grid
                                item
                                sx={12}
                                sm={12}
                                md={12}
                                lg={12}
                                xl={12}
                            >
                                <Typography sx={{ marginBottom: 1 }}>
                                    {ALERT_RULES.FIELDS.NAME}
                                </Typography>
                                <TextField
                                    sx={{ width: '460px', height: '50px' }}
                                    value={automationName}
                                    onChange={onAutomationNameChange}
                                    name={ALERT_RULES.FIELDS.NAME_PLACEHOLDER}
                                    size='small' fullWidth />
                            </Grid>
                            <Grid
                                item
                                sx={12}
                                sm={12}
                                md={12}
                                lg={12}
                                xl={12}
                            >
                                <Typography sx={{ marginBottom: 1 }}>
                                    {ALERT_RULES.FIELDS.DESCRIPTION}
                                </Typography>
                                <TextField
                                    sx={{ width: '460px', height: '50px' }}
                                    value={description}
                                    onChange={onDescriptionChange}
                                    name={ALERT_RULES.FIELDS.DESCRIPTION_PLACEHOLDER}
                                    size='small' fullWidth />
                            </Grid>
                        </Grid>
                    </Box>
                }
            />
        </Grid>
    )
}

export { Details }