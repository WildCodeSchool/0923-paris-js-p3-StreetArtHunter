/* eslint-disable no-shadow */
import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./validationAdminFeat.css";
import "./validationAdminFeatMediaDesktop.css";
import DataWorks from "../../../../data_sample/data_works.json";
import WorkCard from "../../WorkCard/WorkCard";

function ValidationAdminFeat() {
  const data = DataWorks;

  // new Submits Count - only the No-validate//
  const newSubmit = data.filter((work) => work.validation === "false");
  const newSubmitCount = newSubmit.length;

  // pagination work card //
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;

  const handlePageChange = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = newSubmit.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <section className="VLAF_container">
      <div className="works_count_VLAF">
        new submits :{" "}
        <span className="font_info_color"> {newSubmitCount} </span>
      </div>
      <div className="VLAF_workcard_container">
        {currentItems.map((data) => (
          <WorkCard key={data.id} data={data} id="workCard_IAP" />
        ))}
      </div>
      {/* Pagination */}
      {data.length > itemsPerPage && (
        <Stack spacing={0} mt={0}>
          <Pagination
            count={Math.ceil(newSubmit.length / itemsPerPage)}
            size="small"
            shape="rounded"
            variant="outlined"
            siblingCount={0}
            page={currentPage}
            onChange={handlePageChange}
          />
        </Stack>
      )}
      <hr className="VLAF_dashed_line" />
      <div className="VLAF_btn_container">
        <div className="VLAF_valid_btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="35"
            viewBox="0 -960 960 960"
            width="35"
          >
            <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
          </svg>
        </div>
        <div className="VLAF_trash_btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="35"
            viewBox="0 -960 960 960"
            width="35"
          >
            <path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default ValidationAdminFeat;
