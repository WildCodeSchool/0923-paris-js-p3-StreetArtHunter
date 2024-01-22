/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Container } from "@mui/material";
import OtherUserBloc from "../../OtherUserBloc/OtherUserBloc";
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

  // state pagination table //
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const totalFilteredUsersPages = Math.ceil(
    filteredUsers.length / itemsPerPage
  );

  // User props Modal //
  const [selectedUser, setSelectedUser] = useState(null);

  // state modal //
  const [open, setOpen] = useState(false);
  const handleOpen = (userData) => {
    setSelectedUser(userData);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

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
          {search === "" && (
            <table className="UsersList_Table_ULAF">
              {currentItems.map((user, index) => (
                <tr
                  onClick={() => handleOpen(user)}
                  className="UsersList_Tr_ULAF"
                  key={user.id}
                >
                  <td className="UsersList_Td_ULAF">
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </td>
                  <td className="UsersList_Td_ULAF">{user.pseudo}</td>
                  <td className="UsersList_Td_ULAF">{user.score}</td>
                  <td className="UsersList_Td_ULAF">{user.registration}</td>
                </tr>
              ))}
            </table>
          )}
          {search !== "" && (
            <table className="UsersList_Table_ULAF">
              {filteredUsers.map((user, index) => (
                <tr
                  onClick={() => handleOpen(user)}
                  className="UsersList_Tr_ULAF"
                  key={user.id}
                >
                  <td className="UsersList_Td_ULAF">
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </td>
                  <td className="UsersList_Td_ULAF">{user.pseudo}</td>
                  <td className="UsersList_Td_ULAF">{user.score}</td>
                  <td className="UsersList_Td_ULAF">{user.registration}</td>
                </tr>
              ))}
            </table>
          )}
          {/* Pagination table */}
          <Stack spacing={2} mt={2}>
            <Pagination
              count={totalFilteredUsersPages}
              size="small"
              shape="rounded"
              variant="outlined"
              siblingCount={0}
              page={currentPage}
              onChange={handlePageChange}
            />
          </Stack>
        </section>
      </section>

      <Modal open={open} onClose={handleClose}>
        <Box>
          <Container maxWidth="lg">
            <div className="modal_closed_btn_container">
              <p onClick={handleClose} className="modal_closed_btn">
                X closed
              </p>
            </div>
            {selectedUser && (
              <OtherUserBloc
                dataUser={selectedUser}
                className="OtherUserModal"
              />
            )}
          </Container>
        </Box>
      </Modal>
    </section>
  );
}

export default UserListAdminFeat;
