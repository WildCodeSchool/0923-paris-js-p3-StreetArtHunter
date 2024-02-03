/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable prefer-destructuring */
import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import WorkCard from "../WorkCard/WorkCard";
import WorkCard2 from "../WorkCard2/WorkCard2";
import imageMonkey from "../../assets/images/img/monkey02.png";
import AuthContext from "../../context/AuthContext";
import formatDate from "../../utils/FormatDate";
import "./userProfil.css";

function UserProfilHistorical() {
  const navigate = useNavigate();
  // database //
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/image`,
        {
          credentials: "include",
        }
      );

      if (response.status === 200) {
        const data = await response.json();
        setWorks(data);
      }
    };
    fetchData();
  }, []);

  const { user } = useContext(AuthContext);

  // Works Count - only the validate //

  const UsersWorks = works.filter((work) => work.User_id === user?.id);

  // pagination work card //
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = UsersWorks.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // pagination work card for desktopScreen //
  const [currentPageDesktop, setCurrentPageDesktop] = useState(1);
  const itemsPerPageDesktop = 6;

  const indexOfLastItemDesktop = currentPageDesktop * itemsPerPageDesktop;
  const indexOfFirstItemDesktop = indexOfLastItemDesktop - itemsPerPageDesktop;
  const currentItemsDesktop = UsersWorks.slice(
    indexOfFirstItemDesktop,
    indexOfLastItemDesktop
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

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handlePageChangeDesktop = (event, pageNumber) => {
    setCurrentPageDesktop(pageNumber);
  };

  // Format date object:
  const formattedDate = formatDate(user?.registrationDate);

  // gestion Media Screen //
  const smartphoneScreen = window.matchMedia("(max-width: 770px)").matches;
  const desktopScreen = window.matchMedia("(min-width: 1440px)").matches;

  return (
    <section className="UP_Container Global_height">
      <div className="UP_Content">
        <div className="UP_Part1_Flex">
          <div className="UP_Title_PseudoName">{user?.pseudo}</div>
          <div className="UP_Level_Score">
            <div className="UP_Title_Level">level:</div>
            <div className="UP_Title_Score">score: {user?.score}</div>
          </div>
          <div className="UP_Email_Password">
            <div className="Block_Email_Password">
              <p>email: {user?.email}</p>
              <p>password: ********</p>
            </div>
            <div
              className="UP_Change_Password"
              onClick={handleOpen}
              role="button"
              tabIndex="0"
            >
              <p className="UP_Change_Password_Inside">change password</p>
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
          </div>
          {/* // */}
          <div className="UPH_Work_Submited">
            <div className="UPH_Works_Count">
              works submitted:{" "}
              <span className="font_info_color">{UsersWorks.length}</span>
            </div>

            {smartphoneScreen && (
              <div className="UPH_Workcard_Container">
                {currentItems.map((data) => (
                  <WorkCard key={data.id} data={data} />
                ))}
              </div>
            )}
            {smartphoneScreen && (
              <Stack spacing={0} mt={0}>
                <Pagination
                  count={Math.ceil(UsersWorks.length / itemsPerPage)}
                  size="small"
                  shape="rounded"
                  variant="outlined"
                  siblingCount={0}
                  page={currentPage}
                  onChange={handlePageChange}
                />
              </Stack>
            )}

            {desktopScreen && (
              <>
                <div className="UPH_Workcard_Container">
                  {currentItemsDesktop.map((data) => (
                    <WorkCard2 key={data.id} data={data} />
                  ))}
                </div>
                <Stack spacing={0} mt={0}>
                  <Pagination
                    count={Math.ceil(UsersWorks.length / itemsPerPageDesktop)}
                    size="small"
                    shape="rounded"
                    variant="outlined"
                    siblingCount={0}
                    page={currentPageDesktop}
                    onChange={handlePageChangeDesktop}
                  />
                </Stack>
              </>
            )}
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <section className="password_change_container_UP">
            <h1 className="password_change_title_UP">CHANGE YOUR PASSWORD</h1>
            <input
              type="text"
              className="password_change_placeholder_UP"
              placeholder="enter new password"
            />
            <div
              className="password_change_validbtn_UP"
              onClick={handleClose}
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

export default UserProfilHistorical;
