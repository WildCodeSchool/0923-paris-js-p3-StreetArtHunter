import PictureOne from "../../assets/images/works_sample/20231203_145223.jpg";
import "./spotZone.css";

function SpotZone() {
  return (
    <section className="spotZoneContainer">
      <div>
        <h1 className="title_SpotZone">STREET ART SPOTs</h1>
      </div>
      <div className="text_SpotZone">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          perferendis repellendus temporibus doloremque fuga quaerat fugit nisi
          dignissimos molestias quibusdam. Sequi nihil quis nam corporis?
        </p>
      </div>
      <section>
        <div className="container_Content_SpotZone">
          <div className="picture_SpotZone_Container">
            <img
              className="picture_SpotZone"
              src={PictureOne}
              alt="pictureOne"
            />
            <p>Lorem</p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default SpotZone;

/*       
      <div className="dataWorksContainer">
        <div className="dataWorksRow">
          {dataWorks.map((data) => (
            <div className="dataWorkSpotZone" key={data.id}>
              <WorkCardSpotZone data={data} />
            </div>
          ))}
        </div>
      </div> */

/* <div className="picture_SpotZone_Container">
            <img
              className="picture_SpotZone"
              src={PictureTwo}
              alt="pictureTwo"
            />
            <p>Lorem</p>
          </div>
          <div className="picture_SpotZone_Container">
            <img
              className="picture_SpotZone"
              src={PictureThree}
              alt="pictureThree"
            />
            <p>Lorem</p>
          </div> */
