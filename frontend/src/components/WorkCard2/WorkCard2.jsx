import "./workCard2.css";

function WorkCard2({ data }) {
  const { image, entry } = data;
  return (
    <section className="workCard2_container">
      <div className="workCard2_content">
        <img className="Work2_image" src={image} alt="work" />
        <div className="work2_infos_container">
          <p className="work2_info"> entry:{entry} </p>
        </div>
      </div>
    </section>
  );
}

export default WorkCard2;
