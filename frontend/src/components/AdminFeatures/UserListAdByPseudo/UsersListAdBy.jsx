/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Container } from "@mui/material";
import formatDate from "../../../utils/FormatDate";
import "./usersListAdBy.css";
import OtherUserBloc from "../../OtherUserBloc/OtherUserBloc";

function UsersListAdBy({ sortedUsers, setUserData }) {
  const updateUserList = (deletedUserId) => {
    const updatedUsers = sortedUsers.filter(
      (user) => user.id !== deletedUserId
    );
    setUserData(updatedUsers);
  };

  // state pagination table //
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedUsers.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const totalFilteredUsersPages = Math.ceil(sortedUsers.length / itemsPerPage);
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
    <>
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
            <td className="UsersList_Td_ULAF">
              {formatDate(user.registrationDate)}
            </td>
          </tr>
        ))}
      </table>
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
                handleClose={handleClose}
                updateUserList={updateUserList}
                className="OtherUserModal"
              />
            )}
          </Container>
        </Box>
      </Modal>
    </>
  );
}

export default UsersListAdBy;
