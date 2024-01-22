import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import WorkCard from "../../components/WorkCard/WorkCard";
import WorkCard2 from "../../components/WorkCard2/WorkCard2";
import PictureMap from "../../assets/images/map_sample/map_sample_1-1.jpg";
import DataWorks from "../../../data_sample/data_works.json";
import DataCity from "../../../data_sample/data_spots.json";
import "./spotZoneById.css";

function SpotZoneById() {
  // const Datas = DataWorks;
  const [filteredData, setFilteredData] = useState([]);
  const [dataCity, setDataCity] = useState(null);
  const { location } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const filteredWorks = DataWorks.filter(
      (data) => data.location === location
    );
    const filterPresentCity = DataCity.find(
      (data) => data.location === location
    );
    setDataCity(filterPresentCity);
    setFilteredData(filteredWorks);
  }, [location]);

  // Logique pagination Smartphone
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;
  const handlePageChange = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Logique pagination Desktop

  const [currentPageDesktop, setCurrentPageDesktop] = useState(1);
  const itemsPerPageDesktop = 6;
  const countDesktopPages = Math.ceil(
    filteredData.length / itemsPerPageDesktop
  );
  const handlePageChangeDesktop = (event, pageNumberDesktop) => {
    setCurrentPageDesktop(pageNumberDesktop);
  };

  const indexOfLastItemDesktop = currentPageDesktop * itemsPerPageDesktop;
  const indexOfFirstItemDesktop = indexOfLastItemDesktop - itemsPerPageDesktop;
  const currentItemsDesktop = filteredData.slice(
    indexOfFirstItemDesktop,
    indexOfLastItemDesktop
  );

  // Gestion Media Screen //

  const smartphoneScreen = window.matchMedia("(min-width: 320px)").matches;
  const desktopScreen = window.matchMedia("(min-width: 1440px)").matches;
  return (
    <section className="spotZoneById Global_height">
      {smartphoneScreen && (
        <div className="Global_container_Smartphone">
          <div className="smartphone_content">
            <h1 className="Title_SpotZoneById">{location}</h1>
            <div className="text_SpotZoneByid">
              <p>{dataCity?.presentation}</p>
            </div>
            <hr className="dashed_line_SpotZone" />
            <div className="Pagination_SpotZone_Smartphone">
              <Stack spacing={0} mt={0}>
                <Pagination
                  count={filteredData.length}
                  size="small"
                  shape="rounded"
                  variant="outlined"
                  siblingCount={0}
                  page={currentPage}
                  onChange={handlePageChange}
                />
              </Stack>
            </div>
            <div className="works_city_zone_container_Smartphone">
              <div className="content_Work_City_Zone">
                {currentItems.map((data, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <WorkCard key={index} data={data} />
                ))}
              </div>
            </div>

            <div className="picture_map_container">
              <img
                className="picture_SpotZoneById"
                src={PictureMap}
                alt="pictureOne"
              />
            </div>
            <div
              className="Button-Back-Spotzone"
              role="button"
              onClick={() => {
                navigate("/spotzone");
              }}
              onKeyDown={() => {
                navigate("/spotzone");
              }}
              tabIndex="0"
            >
              BACK
            </div>
          </div>
        </div>
      )}

      {desktopScreen && (
        <div className="spotZoneById">
          <div className="spotZoneIDContent">
            <div className="city_zone_container">
              <h1 className="Title_SpotZoneById">{location}</h1>
              <div className="picture_map_container">
                <img
                  className="picture_SpotZoneById"
                  src={PictureMap}
                  alt="pictureOne"
                />
              </div>
              <div className="text_SpotZoneByid">
                <p>{dataCity?.presentation}</p>
              </div>
              <div
                className="Button-Back-Spotzone"
                role="button"
                onClick={() => {
                  navigate("/spotzone");
                }}
                onKeyDown={() => {
                  navigate("/spotzone");
                }}
                tabIndex="0"
              >
                BACK
              </div>
            </div>

            <div className="Global_container_desktop">
              <div className="works_city_zone_container_Desktop">
                <div className="content_Work_City_Zone">
                  {currentItemsDesktop.map((data, index) => (
                    <WorkCard2
                      className="Workcard_SpotZone_Desktop"
                      // eslint-disable-next-line react/no-array-index-key
                      key={index}
                      data={data}
                    />
                  ))}
                </div>
              </div>
              <Stack spacing={0} mt={0}>
                <Pagination
                  className="Pagination_SpotZone_Desktop"
                  count={countDesktopPages}
                  size="small"
                  shape="rounded"
                  variant="outlined"
                  siblingCount={0}
                  page={currentPageDesktop}
                  onChange={handlePageChangeDesktop}
                />
              </Stack>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default SpotZoneById;
