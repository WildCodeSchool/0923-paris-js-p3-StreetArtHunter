import SubmitWorkThank from "../../components/InputSubmitWork/SubmitWorkThank";
import SubmitWorkValidation from "../../components/InputSubmitWork/SubmitWorkValidation";
import SubmitWorkImport from "../../components/InputSubmitWork/SubmitWorkImport";

function SubmitWork() {
  return (
    <>
      <SubmitWorkImport />
      <SubmitWorkValidation />
      <SubmitWorkThank />
    </>
  );
}

export default SubmitWork;
