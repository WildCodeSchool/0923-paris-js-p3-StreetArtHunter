import "./userListAdminFeat.css";
import DataUsers from "../../../../data_sample/data_users.json";

function UserListAdminFeat() {
  const data = DataUsers;
  const UsersCount = data.length;

  return (
    <section className="ULAF_container">
      <div className="searchBar_ULAF_container">
        <input
          type="text"
          placeholder="Who are we looking ?"
          className="searchBar_ULAF"
        />
      </div>
      <div className="hunters_count_ULAF"> hunters : {UsersCount}</div>
      <section className="ULAF_content">
        <div className="ULAF_toogle_Line">
          <div className="ULAF_toogle" id="ULAF_by_pseudo">
            pseudo
          </div>
          <div className="ULAF_toogle" id="ULAF_by_score">
            score
          </div>
          <div className="ULAF_toogle" id="ULAF_by_entry">
            entry
          </div>
        </div>
        <section className="Users_List_ULAF">
          <table>
            {data.map((users) => (
              <tr key={users.id}>
                <td>{users.pseudo}</td>
                <td>{users.score}</td>
                <td>{users.registration}</td>
              </tr>
            ))}
          </table>
        </section>
      </section>
    </section>
  );
}

export default UserListAdminFeat;
