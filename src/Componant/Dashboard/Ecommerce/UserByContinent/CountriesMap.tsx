import { MapContainer, TileLayer } from "react-leaflet";
import { usaPosition } from "../../../../Data/Maps/Maps";

const CountriesMap = () => {

  return (
    <div className="map">
      <MapContainer style={{ height: 389 }} easeLinearity={0.35} attributionControl={true} center={usaPosition} zoom={13} scrollWheelZoom={true} className="z-0 jvector-map-height">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </div>
  );
};

export default CountriesMap;
