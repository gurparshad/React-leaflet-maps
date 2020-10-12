import React from "react";
import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// look into the index.html file for the code snippet. public folder.
// check index. css file as well, if it does nt work in your project.

export default function myMap() {
  const position = [1.35, 103.8];
  return (
    <Map
      className="map"
      center={position}
      zoom={2}
      style={{ height: 300, width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </Map>
  );
}
