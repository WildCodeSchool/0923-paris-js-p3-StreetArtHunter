import "./map.css";
import mapTemp from "../../assets/images/map_sample/map_sample_1-1.jpg";
// import mapContainer from "../../assets/images/img/paint_map-container2.png";

function Map() {
  return (
    <section className="work_map_container">
      {/* <img className="work_map_deco" src={mapContainer} alt="mapcontainer" /> */}
      <img className="work_map" src={mapTemp} alt="tempMap" />
    </section>
  );
}

export default Map;
