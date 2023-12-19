import "./workCard.css";
import WorkCardBloc1 from "../WorkCardBloc1/WorkCardBloc1";
import Map from "../Map/Map";

function WorkCard() {
  return (
    <main className="workCard_container">
      <WorkCardBloc1 />
      <Map />
    </main>
  );
}

export default WorkCard;
