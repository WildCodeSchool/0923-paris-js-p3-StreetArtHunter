import "./workCard2.css";
import imgTest from "../../assets/images/img_sample/20231203_143211.jpg";

function WorkCard2() {
  return (
    <section className="workCard2_container">
      <div className="workCard2_content">
        <img className="Work2_image" src={imgTest} alt="test_image" />
        <div className="work2_infos_container">
          <p className="work2_info"> entry: </p>
        </div>
      </div>
    </section>
  );
}

export default WorkCard2;
