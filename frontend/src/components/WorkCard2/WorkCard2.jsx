/* eslint-disable react/jsx-boolean-value */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import "./workCard2.css";
import WorkCardBloc from "../WorkCardBloc/WorkCardBloc";

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
      <section className="workCard2_container" onClick={openModal}>
        <div className="workCard2_content">
          <img className="Work2_image" src={data.image} alt="work" />
          <div className="work2_infos_container">
            <p className="work2_info"> {data.entry} </p>
          </div>
        </div>
      </section>
      {selectedWork && (
        <Modal open={true} onClose={closeModal} className="WorkBlockModal">
          <Box>
            <Container maxWidth="lg">
              <div className="modal_closed_btn_container">
                <p onClick={closeModal} className="modal_closed_btn">
                  X closed
                </p>
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
