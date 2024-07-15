import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";

export default function MapPage() {
  return (
    <div>
      <h1>Map test</h1>
      <MapContainer
        center={[31.959286986513764, 35.14114582589189]}
        zoom={7}
        scrollWheelZoom={false}
      >
        <Marker position={[31.959145896005563, 35.140641570583504]}>
          <Popup>fild</Popup>
        </Marker>
        <Marker position={[31.9385088966591, 35.13588505395436]}>
          <Tooltip>locatioc </Tooltip>
        </Marker>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
}
