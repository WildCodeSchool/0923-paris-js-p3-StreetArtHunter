import WorkCard2 from "../../components/WorkCard2/WorkCard2";
import PictureMap from "../../assets/images/map_sample/map_sample_1-1.jpg";
import "./spotZoneById.css";

function SpotZoneById() {
  return (
    <section className="spotZoneById">
      <div className="city_zone_container">
        <h1>CITY</h1>
        <div className="text_SpotZoneByid">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo velit
            ipsam ad architecto voluptate alias assumenda nam iste ducimus vel.
          </p>
        </div>
        <div>
          <img
            className="picture_SpotZoneById"
            src={PictureMap}
            alt="pictureOne"
          />
        </div>
      </div>
      <div className="works_city_zone_container">
        <WorkCard2 />
      </div>
    </section>
  );
}

export default SpotZoneById;
