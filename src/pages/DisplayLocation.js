import React from 'react';
import GoogleMapReact from 'google-map-react';

const FinalMap = () => {
    const center = { lat: 59.95, lng: 30.33 };
    const zoom = 11;

    const handleApiLoaded = (map, maps) => {
        // use map and maps objects
        let  geoFence=[]
        const marker = new maps.Marker({
            position: center,
            map,
            icon: {
                url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
            },
        });
        const polygon = new maps.Polygon({
            paths: [
                { lat: 59.95, lng: 30.33 },
                { lat: 59.85, lng: 30.33 },
                { lat: 59.85, lng: 30.23 },
            ],
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            editable: true,
        });
        polygon.setMap(map);
        const updateGeoFence = () => {
            geoFence = polygon.getPath().getArray().map((latLng) => ({
                lat: latLng.lat(),
                lng: latLng.lng(),
            }));
            console.log('geoFence:', geoFence);
        };

        maps.event.addListener(polygon.getPath(), 'set_at', updateGeoFence);

        // maps.event.addListener(polygon.getPath(), 'insert_at',updateGeoFence);
        maps.event.addListener(polygon.getPath(), 'insert_at', (index) => {
            if (polygon.getPath().getLength() > 3) {
                polygon.getPath().removeAt(index);
            }
            updateGeoFence();
        });
    };

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAolMqc9bflA2GpOQ8GtT0cNrwZG3EjhO4' }}
                defaultCenter={center}
                defaultZoom={zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
            />
        </div>
    );
};

export default FinalMap;
