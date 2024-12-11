import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import L from "leaflet";
import mapData from "../../data/mapdata";
import "../../styling/map.css";
import "leaflet/dist/leaflet.css";
import { requirePropFactory } from "@mui/material";

const Map = () => {
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

  console.log(mapData);

  return (
    <>
      <MapContainer
        className="map-container"
        center={[34.05, -118.25]}
        zoom={9.5}
        minZoom={4}
        scrollWheelZoom={true}
        maxBounds={outerBounds}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {mapData.map((r, index) => (
          <Marker
            key={`map component-${r.id} - ${index}`}
            position={[r.lat, r.lng]}
            icon={customIcon}
          >
            <Popup>
              <div className="">{r.address}</div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
};

export default Map;
