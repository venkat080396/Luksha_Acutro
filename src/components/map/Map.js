import React, { useState, useMemo } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

const Map = (props) => {
    const { selectedBuildingOnMap, buildingLocations, onClick } = props
    const [viewport, setViewport] = useState({
        latitude: 51.509865,
        longitude: -0.118092,
        zoom: 7
    });

    const handleMarkerClick = (park) => {
        onClick(park)
    }

    const markers = buildingLocations?.map(buildingLocation => (
        <div>
            <Marker
                key={buildingLocation.RecId}
                latitude={buildingLocation.Latitude}
                longitude={buildingLocation.Logitude}
                onClick={() => handleMarkerClick(buildingLocation)}
            >
            </Marker>
        </div>
    ))

    const getPopup = () => (
        selectedBuildingOnMap && (<Popup
            latitude={selectedBuildingOnMap.Latitude}
            longitude={selectedBuildingOnMap.Logitude}
            closeOnClick={true}
            onClose={() => handleMarkerClick(selectedBuildingOnMap)}
        >
            <div>
                <h2>{selectedBuildingOnMap.Name}</h2>
            </div>
        </Popup>)
    )

    return (
        <ReactMapGL
            initialViewState={viewport}
            reuseMaps
            style={{ width: 1300, height: 450, borderRadius: "1em" }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        >
            {markers}
            {getPopup()}
        </ReactMapGL>
    );
}
export default Map