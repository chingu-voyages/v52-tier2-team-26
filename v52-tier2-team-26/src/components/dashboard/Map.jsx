import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import L from "leaflet";
import "leaflet-routing-machine";
import { LatLng } from "leaflet";
import "../../styling/map.css";
import "leaflet/dist/leaflet.css";

const Map = ({
  addresses,
  updatedRequests,
  setUpdatedRequests,
  filteredRequests,
  setFilteredRequests,
}) => {
  const scheduledRequests = updatedRequests.filter(
    (i) => i.status === "Scheduled"
  );
  const [route, setRoute] = useState("off");

  const mapAddresses = addresses.filter((item) =>
    filteredRequests.some((item2) => item2.address === item.addressLine)
  );

  const outerBounds = [
    [53.90597, -135.047459],
    [21.923872, -60.426611],
  ];

  const customIcon = new L.Icon({
    iconUrl: require("../../images/map-icon.png"),
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  const [map, setMap] = useState(null);

  // Add route on map load
  const MapWithRoute = () => {
    const leafletMap = useMap();

    useEffect(() => {
      if (leafletMap) {
        // Create waypoints array from the addresses
        const waypoints = mapAddresses.map(
          (address) => new LatLng(address.lat, address.lng)
        );

        // Create routing machine instance
        const route = L.Routing.control({
          waypoints: waypoints,
          routeWhileDragging: true, // Optional: Enable dragging the route
          createMarker: () => null, // Optional: Hide markers
        }).addTo(leafletMap);
      }
    }, [leafletMap]);

    return null;
  };

  useEffect(() => {}, [addresses]);

  return (
    <>
      <div className="route-button-div">
        <button
          className="route-button"
          onClick={() => {
            setRoute("On");
          }}
        >
          Generate Route
        </button>
      </div>
      <MapContainer
        className="map-container"
        center={[34.05, -118.25]}
        zoom={9.5}
        minZoom={4}
        scrollWheelZoom={true}
        maxBounds={outerBounds}
        whenCreated={(mapInstance) => setMap(mapInstance)}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />
        {mapAddresses.map((r, index) => (
          <Marker
            key={`map component-${r.id} - ${index}`}
            position={[r.lat, r.lng]}
            icon={customIcon}
          >
            <Popup>
              <div className="">{r.addressLine}</div>
            </Popup>
          </Marker>
        ))}
        {route === "On" ? <MapWithRoute className="map-route-return" /> : null}
      </MapContainer>
    </>
  );
};

export default Map;
