import React, { useState } from 'react'
import { Grid } from '@mui/material'
import Map from '../../../components/map/Map'
import { useSelector } from "react-redux";
import { getAllBuildings } from '../../../features/Home/homeSlice';

const MapView = () => {
    const [selectedBuildingOnMap, setSelectedBuildingOnMap] = useState(null);
    const buildings = useSelector(getAllBuildings);

    const handleClick = (selectedBuilding) => {
        setSelectedBuildingOnMap(selectedBuilding);
    }

    return (
        <Grid container
            direction="column"
            alignItems="flex-start"
            spacing={2}
            sx={{ marginLeft: "2em" }}>
            <Grid item>
                <Map
                    buildingLocations={buildings}
                    selectedBuildingOnMap={selectedBuildingOnMap}
                    onClick={handleClick} />
            </Grid>
        </Grid>
    )
}

export default MapView