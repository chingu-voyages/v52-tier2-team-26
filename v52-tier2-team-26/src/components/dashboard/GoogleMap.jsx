import React, { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

const GoogleMap = () => {
  const position = { lat: 34.05565, lng: -118.25862 };

  const API_KEY = null;

  return (
    <APIProvider apiKey={API_KEY}>
      <div style={{ height: "50vh" }}>
        <Map zoom={10} center={position}></Map>
      </div>
    </APIProvider>
  );
};

export default GoogleMap;
