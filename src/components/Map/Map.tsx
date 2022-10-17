import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {ILaunch} from'@/data/launch/types';
import LocationMarker from "./LocationMarker";

interface IMapProps{
  launches:ILaunch[];
}
function Map({launches}:IMapProps) {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={2} scrollWheelZoom={true} className="h-full w-full">
      <TileLayer      
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker launches={launches}/>
    </MapContainer>
  );
}

export default Map;
