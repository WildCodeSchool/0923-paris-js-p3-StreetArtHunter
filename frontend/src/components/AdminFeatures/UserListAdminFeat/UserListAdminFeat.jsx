import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./userListAdminFeat.css";
import DataUsers from "../../../../data_sample/data_users.json";
import SmileySearch from "../../../assets/images/ico/smilley.png";

function UserListAdminFeat() {
  // database //
  const data = DataUsers;
  const UsersCount = data.length;

  // state pagination table //
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // state modal //
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // >>> return <<< //
  return (
    <section className="ULAF_container">
      <div className="searchBar_ULAF_container">
        <input
          type="text"
          placeholder="Who are we looking ?"
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
          <table className="UsersList_Table_ULAF">
            {currentItems.map((users, index) => (
              <tr
                onClick={handleOpen}
                className="UsersList_Tr_ULAF"
                key={users.id}
              >
                <td className="UsersList_Td_ULAF">
                  {(currentPage - 1) * itemsPerPage + index + 1}
                </td>
                <td className="UsersList_Td_ULAF">{users.pseudo}</td>
                <td className="UsersList_Td_ULAF">{users.score}</td>
                <td className="UsersList_Td_ULAF">{users.registration}</td>
              </tr>
            ))}
          </table>
          {/* Pagination table */}
          <Stack spacing={2} mt={2}>
            <Pagination
              count={Math.ceil(data.length / itemsPerPage)}
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
          <div> THIS IS MODAL IN PROGRESS</div>
        </Box>
      </Modal>
    </section>
  );
}

export default UserListAdminFeat;
