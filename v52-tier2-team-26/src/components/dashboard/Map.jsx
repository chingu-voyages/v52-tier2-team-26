import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../../styling/map.css";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const outerBounds = [
    [53.90597, -135.047459],
    [21.923872, -60.426611],
  ];

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
        {/* {[...filteredData].map((r, index) => (
                    <Marker key={`map component-${ r.id } - ${ index }`} position={[r.latitude, r.longitude]} >
                        <Popup>
                            <div className='flex flex-col'>
                                <div className='text-lg font-bold m-2'>{r.name}</div>
                                <div className='flex'>
                                    <div className='m-2'>
                                        <img className="w-48" src={r.img} alt="" />
                                    </div>
                                    <div className='flex flex-col m-2'>
                                        <div className='mb-5'>Known for: {r.dsc}</div>
                                        <div className='flex justify-end'>{r.rate} stars</div>
                                    </div>
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                ))} */}
      </MapContainer>
    </>
  );
};

export default Map;
