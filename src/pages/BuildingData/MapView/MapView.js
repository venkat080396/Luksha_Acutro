import React, { useState } from 'react'
import { Grid, Button } from '@mui/material'
import Map from '../../../components/map/Map'
import { useSelector } from "react-redux";
import { getAllBuildings } from '../../../features/Home/homeSlice';

const MapView = () => {
    const [selectedBuildingOnMap, setSelectedBuildingOnMap] = useState(null);
    const [buildingLocations, setBuildingLocations] = useState(null);
    const buildings = useSelector(getAllBuildings);

    const handleClick = (selectedBuilding) => {
        setSelectedBuildingOnMap(selectedBuilding)
    }

    const onShowLocationsClick = () => {
        setBuildingLocations(buildings)
    }

    return (
        <>
            <Grid container
                direction="column"
                alignItems="flex-start"
                spacing={2}
                sx={{ marginLeft: "2em" }}>
                <Grid item>
                    <Button variant="contained" onClick={onShowLocationsClick}>
                        Show Locations
                    </Button>
                </Grid>
                <Grid item sx={{ height: "50vh", width: "85vw" }}>
                    <Map buildingLocations={buildingLocations} selectedBuildingOnMap={selectedBuildingOnMap} onClick={handleClick} />
                </Grid>
            </Grid>
        </>
    )
}

export default MapView