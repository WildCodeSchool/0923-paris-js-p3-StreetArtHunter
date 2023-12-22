import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ratLeft from "../../assets/images/img/ratPhotoLeft.png";
import ratRight from "../../assets/images/img/ratPhotoRight.png";
import "./submitWork.css";

function SubmitWorkImport() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const handleFileChange = (e) => {
    const image = e.target.files[0];
    setSelectedImage(image);
  };
  return (
    <section className="centered">
      <div className="Picture_DesKtop_Submit">
        <img className="Rat_Picture_Submit_left" src={ratLeft} alt="ratLeft" />
      </div>
      <div className="title_Image">
        <div className="titleSubmitWork">propose a work</div>
        <div className="blocImportImage">
          <div className="importImageInside">
            <label htmlFor="fileInput">
              <svg
                className="importImagePhoto"
                xmlns="http://www.w3.org/2000/svg"
                height="82.07px"
                viewBox="0 -960 960 960"
                width="82.07px"
              >
                <path d="M480-260q75 0 127.5-52.5T660-440q0-75-52.5-127.5T480-620q-75 0-127.5 52.5T300-440q0 75 52.5 127.5T480-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM160-120q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h126l74-80h240l74 80h126q33 0 56.5 23.5T880-680v480q0 33-23.5 56.5T800-120H160Zm0-80h640v-480H638l-73-80H395l-73 80H160v480Zm320-240Z" />
              </svg>
              <h2 className="titleImportImage ">import an image</h2>
            </label>
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            {selectedImage && <p>Selected file: {selectedImage.name}</p>}
          </div>
        </div>
        <div
          className="Button-SubmitWork"
          role="button"
          onClick={() => {
            navigate("/submitworkvalidation");
          }}
          onKeyDown={() => {
            navigate("/submitworkvalidation");
          }}
          tabIndex="0"
        >
          <h3 className="Button-Validation">validation</h3>
        </div>
      </div>

      <div className="Picture_DesKtop_Submit">
        <img
          className="Rat_Picture_Submit_right"
          src={ratRight}
          alt="ratRight"
        />
      </div>
    </section>
  );
}

export default SubmitWorkImport;