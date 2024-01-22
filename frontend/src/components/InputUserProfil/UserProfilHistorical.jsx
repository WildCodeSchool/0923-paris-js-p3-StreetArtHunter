import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import DataWorks from "../../../data_sample/data_works.json";
import WorkCard from "../WorkCard/WorkCard";
import WorkCard2 from "../WorkCard2/WorkCard2";
import imageMonkey from "../../assets/images/img/monkey02.png";
import AuthContext from "../../context/AuthContext";
import "./userProfilMobile.css";
import "./userProfilDesktop.css";

function UserProfilHistorical() {
  const navigate = useNavigate();
  // database //
  const datas = DataWorks;
  const { user } = useContext(AuthContext);
  // console.log(user);
  // useEffect(() => {
  //   const filterPresentUser = dataUsers.find((data) => data.pseudo === pseudo);
  //   setUserData(filterPresentUser);
  // }, [pseudo]);

  // Works Count - only the validate //
  const validatedWorks = datas.filter((work) => work.validation === "true");
  const validatedWorksCount = validatedWorks.length;

  // pagination work card //
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = validatedWorks.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // pagination work card for desktopScreen //
  const [currentPageDesktop, setCurrentPageDesktop] = useState(1);
  const itemsPerPageDesktop = 6;

  const indexOfLastItemDesktop = currentPageDesktop * itemsPerPageDesktop;
  const indexOfFirstItemDesktop = indexOfLastItemDesktop - itemsPerPageDesktop;
  const currentItemsDesktop = validatedWorks.slice(
    indexOfFirstItemDesktop,
    indexOfLastItemDesktop
  );

  const handlePageChangeDesktop = (event, pageNumber) => {
    setCurrentPageDesktop(pageNumber);
  };

  // gestion Media Screen //
  const smartphoneScreen = window.matchMedia("(max-width: 770px)").matches;
  const desktopScreen = window.matchMedia("(min-width: 1440px)").matches;

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
                  <div className="UP_Change_Password_Inside">
                    change password
                  </div>
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
            {/* // */}
            <div className="UPH_Work_Submited">
              <div className="UPH_Works_Count">
                works submitted:{" "}
                <span className="font_info_color">{validatedWorksCount}</span>
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
                    count={Math.ceil(validatedWorks.length / itemsPerPage)}
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
                      count={Math.ceil(
                        validatedWorks.length / itemsPerPageDesktop
                      )}
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
      </div>
    </section>
  );
}

export default UserProfilHistorical;
