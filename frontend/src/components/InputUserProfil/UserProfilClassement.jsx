/* eslint-disable no-use-before-define */
/* eslint-disable prefer-destructuring */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { toast } from "react-toastify";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import OtherUserBloc from "../OtherUserBloc/OtherUserBloc";
import imageMonkey from "../../assets/images/img/monkey02.png";
import SmileySearch from "../../assets/images/ico/smilley.png";
import AuthContext from "../../context/AuthContext";
import formatDate from "../../utils/FormatDate";
import assignLevel from "../../utils/AssignLevel";
import "react-toastify/dist/ReactToastify.css";
import "./userProfil.css";

function UserProfilClassement() {
  const navigate = useNavigate();
  // database //
  const { user } = useContext(AuthContext);

  const [userClass, setUserClass] = useState([]);
  const [userLevel, setUserLevel] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/user`,
        {
          credentials: "include",
        }
      );

      if (response.status === 200) {
        const data = await response.json();
        setUserClass(data);

        // Set user level once when component mounts
        const level = assignLevel(user.score);
        setUserLevel(level);
      }
    };
    fetchData();
  }, [user.score]);

  // search bar //
  const [search, setSearch] = useState("");

  const handleTyping = (e) => {
    let { value } = e.target;
    value = value.replace(/-/g, "").toLowerCase();
    setSearch(value);
  };

  const filteredUsers = userClass.filter((dataItem) =>
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
  const currentItems = userClass.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const totalFilteredUsersPages = Math.ceil(
    filteredUsers.length / itemsPerPage
  );

  // gestion modal password
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [newPassword, setNewPassword] = useState("");
  const handleClose = () => setOpen(false);
  const [open2, setOpen2] = useState(false);

  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  // User props Modal //
  const [selectedUser, setSelectedUser] = useState(null);

  // state modal //
  const [open, setOpen] = useState(false);
  const handleOpen = (userData) => {
    setSelectedUser(userData);
    setOpen(true);
  };
  // Format date object:
  const formattedDate = formatDate(user?.registrationDate);

  // Function to handle the "Enter" key being pressed in the input field
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      changePassword(event);
    }
  };
  // change password //
  const changePassword = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/changePassword`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            newPassword,
          }),
          credentials: "include",
        }
      );
      if (response.status === 204) {
        console.info("Password changed successfully.");
        toast.success("password changed");
        handleClose2(); // Fermer la modal après la modification
      } else {
        console.error("Failed to change password.", response.statusText);
      }
    } catch (error) {
      console.error("Error changing password", error);
      toast.danger("Error changing password");
    }
  };

  return (
    <section className="UP_Container Global_height">
      <div className="UP_Content">
        <div className="UP_Part1_Flex">
          <div className="UP_Title_PseudoName">{user?.pseudo}</div>
          <div className="UP_Level_Score">
            <div className="UP_Title_Level">level: {userLevel}</div>
            <div className="UP_Title_Score">score: {user?.score}</div>
          </div>
          <div className="UP_Email_Password">
            <div className="Block_Email_Password">
              <p>email: {user?.email}</p>
              <p>password: ********</p>
            </div>
            <div className="UP_Change_Password">
              <div
                className="UP_Change_Password_Inside"
                onClick={handleOpen2}
                role="button"
                tabIndex="0"
              >
                <p>change password</p>
              </div>
            </div>
          </div>
          <div className="UP_Register_Since">
            register since: {formattedDate}
          </div>
          <div className="UP_Image_Monkey_Center">
            <img
              className="UP_Image_Monkey"
              src={imageMonkey}
              alt="imageMoney"
            />
          </div>
        </div>
      </div>
      <div className="UP_Content">
        <div className="UP_Part2_Flex">
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
                            {formatDate(users.registrationDate)}
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
                            {formatDate(users.registrationDate)}
                          </td>
                        </tr>
                      ))}
                    </table>
                  )}
                </section>
              </div>
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
        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              overflow: "auto",
              width: "100%",
              maxHeight: "80%",
            }}
          >
            <Container maxWidth="lg">
              <div className="modal_closed_btn_container">
                <p onClick={handleClose} className="modal_closed_btn">
                  X closed
                </p>
              </div>
              <OtherUserBloc
                dataUser={selectedUser}
                className="OtherUserModal"
              />
            </Container>
          </Box>
        </Modal>
      </div>
      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <section className="password_change_container_UP">
            <h1 className="password_change_title">CHANGE YOUR PASSWORD</h1>
            <input
              type="password"
              className="password_change_placeholder_UP"
              placeholder="enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <div
              className="password_change_validbtn_UP"
              onClick={changePassword}
              onKeyDown={handleKeyDown}
              role="button"
              tabIndex="0"
            >
              VALIDATION
            </div>
          </section>
        </Box>
      </Modal>
    </section>
  );
}

export default UserProfilClassement;
