import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import WorkCardBloc from "../WorkCardBloc/WorkCardBloc";
import "./workCard2.css";

function WorkCard2({ data }) {
  const [selectedWork, setSelectedWork] = useState(null);

  const openModal = () => {
    setSelectedWork(data);
  };

  const closeModal = () => {
    setSelectedWork(null);
  };

  return (
    <>
      <section
        role="button"
        className="workCard2_container"
        onClick={() => {
          openModal();
        }}
        onKeyDown={() => {
          openModal();
        }}
        tabIndex="0"
      >
        <div className="workCard2_content">
          <img className="Work2_image" src={data.image} alt="work" />
          <div className="work2_infos_container">
            <p className="work2_info"> {data.entry} </p>
          </div>
        </div>
      </section>
      {selectedWork && (
        <Modal open onClose={closeModal} className="WorkBlockModal">
          <Box>
            <Container maxWidth="lg">
              <div className="modal_closed_btn_container">
                <div
                  role="button"
                  onClick={() => {
                    closeModal();
                  }}
                  onKeyDown={() => {
                    closeModal();
                  }}
                  tabIndex="-1"
                  className="modal_closed_btn"
                >
                  X closed
                </div>
              </div>
              <WorkCardBloc data={data} />
            </Container>
          </Box>
        </Modal>
      )}
    </>
  );
}

export default WorkCard2;
