/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, useEffect } from "react";
import UsersListAdBy from "../UserListAdByPseudo/UsersListAdBy";
import SmileySearch from "../../../assets/images/ico/smilley.png";
import "./userListAdminFeat.css";
import "./userListAdminFeatMediaDesktop.css";

function UserListAdminFeat() {
  // database //
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user`, {
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  // search bar //
  const [search, setSearch] = useState("");

  const handleTyping = (e) => {
    let { value } = e.target;
    value = value.replace(/-/g, "").toLowerCase();
    setSearch(value);
  };

  const filteredUsers = userData.filter((dataItem) =>
    dataItem.pseudo
      .toString()
      .toLowerCase()
      .replace(/-/g, "")
      .includes(search.toLowerCase())
  );

  // UserCounter
  const UsersCount = filteredUsers.length;

  // users alphabetical sorted //
  const userAlphabeticalSorted = userData
    .slice()
    .sort((a, b) => a.pseudo.localeCompare(b.pseudo));

  // users score sorted //
  const userScoreSorted = userData.sort((a, b) => b.score - a.score);

  // users score sorted //
  const userEntrySorted = userData.slice().sort((a, b) => {
    const dateA = new Date(a.registrationDate);
    const dateB = new Date(b.registrationDate);

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
              setUserData={(updatedUsers) => {
                setUserData(updatedUsers);
              }}
            />
          )}
          {search !== "" && (
            <UsersListAdBy
              sortedUsers={filteredUsers}
              setUserData={(updatedUsers) => {
                setUserData(updatedUsers);
              }}
            />
          )}
        </section>
      </section>
    </section>
  );
}

export default UserListAdminFeat;
