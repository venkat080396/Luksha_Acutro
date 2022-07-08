import React from 'react'
import { Grid } from '@mui/material'
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
            alignItems="center" spacing={5}>
            <Grid item onClick={() => handleClick(true)}>
                <IconLabel icon={<MapViewIcon height="2.5em" width="2.5em" />} label={MAPVIEW.VALUE} />
            </Grid>
            <Grid item onClick={() => handleClick(false)}>
                <IconLabel icon={<ListViewIcon height="2.5em" width="2.5em" />} label={LISTVIEW.VALUE} />
            </Grid>
        </Grid>
    )
}

export default Header