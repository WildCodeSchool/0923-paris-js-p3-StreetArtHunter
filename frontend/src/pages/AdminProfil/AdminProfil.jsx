import "./adminProfil.css";
import WorkCard from "../../components/WorkCard/WorkCard";

function AdminProfil() {
  return (
    <section className="AdminProfilContainer">
      <h1 className="Pseudo_admin">PSEUDO ADMIN</h1>
      <div className="Seniority_admin_container">
        <p className="Seniority_admin"> ADMIN FROM 22/11/2022 </p>
      </div>
      <div className="ProfilInfos_container_admin">
        <div className="admin_title_box">
          <h2 className="ProfilInfos_title_admin">PROFIL INFOS</h2>
        </div>
        <div className="Profil_infos_content_admin">
          <p className="admin_infos">EMAIL: exemple@gmail.com</p>
          <p className="admin_infos">PASSWORD: ******</p>
          <div className="admin_infos_btn">
            <p className="text_admin_infos_btn">change password</p>
          </div>
        </div>
      </div>
      <div className="history_container_admin">
        <div className="admin_history_title_box">
          <h2 className="history_title_admin">HISTORICAL</h2>
        </div>
        <div className="historyWorkSubmit_admin"> WORK SUBMIT : 34 </div>
        <WorkCard />
      </div>
      <section className="admin_features"> </section>
    </section>
  );
}
export default AdminProfil;
