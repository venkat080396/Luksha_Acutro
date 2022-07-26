import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import Connectors from "../../Connectors/Index";

const SelectConnectors = ({ handleClose, selctedConnectorRecIds, onSelectChange }) => {
    console.log("connector screen", selctedConnectorRecIds);
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
                    Select a Connector
                </Typography>
            </Grid>
            <Grid item>
                <Connectors selectedRows={selctedConnectorRecIds} onSelectChange={(rows) => onSelectChange(rows)} isSelect={true} />
            </Grid>
            <Grid item container
                spacing={2}
                justifyContent="flex-end"
                sx={{ padding: "10px 30px 10px 0px" }}>
                <Grid item>
                    <Button variant="contained"
                        onClick={handleOkClick}>
                        <Typography>
                            OK
                        </Typography>
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="secondary"
                        onClick={handleClose}>
                        <Typography>
                            Cancel
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SelectConnectors