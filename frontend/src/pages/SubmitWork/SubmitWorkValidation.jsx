import "./submitWork.css";

function SubmitWorkValidation() {
  return (
    <section className="blockValidation">
      <h1 className="titleSubmitWork">propose a work</h1>
      <div className="blocImportImage">
        <div className="importImageInside">
          <p>add photo</p>
        </div>
      </div>
      <div className="inputLocation">
        location
        <label htmlFor="location">
          <input className="caseLocation" type="text" id="location" />
        </label>
        <div className="inputArtiste">
          artiste
          <label htmlFor="artiste">
            <input className="caseArtiste" type="text" id="artiste" />
          </label>
        </div>
      </div>
      <div className="Button-SubmitWork">
        <h3 className="Button-Validation">submit</h3>
      </div>
    </section>
  );
}

export default SubmitWorkValidation;
