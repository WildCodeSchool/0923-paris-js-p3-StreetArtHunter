/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./adminProfil.css";
import "./adminProfilMediaDeskTop.css";
import DataWorks from "../../../data_sample/data_works.json";
import WorkCard from "../../components/WorkCard/WorkCard";
import WorkCard2 from "../../components/WorkCard2/WorkCard2";
import UserListAdminFeat from "../../components/AdminFeatures/UserListAdminFeat/UserListAdminFeat";
import WorksListAdminFeat from "../../components/AdminFeatures/WorksListAdminFeat/WorksListAdminFeat";
import ValidationAdminFeat from "../../components/AdminFeatures/ValidationAdminFeat/ValidationAdminFeat";

function AdminProfil() {
  // Toggle Admin Profil Info //
  const [adminInfoIsOpen, setAdminInfoIsOpen] = useState(false);

  const toggleAdminInfo = () => {
    setAdminInfoIsOpen(!adminInfoIsOpen);
  };
  // Toggle historical Info //
  const [adminHistoricalIsOpen, setAdminHistoricalIsOpen] = useState(false);

  const toggleAdminHistorical = () => {
    setAdminHistoricalIsOpen(!adminHistoricalIsOpen);
  };

  // simulation de données perso de la l'admin //

  const bigJuliusData = DataWorks.filter(
    (work) => work.user_sub === "Big_Julius"
  );
  const bjWorkscount = bigJuliusData.length;

  // pagination historical //
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;

  const handlePageChange = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = bigJuliusData.slice(indexOfFirstItem, indexOfLastItem);

  // Toggle Admin feature //
  const [activeComponent, setActiveComponent] = useState("usersList");

  const handleToggle = (id) => {
    setActiveComponent(id);
  };
  // gestion Media Screen //
  const smartphoneScreen = window.matchMedia("(max-width: 770px)").matches;
  const desktopScreen = window.matchMedia("(min-width: 1440px)").matches;

  return (
    <section className="AdminProfilContainer">
      <div className="AdminProfil_content">
        <section className="admin_infos_bloc">
          <h1 className="Pseudo_admin">PSEUDO ADMIN</h1>
          <div className="Seniority_admin_container">
            <p className="Seniority_admin"> admin from 22/11/2022 </p>
          </div>
          {smartphoneScreen && (
            <div className="ProfilInfos_container_admin">
              <div className="admin_title_box">
                <h2 className="ProfilInfos_title_admin">profil infos</h2>
                {!adminInfoIsOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="35"
                    viewBox="0 -960 960 960"
                    width="35"
                    className="arrow_toggle_admin"
                    id="btn_Profil_Info_admin_open"
                    onClick={toggleAdminInfo}
                  >
                    <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="35"
                    viewBox="0 -960 960 960"
                    width="35"
                    className="arrow_toggle_admin"
                    id="btn_Profil_Info_admin_closed"
                    onClick={toggleAdminInfo}
                  >
                    <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                  </svg>
                )}
              </div>
              {adminInfoIsOpen && (
                <div className="Profil_infos_content_admin">
                  <p className="admin_infos">email: exemple@gmail.com</p>
                  <p className="admin_infos">password: ******</p>
                  <div className="admin_infos_btn">
                    <p className="text_admin_infos_btn">change password</p>
                  </div>
                </div>
              )}
            </div>
          )}
          {desktopScreen && (
            <div className="ProfilInfos_container_admin">
              <div className="Profil_infos_content_admin">
                <div className="admin_infos_container">
                  <p className="admin_infos">
                    email:{" "}
                    <span className="admin_infos_desk_font">
                      exemple@gmail.com
                    </span>
                  </p>
                  <p className="admin_infos">
                    password:{" "}
                    <span className="admin_infos_desk_font">******</span>
                  </p>
                </div>
                <div className="admin_infos_btn">
                  <p className="text_admin_infos_btn">change password</p>
                </div>
              </div>
            </div>
          )}
          {smartphoneScreen && (
            <div className="history_container_admin">
              <div className="admin_history_title_box">
                <h2 className="history_title_admin">historical</h2>
                {!adminHistoricalIsOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="35"
                    viewBox="0 -960 960 960"
                    width="35"
                    className="arrow_toggle_admin"
                    id="btn_Profil_Info_admin_open"
                    onClick={toggleAdminHistorical}
                  >
                    <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="35"
                    viewBox="0 -960 960 960"
                    width="35"
                    className="arrow_toggle_admin"
                    id="btn_Profil_Info_admin_closed"
                    onClick={toggleAdminHistorical}
                  >
                    <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                  </svg>
                )}
              </div>
              {adminHistoricalIsOpen && (
                <>
                  <div className="historyWorkSubmit_admin">
                    works submitted :
                    <span className="font_info_color"> {bjWorkscount}</span>
                  </div>
                  <div className="admin_workcard_container">
                    {bigJuliusData.map((data, index) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <WorkCard key={index} data={data} />
                    ))}
                  </div>
                  <hr className="dashed_line_admin" />
                  <div className="admin_trash_btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="35"
                      viewBox="0 -960 960 960"
                      width="35"
                    >
                      <path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z" />
                    </svg>
                  </div>
                </>
              )}
            </div>
          )}
          {desktopScreen && (
            <div className="history_container_admin">
              <div className="admin_history_title_box">
                <h2 className="history_title_admin">historical</h2>
              </div>
              <div className="history_admin_content">
                <div className="historyWorkSubmit_admin">
                  works submitted :
                  <span className="font_info_color"> {bjWorkscount}</span>
                </div>
                <div className="admin_workcard_container">
                  {bigJuliusData.map((data, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <WorkCard2 key={index} data={data} />
                  ))}
                </div>
              </div>
              {/* Pagination */}
              {currentItems.length > itemsPerPage && (
                <Stack spacing={0} mt={0}>
                  <Pagination
                    count={Math.ceil(currentItems.length / itemsPerPage)}
                    size="small"
                    shape="rounded"
                    variant="outlined"
                    siblingCount={0}
                    page={currentPage}
                    onChange={handlePageChange}
                  />
                </Stack>
              )}
            </div>
          )}
        </section>
        <section className="admin_features">
          <div className="Line_BtnToggle_adminFeat">
            <div
              className={`BtnToggle_adminFeat ${
                activeComponent === "usersList" ? "active" : ""
              }`}
              onClick={() => handleToggle("usersList")}
              id="usersList_admin"
            >
              users list
            </div>
            <div
              className={`BtnToggle_adminFeat ${
                activeComponent === "worksList" ? "active" : ""
              }`}
              id="worksList_admin"
              onClick={() => handleToggle("worksList")}
            >
              works list
            </div>
            <div
              className={`BtnToggle_adminFeat ${
                activeComponent === "workValidation" ? "active" : ""
              }`}
              id="workValidation_admin"
              onClick={() => handleToggle("workValidation")}
            >
              validation
            </div>
          </div>
          {activeComponent === "usersList" && <UserListAdminFeat />}
          {activeComponent === "worksList" && <WorksListAdminFeat />}
          {activeComponent === "workValidation" && <ValidationAdminFeat />}
        </section>
      </div>
    </section>
  );
}
export default AdminProfil;
