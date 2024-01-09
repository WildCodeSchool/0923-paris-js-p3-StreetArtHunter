import WorkCard2 from "../../components/WorkCard2/WorkCard2";
import PictureMap from "../../assets/images/map_sample/map_sample_1-1.jpg";
import DataSpots from "../../../data_sample/data_spots.json";
import "./spotZoneById.css";

function SpotZoneById() {
  const Datas = DataSpots;
  return (
    <section className="spotZoneById">
      <div className="city_zone_container">
        <h1>CITY</h1>
        <div className="picture_map_container">
          <img
            className="picture_SpotZoneById"
            src={PictureMap}
            alt="pictureOne"
          />
        </div>
        <div className="text_SpotZoneByid">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo velit
            ipsam ad architecto voluptate alias assumenda nam iste ducimus vel.
          </p>
        </div>
      </div>
      <div className="works_city_zone_container">
        {Datas.map((data, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <WorkCard2 key={index} data={data} />
        ))}
      </div>
    </section>
  );
}

export default SpotZoneById;
