import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import SpotCard from "../../components/SpotCard/SpotCard";
import DataSpots from "../../../data_sample/data_spots.json";
import PictureBottom from "../../assets/images/img/graph04 (1).png";
import "./spotZone.css";

function SpotZone() {
  const Datas = DataSpots;

  // Logtique pagination smartphone
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;
  const handlePageChange = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Datas.slice(indexOfFirstItem, indexOfLastItem);

  // Logique pagination Desktop

  const [currentPageDesktop, setCurrentPageDesktop] = useState(1);
  const itemsPerPageDesktop = 4;
  const handlePageChangeDesktop = (event, pageNumberDesktop) => {
    setCurrentPageDesktop(pageNumberDesktop);
  };

  const indexOfLastItemDesktop = currentPageDesktop * itemsPerPageDesktop;
  const indexOfFirstItemDesktop = indexOfLastItemDesktop - itemsPerPageDesktop;
  const currentItemsDesktop = Datas.slice(
    indexOfFirstItemDesktop,
    indexOfLastItemDesktop
  );

  // gestion Media Screen //
  const smartphoneScreen = window.matchMedia("(min-width: 320px)").matches;
  const desktopScreen = window.matchMedia("(min-width: 1440px)").matches;

  return (
    <section className="spotZoneContainer">
      <h1 className="title_SpotZone">STREET ART SPOTS</h1>
      <div className="text_SpotZone">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          perferendis repellendus temporibus doloremque fuga quaerat fugit nisi
          dignissimos molestias quibusdam. Sequi nihil quis nam corporis? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          perferendis repellendus temporibus doloremque fuga quaerat fugit nisi
          dignissimos molestias quibusdam. Sequi nihil quis nam corporis? Lorem
          ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      {smartphoneScreen && (
        <div className="spotZone_workcard_container">
          {currentItems.map((data, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <SpotCard className="SpotCard_content" key={index} data={data} />
          ))}
        </div>
      )}
      {smartphoneScreen && (
        <div className="Pagination_SpotZone_Smartphone">
          <Stack spacing={0} mt={0}>
            <Pagination
              count={Math.ceil(Datas.length / itemsPerPage)}
              size="small"
              shape="rounded"
              variant="outlined"
              siblingCount={0}
              page={currentPage}
              onChange={handlePageChange}
            />
          </Stack>
        </div>
      )}

      {desktopScreen && (
        <>
          <div className="spotZone_workcard_container_desktop">
            {currentItemsDesktop.map((data) => (
              <SpotCard key={data.id} data={data} />
            ))}
          </div>
          <Stack spacing={0} mt={0}>
            <Pagination
              count={Math.ceil(Datas.length / itemsPerPageDesktop)}
              size="small"
              shape="rounded"
              variant="outlined"
              siblingCount={0}
              page={currentPageDesktop}
              onChange={handlePageChangeDesktop}
            />
          </Stack>
        </>
      )}
      <section className="containeer_picture_bottom_spotzone">
        <img
          className="picture_bottom_SpotZone"
          src={PictureBottom}
          alt="pictureBottomLefty"
        />

        <img
          className="picture_bottom_SpotZone pbSpotZone_Inverse"
          src={PictureBottom}
          alt="pictureBottomRight"
        />
      </section>
    </section>
  );
}

export default SpotZone;
