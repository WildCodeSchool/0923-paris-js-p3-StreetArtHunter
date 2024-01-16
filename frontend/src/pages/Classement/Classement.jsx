/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Container } from "@mui/material";
import "./classement.css";
import OtherUserBloc from "../../components/OtherUserBloc/OtherUserBloc";
import DataUsers from "../../../data_sample/data_users.json";
import MostWanted from "../../assets/images/img/Most_Wanted.png";
import SmileySearch from "../../assets/images/img/smilley.png";
import Fissure from "../../assets/images/img/fissures3.png";
import Crown from "../../assets/images/img/crown.png";

function Classement() {
  // database //
  const data = DataUsers;

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

  return (
    <section className="Classement_section Global_height">
      <div className="fissure_Classement">
        <img src={Fissure} alt="fissure" className="fissure" />
      </div>

      <div className="Classement_bloc">
        <img src={Crown} alt="Crown" className="Crown" />
        <h1 className="Classement_Title">hunterz Classement</h1>

        <img src={MostWanted} alt="Most Wanted" className="Most_Wanted" />

        <div className="searchBar_Classement_container">
          <input
            type="text"
            value={search}
            onChange={handleTyping}
            placeholder="Who are we looking for ?"
            className="searchBar_Classement"
          />
          <img
            src={SmileySearch}
            alt="Smiley Search"
            className="Smiley_Search_Classement"
          />
        </div>

        <section className="Users_List_Classement">
          {search === "" && (
            <table className="UsersList_Table_Classement">
              {currentItems.map((user, index) => (
                <tr
                  onClick={() => handleOpen(user)}
                  className="UsersList_Tr_Classement"
                  key={user.id}
                >
                  <td className="UsersList_Td_Classement">
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </td>
                  <td className="UsersList_Td_Classement">{user.pseudo}</td>
                  <td className="UsersList_Td_Classement">{user.score}</td>
                  <td className="UsersList_Td_Classement">
                    {user.registration}
                  </td>
                </tr>
              ))}
            </table>
          )}
          {search !== "" && (
            <table className="UsersList_Table_Classement">
              {filteredUsers.map((user, index) => (
                <tr
                  onClick={() => handleOpen(user)}
                  className="UsersList_Tr_Classement"
                  key={user.id}
                >
                  <td className="UsersList_Td_Classement">
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </td>
                  <td className="UsersList_Td_Classement">{user.pseudo}</td>
                  <td className="UsersList_Td_Classement">{user.score}</td>
                  <td className="UsersList_Td_Classement">
                    {user.registration}
                  </td>
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
      </div>
      <div className="fissure_Classement">
        <img src={Fissure} alt="fissure" className="fissure fissure_left" />
      </div>
    </section>
  );
}

export default Classement;
