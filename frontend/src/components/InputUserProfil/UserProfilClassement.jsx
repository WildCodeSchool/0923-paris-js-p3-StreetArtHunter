/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import OtherUserBloc from "../OtherUserBloc/OtherUserBloc";
import DataUsers from "../../../data_sample/data_users.json";
import imageMonkey from "../../assets/images/img/monkey02.png";
import SmileySearch from "../../assets/images/ico/smilley.png";
import AuthContext from "../../context/AuthContext";
import "./userProfilMobile.css";
import "./userProfilDesktop.css";

function UserProfilClassement() {
  const navigate = useNavigate();
  // database //
  const data = DataUsers;
  const { user } = useContext(AuthContext);
  // const filteredUsers = data.filter((dataItem) =>
  //   dataItem.pseudo.toString().toLowerCase().replace(/-/g, "")

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

  // state pagination user list //
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
    console.info(userData);
    setSelectedUser(userData);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <section className="UP_Container Global_height">
      <div className="UP_Content">
        <div className="UPD_Part1_Flex">
          <div className="UP_Title_PseudoName">{user?.pseudo}</div>
          <div className="UPD_Email_Password_Register">
            <div className="UPM_Level_Score_Password">
              <div className="UPD_Level_Score">
                <div className="UP_Title_Level">level:</div>
                <div className="UP_Title_Score">score: {user?.score}</div>
              </div>
              <div className="UP_Email_Password">
                <div className="Block_Email_Password">
                  <p>email: {user?.email}</p>
                  <p>password:</p>
                </div>
                <div className="UP_Change_Password">
                  <p className="UP_Change_Password_Inside">change password</p>
                </div>
              </div>
              <div className="UP_Register_Since">
                register since: {user?.registration_date}
              </div>
            </div>
            <div className="UPD_Image_Monkey_Center">
              <img
                className="UPD_Image_Monkey"
                src={imageMonkey}
                alt="imageMoney"
              />
            </div>
          </div>
        </div>
        <div className="UPD_Part2_Flex">
          <div className="UP_Historical_Classement_Flex">
            <div className="UP_Historical_Classement">
              <div
                className="UP_Title_Historical2"
                role="button"
                onClick={() => {
                  navigate("/userprofilhistorical");
                }}
                onKeyDown={() => {
                  navigate("/userprofilhistorical");
                }}
                tabIndex="0"
              >
                historical
              </div>
              <div
                className="UP_Title_Classement2"
                role="button"
                onClick={() => {
                  navigate("/userprofilclassement");
                }}
                onKeyDown={() => {
                  navigate("/userprofilclassement");
                }}
                tabIndex="0"
              >
                classement
              </div>
            </div>
            {/* // */}

            <div className="UPC_Work_Submited_Classement">
              <div className="searchBar_UPC_container">
                <input
                  type="text"
                  value={search}
                  onChange={handleTyping}
                  placeholder="Who are we looking for ?"
                  className="searchBar_UPC"
                />
                <img
                  src={SmileySearch}
                  alt="Smiley Search"
                  className="Smiley_Search_UPC"
                />
              </div>
              <div className="UPC_Users_List_Td_container">
                <section className="UPC_Users_List_Table_container">
                  {search === "" && (
                    <table className="UPC_Users_List_Table">
                      {currentItems.map((users, index) => (
                        <tr
                          onClick={() => handleOpen(users)}
                          className="UPC_UsersList_Tr"
                          key={users.id}
                        >
                          <td className="UPC_Users_List_Td">
                            {(currentPage - 1) * itemsPerPage + index + 1}
                          </td>
                          <td className="UPC_Users_List_Td">{users.pseudo}</td>
                          <td className="UPC_Users_List_Td">{users.score}</td>
                          <td className="UPC_Users_List_Td">
                            {users.registration}
                          </td>
                        </tr>
                      ))}
                    </table>
                  )}
                  {search !== "" && (
                    <table className="UPC_Users_List_Table">
                      {filteredUsers.map((users, index) => (
                        <tr
                          className="UPC_UsersList_Tr"
                          onClick={() => handleOpen(users)}
                          key={users.id}
                        >
                          <td className="UPC_Users_List_Td">
                            {(currentPage - 1) * itemsPerPage + index + 1}
                          </td>
                          <td className="UPC_Users_List_Td">{users.pseudo}</td>
                          <td className="UPC_Users_List_Td">{users.score}</td>
                          <td className="UPC_Users_List_Td">
                            {users.registration}
                          </td>
                        </tr>
                      ))}
                    </table>
                  )}
                </section>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box>
          <Container maxWidth="lg">
            <div className="modal_closed_btn_container">
              <p onClick={handleClose} className="modal_closed_btn">
                X closed
              </p>
            </div>
            <OtherUserBloc dataUser={selectedUser} className="OtherUserModal" />
          </Container>
        </Box>
      </Modal>
    </section>
  );
}

export default UserProfilClassement;
