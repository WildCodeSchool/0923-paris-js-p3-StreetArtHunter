import "./workCard.css";
import imgTest from "../../assets/images/img_sample/20231203_143211.jpg";

function WorkCard() {
  return (
    <section className="workCard_container">
      <div className="workCard_content">
        <img className="Work_image" src={imgTest} alt="test_image" />
        <div className="work_infos_container">
          <p className="work_info"> entry: </p>
          <p className="work_info"> zone: </p>
          <p className="work_info"> loc: </p>
          <p className="work_info"> localisation: </p>
          <p className="work_info"> artist: </p>
          <p className="work_info"> submitted by: </p>
        </div>
      </div>
    </section>
  );
}

export default WorkCard;
