import React, { useState } from "react";
import SubmitWorkThank from "../../components/InputSubmitWork/SubmitWorkThank";
import SubmitWorkValidation from "../../components/InputSubmitWork/SubmitWorkValidation";
import SubmitWorkImport from "../../components/InputSubmitWork/SubmitWorkImport";

function SubmitWork() {
  const [currentStep, setCurrentStep] = useState(1);

  // Fonction pour passer à l'étape suivante
  const goToNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  // Fonction pour revenir à l'étape précédente
  const goToPreviousStep = () => {
    setCurrentStep(currentStep - 2);
  };

  return (
    <>
      {/* Conditionnellement rendre les composants en fonction de l'étape actuelle */}
      {currentStep === 1 && <SubmitWorkImport onNextStep={goToNextStep} />}
      {currentStep === 2 && (
        <SubmitWorkValidation
          onPreviousStep={goToPreviousStep}
          onNextStep={goToNextStep}
        />
      )}
      {currentStep === 3 && (
        <SubmitWorkThank onPreviousStep={goToPreviousStep} />
      )}
    </>
  );
}

export default SubmitWork;
