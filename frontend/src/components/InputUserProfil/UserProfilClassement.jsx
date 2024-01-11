import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import DataUsers from "../../../data_sample/data_users.json";
import imageMonkey from "../../assets/images/img/monkey02.png";
import "./userProfilMobile.css";
import "./userProfilDesktop.css";

function UserProfilHistorical() {
  const navigate = useNavigate();
  // database //
  const data = DataUsers;
  const userRegistration = data.registration;
  const filteredUsers = data.filter((dataItem) =>
    dataItem.pseudo.toString().toLowerCase().replace(/-/g, "")
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

  return (
    <section className="UP_Container">
      <div className="UPD_Part1_Flex">
        <div className="UP_Title_PseudoName">PSEUDO NAME</div>
        <div className="UPD_Email_Password_Register">
          <div className="UPM_Level_Score_Password">
            <div className="UPD_Level_Score">
              <div className="UP_Title_Level">level:</div>
              <div className="UP_Title_Score">score:</div>
            </div>
            <div className="UP_Email_Password">
              <div className="Block_Email_Password">
                <p>email:</p>
                <p>password:</p>
              </div>
              <div className="UP_Change_Password">
                <p className="UP_Change_Password_Inside">change password</p>
              </div>
            </div>
            <div className="UP_Register_Since">
              register since {userRegistration}
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
        <div className="UP_Historical_Classement">
          <div
            className="UP_Title_Historical"
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
            className="UP_Title_Classement"
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
        <div className="UPC_Work_Submited_Classement">
          <section className="UPC_Users_List_Table">
            <table className="UPC_Users_List_Table">
              {currentItems.map((user, index) => (
                <tr className="UPC_UsersList_Tr" key={user.id}>
                  <td className="UPC_Users_List_Td">
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </td>
                  <td className="UPC_Users_List_Td">{user.pseudo}</td>
                  <td className="UPC_Users_List_Td">{user.score}</td>
                  <td className="UPC_Users_List_Td">{user.registration}</td>
                </tr>
              ))}
            </table>
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
    </section>
  );
}

export default UserProfilHistorical;
