import React from 'react';
import { Map, TileLayer } from 'react-leaflet';

function MapView() {
  return (
    <Map className="map-view" center={[13, 100]} zoom={6.5}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </Map>
  );
}

export default MapView;
 