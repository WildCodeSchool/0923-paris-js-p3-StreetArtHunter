/* eslint-disable no-shadow */
import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./worksListAdminFeat.css";
import DataWorks from "../../../../data_sample/data_works.json";
import WorkCard from "../../WorkCard/WorkCard";

function WorksListAdminFeat() {
  const data = DataWorks;

  // Works Count - only the validate //
  const validatedWorks = data.filter((work) => work.validation === "true");
  const validatedWorksCount = validatedWorks.length;

  // unique location for Zone <option> //
  const uniqueLocations = Array.from(
    new Set(data.map((item) => item.location))
  );
  // pagination work card //
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1; // Nombre d'éléments par page

  const handlePageChange = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <section className="WLAF_container">
      <div className="works_count_WLAF">
        works : <span className="font_info_color">{validatedWorksCount}</span>
      </div>
      <div className="WLAF_choice_line">
        <div className="WLAF_choice_btn">entry </div>
        <div>
          <select className="WLAF_location_option">
            <option value="">location</option>
            {uniqueLocations.map((location, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="WLAF_workcard_container">
        {currentItems.map((data) => (
          <WorkCard key={data.id} data={data} />
        ))}
      </div>
      {/* Pagination */}
      {data.length > itemsPerPage && (
        <Stack spacing={0} mt={0}>
          <Pagination
            count={Math.ceil(data.length / itemsPerPage)}
            size="small"
            shape="rounded"
            variant="outlined"
            siblingCount={0}
            page={currentPage}
            onChange={handlePageChange}
          />
        </Stack>
      )}
      <hr className="WLAF_dashed_line" />
      <div className="WLAF_trash_btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="35"
          viewBox="0 -960 960 960"
          width="35"
        >
          <path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z" />
        </svg>
      </div>
    </section>
  );
}

export default WorksListAdminFeat;
