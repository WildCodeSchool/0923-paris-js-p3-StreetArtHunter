import SpotCard from "../../components/SpotCard/SpotCard";
import DataSpots from "../../../data_sample/data_spots.json";
import PictureBottom from "../../assets/images/img/graph04 (1).png";
import "./spotZone.css";

function SpotZone() {
  const Datas = DataSpots;
  return (
    <section className="spotZoneContainer">
      <h1 className="title_SpotZone">STREET ART SPOTS</h1>

      <div className="text_SpotZone">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          perferendis repellendus temporibus doloremque fuga quaerat fugit nisi
          dignissimos molestias quibusdam. Sequi nihil quis nam corporis? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          perferendis repellendus temporibus doloremque fuga quaerat fugit nisi
          dignissimos molestias quibusdam. Sequi nihil quis nam corporis? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          perferendis repellendus temporibus doloremque fuga quaerat fugit nisi
          dignissimos molestias quibusdam. Sequi nihil quis nam corporis?
        </p>
      </div>

      <div className="SpotZone_contour">
        <div className="spotZone_workcard_container">
          <div>
            {Datas.map((data, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <SpotCard className="SpotCard_content" key={index} data={data} />
            ))}
          </div>
        </div>
      </div>

      <section className="containeer_picture_bottom_spotzone">
        <img
          className="picture_bottom_SpotZone"
          src={PictureBottom}
          alt="pictureBottomLefty"
        />

        <img
          className="picture_bottom_SpotZone pbSpotZone_Inverse"
          src={PictureBottom}
          alt="pictureBottomRight"
        />
      </section>
    </section>
  );
}

export default SpotZone;
