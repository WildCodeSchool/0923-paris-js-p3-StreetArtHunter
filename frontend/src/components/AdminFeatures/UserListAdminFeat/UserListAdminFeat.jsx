/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import UsersListAdBy from "../UserListAdByPseudo/UsersListAdBy";
import DataUsers from "../../../../data_sample/data_users.json";
import SmileySearch from "../../../assets/images/ico/smilley.png";
import "./userListAdminFeat.css";
import "./userListAdminFeatMediaDesktop.css";

function UserListAdminFeat() {
  // database //
  const data = DataUsers;

  const UsersCount = data.length;

  // search bar //
  const [search, setSearch] = useState("");

  const handleTyping = (e) => {
    let { value } = e.target;
    value = value.replace(/-/g, "").toLowerCase();
    setSearch(value);
  };

  const filteredUsers = data.filter((dataItem) =>
    dataItem.pseudo
      .toString()
      .toLowerCase()
      .replace(/-/g, "")
      .includes(search.toLowerCase())
  );

  // users alphabetical sorted //
  const userAlphabeticalSorted = data
    .slice()
    .sort((a, b) => a.pseudo.localeCompare(b.pseudo));

  // users score sorted //
  const userScoreSorted = data.sort((a, b) => b.score - a.score);

  // users score sorted //
  const userEntrySorted = data.slice().sort((a, b) => {
    const dateA = new Date(a.registration);
    const dateB = new Date(b.registration);

    return dateA - dateB;
  });

  // Toggle Admin feature //
  const [activeComponent, setActiveComponent] = useState("score");

  const handleToggle = (id) => {
    setActiveComponent(id);
  };

  // >>> return <<< //
  return (
    <section className="ULAF_container">
      <div className="searchBar_ULAF_container">
        <input
          type="text"
          value={search}
          onChange={handleTyping}
          placeholder="Who are we looking for ?"
          className="searchBar_ULAF"
        />
        <img
          src={SmileySearch}
          alt="Smiley Search"
          className="Smiley_Search_ULAF"
        />
      </div>
      <div className="hunters_count_ULAF">
        hunters : <span className="font_info_color">{UsersCount}</span>
      </div>
      <section className="ULAF_content">
        <div className="ULAF_toogle_Line">
          <div
            className={`ULAF_toogle ${
              activeComponent === "pseudo" ? "active" : ""
            }`}
            onClick={() => handleToggle("pseudo")}
            id="ULAF_by_pseudo"
          >
            pseudo
          </div>

          <div
            className={`ULAF_toogle ${
              activeComponent === "score" ? "active" : ""
            }`}
            onClick={() => handleToggle("score")}
            id="ULAF_by_score"
          >
            score
          </div>

          <div
            className={`ULAF_toogle ${
              activeComponent === "entry" ? "active" : ""
            }`}
            onClick={() => handleToggle("entry")}
            id="ULAF_by_entry"
          >
            entry
          </div>
        </div>
        <section className="Users_List_ULAF">
          {search === "" && (
            <UsersListAdBy
              sortedUsers={
                activeComponent === "pseudo"
                  ? userAlphabeticalSorted
                  : activeComponent === "entry"
                  ? userEntrySorted
                  : userScoreSorted
              }
            />
          )}
          {search !== "" && <UsersListAdBy sortedUsers={filteredUsers} />}
        </section>
      </section>
    </section>
  );
}

export default UserListAdminFeat;
