import React from 'react'
import { Grid, Typography } from '@mui/material'
import IconLabel from "../../../components/forms/IconLabel/IconLabel"
import { ReactComponent as MapViewIcon } from "../../../assets/icons/Map View.svg"
import { ReactComponent as ListViewIcon } from "../../../assets/icons/List View.svg"
import { MAPVIEW, LISTVIEW } from '../constants'

const Header = (props) => {
    const { handleClick } = props;

    return (
        <Grid container
            direction="row"
            justifyContent="flex-start"
            alignItems="center" spacing={5} sx={{ marginLeft: "-25px" }}>
            <Grid item onClick={() => handleClick(true)}>
                <IconLabel
                    icon={<MapViewIcon height="3em" width="3em" sx={{ cursor: "pointer" }} />}
                    label={<Typography variant="header3" sx={{ cursor: "pointer" }}>{MAPVIEW.VALUE}</Typography>} />
            </Grid>
            <Grid item onClick={() => handleClick(false)}>
                <IconLabel
                    icon={<ListViewIcon height="3em" width="3em" sx={{ cursor: "pointer" }} />}
                    label={<Typography variant="header3" sx={{ cursor: "pointer" }}>{LISTVIEW.VALUE}</Typography>} />
            </Grid>
        </Grid>
    )
}

export default Header