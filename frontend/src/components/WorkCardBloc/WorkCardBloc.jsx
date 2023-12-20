import "./workCardBloc.css";
import WorkCard from "../WorkCard/WorkCard";
import Map from "../Map/Map";
import BlackCross from "../../assets/images/img/aerosol03.png";

function workCardBloc() {
  return (
    <section>
      <div className="workCardBloc_container">
        <div className="closed_btn_WCB_container">
          <img
            className="closed_btn_WCB"
            src={BlackCross}
            alt="closed button"
          />
        </div>
        <div className="workCardBloc_content">
          <WorkCard />
          <Map />
        </div>
      </div>
    </section>
  );
}

export default workCardBloc;
