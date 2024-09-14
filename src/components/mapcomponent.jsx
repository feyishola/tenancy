import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import axios from 'axios';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('../assets/map-images/marker-icon-2x.png'),
  iconUrl: require('../assets/map-images/marker-icon.png'),
  shadowUrl: require('../assets/map-images/marker-shadow.png'),
});

// Component to update the map view when coordinates change
const UpdateMapCenter = ({ coordinates }) => {
  const map = useMap();
  useEffect(() => {
    if (coordinates) {
      map.setView(coordinates);
    }
  }, [coordinates, map]);
  return null;
};

const Mapcomponent = ({
  location = 'No.4, Maha Close, Barnawa Kaduna',
  latitude = '10.47661',
  longitude = '7.43039',
  mapHeight = '700px',
  mapWidth = '100%',
}) => {
  const [coordinates, setCoordinates] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await axios.get(
          `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=${process.env.REACT_APP_APIKEY}`
        );

        if (response.data.results && response.data.results.length > 0) {
          const { lat, lng } = response.data.results[0].geometry;
          // console.log({ lat, lng });

          setCoordinates([lat, lng]);
        } else {
          setError('No results found for the provided address');
        }
      } catch (error) {
        console.error('Error fetching coordinates: ', error);
        setError('Error fetching coordinates.');
      }
    };

    if (location) {
      fetchCoordinates();
    } else {
      setCoordinates([latitude, longitude]);
    }
  }, [location, longitude, latitude]);

  return (
    <div>
      {error ? error : (
        <div style={{ width: mapWidth, height: mapHeight }}> 
          {coordinates && (
            <MapContainer
              center={coordinates}
              zoom={13}
              className="h-full w-full"
            >
              <UpdateMapCenter coordinates={coordinates} />
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={coordinates}>
                <Popup>{location}</Popup>
              </Marker>
            </MapContainer>
          )}
        </div>
      )}
    </div>
  );
};

export default Mapcomponent;
