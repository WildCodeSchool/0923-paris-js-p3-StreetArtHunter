import "./workCardBloc.css";
import WorkCard from "../WorkCard/WorkCard";
import Map from "../Map/Map";

function workCardBloc({ data }) {
  return (
    <section>
      <div className="workCardBloc_container">
        <div className="workCardBloc_content">
          <WorkCard data={data} />
          <Map />
        </div>
      </div>
    </section>
  );
}

export default workCardBloc;
