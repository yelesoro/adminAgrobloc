// @flow strict
import { yseState } from 'react';
import * as React from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import { Marker } from 'react-leaflet';
import { Popup } from 'react-leaflet';

function geographycard() {
    // const [center,setCenter ] = useState({lat: 13.084622, lng: 80.2483});
    // const zoomLevel = 9;
    // const mapRef = useRef();
    return (
        <div >
            <div style={{ width: "50px", height: "50px" }} >
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{ width: "50px", height: "50px" }} >
  <TileLayer
    url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}@2x.jpg?key=6uvNwmzbA8da1KcLTiK9"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
            </div>


            
        </div>
    );
};

export default geographycard;