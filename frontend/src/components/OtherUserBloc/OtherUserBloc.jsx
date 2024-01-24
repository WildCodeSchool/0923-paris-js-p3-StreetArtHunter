import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import DataWorks from "../../../data_sample/data_works.json";
import WorkCard from "../WorkCard/WorkCard";
import WorkCard2 from "../WorkCard2/WorkCard2";
import SmileyDeath from "../../assets/images/img/smiley_death.png";
import WarIsMean from "../../assets/images/img/warismean.png";
import TempVisual from "../../assets/images/img/monkey03.png";
import "./otherUserBloc.css";

function OtherUserBloc({ dataUser }) {
  const [selectUser, setSelectUser] = useState([]);

  useEffect(() => {
    const userWorks = DataWorks.filter(
      (work) => work.userSub === dataUser.pseudo
    );
    setSelectUser(userWorks);
  }, []);

  const userWorkCount = selectUser.length;

  // pagination work card //
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = selectUser.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // pagination work card for desktopScreen //
  const [currentPageDesktop, setCurrentPageDesktop] = useState(1);
  const itemsPerPageDesktop = 6;

  const indexOfLastItemDesktop = currentPageDesktop * itemsPerPageDesktop;
  const indexOfFirstItemDesktop = indexOfLastItemDesktop - itemsPerPageDesktop;
  const currentItemsDesktop = selectUser.slice(
    indexOfFirstItemDesktop,
    indexOfLastItemDesktop
  );

  const handlePageChangeDesktop = (event, pageNumber) => {
    setCurrentPageDesktop(pageNumber);
  };

  // gestion Media Screen //
  const smartphoneScreen = window.matchMedia("(max-width: 770px)").matches;
  const desktopScreen = window.matchMedia("(min-width: 1440px)").matches;

  return (
    <section>
      <div className="otherUserBloc_container">
        {smartphoneScreen && (
          <div className="otherUserBloc_content">
            <div className="infos_OUB">
              <h1 className="pseudo_OUB">{dataUser.pseudo}</h1>
              <div className="Seniority_OUB">
                registered :
                <span className="font_info_color">
                  {dataUser.registration}{" "}
                </span>
              </div>
              <div className="user_info_OUB_content">
                <p className="user_info_OUB">email: {dataUser.email} </p>
                <p className="user_info_OUB">level: </p>
                <p className="user_info_OUB">score: {dataUser.score} pts</p>
              </div>
            </div>
            {userWorkCount !== 0 && (
              <div className="history_OUB">
                <div className="historyWorkSubmit_OUB">
                  works submitted :{" "}
                  <span className="font_info_color"> {userWorkCount} </span>
                </div>
                <div className="workCard_area_OUB">
                  {currentItems.map((data) => (
                    <WorkCard data={data} />
                  ))}
                </div>
                <Stack spacing={0} mt={0}>
                  <Pagination
                    count={Math.ceil(userWorkCount / itemsPerPage)}
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
            {userWorkCount === 0 && (
              <div className="history_OUB">
                <div className="historyWorkSubmit_OUB">
                  works submitted :{" "}
                  <span className="font_info_color"> {userWorkCount} </span>
                </div>
                <div className="workCard_area_OUB">
                  <img
                    src={TempVisual}
                    alt="temp"
                    className="NoWork_visual_OUB"
                  />
                </div>
              </div>
            )}
            <hr className="OUB_dashed_line" />
            <div className="OUB_trash_btn_container">
              <div className="OUB_trash_btn"> DELETE USER</div>
            </div>
          </div>
        )}
        {desktopScreen && (
          <div className="otherUserBloc_content">
            <div className="infos_OUB">
              <h1 className="pseudo_OUB">{dataUser.pseudo}</h1>

              <div className="user_info_OUB_content">
                <p className="user_info_OUB">email: {dataUser.email} </p>
                <p className="user_info_OUB">level: </p>
                <p className="user_info_OUB">score: {dataUser.score} pts</p>
              </div>

              <div className="Seniority_OUB">
                registered :
                <span className="font_info_color">
                  {dataUser.registration}{" "}
                </span>
              </div>
              {dataUser.admin && (
                <img
                  src={SmileyDeath}
                  alt="SmileyDeath"
                  className="SmileyDeath"
                />
              )}
              <div className="Flex_WarIsMean">
                <img src={WarIsMean} alt="WarIsMean" className="WarIsMean" />
                {dataUser.admin && (
                  <div className="OUB_trash_btn_container">
                    <div className="OUB_trash_btn"> DELETE USER</div>
                  </div>
                )}
              </div>
            </div>
            {userWorkCount !== 0 && (
              <div className="history_OUB">
                <div className="history_title_OUB-Desk">historical</div>

                <div className="historyWorkSubmit_OUB">
                  works submitted :
                  <span className="font_info_color"> {userWorkCount} </span>
                </div>
                <div className="workCard_area_OUB">
                  {currentItemsDesktop.map((data) => (
                    <WorkCard2 data={data} />
                  ))}
                </div>
                <Stack spacing={0} mt={0}>
                  <Pagination
                    count={Math.ceil(userWorkCount / itemsPerPageDesktop)}
                    size="small"
                    shape="rounded"
                    variant="outlined"
                    siblingCount={0}
                    page={currentPage}
                    onChange={handlePageChangeDesktop}
                  />
                </Stack>
              </div>
            )}
            {userWorkCount === 0 && (
              <div className="history_OUB">
                <div className="history_title_OUB-Desk">historical</div>

                <div className="historyWorkSubmit_OUB">
                  works submitted :
                  <span className="font_info_color"> {userWorkCount} </span>
                </div>
                <img
                  src={TempVisual}
                  alt="temp"
                  className="NoWork_visual_OUB"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default OtherUserBloc;
