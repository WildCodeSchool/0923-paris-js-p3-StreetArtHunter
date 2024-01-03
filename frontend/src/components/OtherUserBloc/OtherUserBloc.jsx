import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./otherUserBloc.css";
import DataWorks from "../../../data_sample/data_works.json";
import WorkCard from "../WorkCard/WorkCard";

function OtherUserBloc({ dataUser }) {
  const [selectUser, setSelectUser] = useState([]);

  useEffect(() => {
    const userWorks = DataWorks.filter(
      (work) => work.userSub === dataUser.pseudo
    );
    setSelectUser(userWorks);
  }, []);

  const userWorkCount = selectUser.length;

  // pagination work card //
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = selectUser.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section>
      <div className="otherUserBloc_container">
        <div className="otherUserBloc_content">
          <div className="infos_OUB">
            <h1 className="pseudo_OUB">{dataUser.pseudo}</h1>
            <div className="Seniority_OUB">
              registered :
              <span className="font_info_color">{dataUser.registration} </span>
            </div>
            <div className="user_info_OUB_content">
              <p className="user_info_OUB">email: {dataUser.email} </p>
              <p className="user_info_OUB">level: </p>
              <p className="user_info_OUB">score: {dataUser.score} pts</p>
            </div>
          </div>
          {userWorkCount !== 0 && (
            <div className="history_OUB">
              <div className="historyWorkSubmit_OUB">
                works submitted :
                <span className="font_info_color"> {userWorkCount} </span>
              </div>
              <div className="workCard_area_OUB">
                {currentItems.map((data) => (
                  <WorkCard data={data} />
                ))}
              </div>
              <Stack spacing={0} mt={0}>
                <Pagination
                  count={Math.ceil(userWorkCount / itemsPerPage)}
                  size="small"
                  shape="rounded"
                  variant="outlined"
                  siblingCount={0}
                  page={currentPage}
                  onChange={handlePageChange}
                />
              </Stack>
            </div>
          )}
          <hr className="OUB_dashed_line" />
          <div className="OUB_trash_btn_container">
            <div className="OUB_trash_btn"> DELETE USER</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OtherUserBloc;
