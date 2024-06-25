"use client";
import React from "react";
import BasicInformationForm from "@/components/Onboarding/StepForms/BasicInformationForm";
import FarmDetailsForm from "@/components/Onboarding/StepForms/FarmDetailsForm";
import AdditionalInformation from "@/components/Onboarding/StepForms/AdditionalInformation";
import Summary from "@/components/Onboarding/StepForms/Summary";
import { useSelector } from "react-redux";

export default function StepForm({farmerId}) {
  const currentStep = useSelector((store) => store.onboarding.currentStep);
  function renderFormByStep(step) {
    if (step === 1) {
      return <BasicInformationForm />;
    } else if (step === 2) {
      return <FarmDetailsForm />;
    } else if (step === 3) {
      return <AdditionalInformation />;
    } else if (step === 4) {
      return <Summary farmerId={farmerId} />;
    }
  }
  return <div>{renderFormByStep(currentStep)}</div>;
}
