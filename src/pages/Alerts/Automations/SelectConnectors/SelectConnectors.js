import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import Connectors from "../../Connectors/Index";
import { CONNECTORS } from "../../constants";

const SelectConnectors = ({ handleClose, selctedConnectorRecIds, onSelectChange }) => {

    const handleOkClick = () => {
        handleClose();
    }

    return (
        <Grid container
            direction="column"
            spacing={2}
            sx={{ height: "580px", width: "800px" }}>
            <Grid item sx={{ margin: "20px" }}>
                <Typography variant="header2">
                    {CONNECTORS.SELECT_CONNECTOR}
                </Typography>
            </Grid>
            <Grid item>
                <Connectors
                    selectedRows={selctedConnectorRecIds}
                    onSelectChange={(rows) => onSelectChange(rows)}
                    isSelect={true} />
            </Grid>
            <Grid item container
                spacing={2}
                justifyContent="flex-end"
                sx={{ padding: "10px 30px 10px 0px" }}>
                <Grid item>
                    <Button variant="contained"
                        onClick={handleOkClick}>
                        <Typography>
                            {CONNECTORS.OK}
                        </Typography>
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="secondary"
                        onClick={handleClose}>
                        <Typography>
                            {CONNECTORS.CANCEL}
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SelectConnectors