import "./adminProfil.css";
import WorkCard from "../../components/WorkCard/WorkCard";
import UserListAdminFeat from "../../components/AdminFeatures/UserListAdminFeat/UserListAdminFeat";

function AdminProfil() {
  return (
    <section className="AdminProfilContainer">
      <h1 className="Pseudo_admin">PSEUDO ADMIN</h1>
      <div className="Seniority_admin_container">
        <p className="Seniority_admin"> admin from 22/11/2022 </p>
      </div>
      <div className="ProfilInfos_container_admin">
        <div className="admin_title_box">
          <h2 className="ProfilInfos_title_admin">profil infos</h2>
        </div>
        <div className="Profil_infos_content_admin">
          <p className="admin_infos">email: exemple@gmail.com</p>
          <p className="admin_infos">password: ******</p>
          <div className="admin_infos_btn">
            <p className="text_admin_infos_btn">change password</p>
          </div>
        </div>
      </div>
      <div className="history_container_admin">
        <div className="admin_history_title_box">
          <h2 className="history_title_admin">historical</h2>
        </div>
        <div className="historyWorkSubmit_admin"> works submitted : 34 </div>
        <div className="admin_workcard_container">
          <WorkCard />
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
      </div>
      <section className="admin_features">
        <div className="Line_BtnToggle_adminFeat">
          <div className="BtnToggle_adminFeat" id="usersList_admin">
            {" "}
            users list
          </div>
          <div className="BtnToggle_adminFeat" id="worksList_admin">
            works list
          </div>
          <div className="BtnToggle_adminFeat" id="workValidation_admin">
            {" "}
            validation
          </div>
        </div>
        <UserListAdminFeat />
      </section>
    </section>
  );
}
export default AdminProfil;
