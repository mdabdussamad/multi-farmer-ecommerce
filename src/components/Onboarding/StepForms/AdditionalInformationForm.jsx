"use client";
 
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import NavButtons from "../NavButtons"; 
import { useDispatch, useSelector } from "react-redux";
import ImageInput from "@/components/Forminputs/ImageInput"; 
import TextareaInput from "@/components/Forminputs/TextareaInput"; 
import {setCurrentStep, updateOnboardingFormData} from "@/redux/slices/onboarding"

export default function AdditionalInformationForm() { 
  const [imageUrl, setImageUrl] = useState("");  
  const currentStep = useSelector((store) => store.onboarding.currentStep);
  const existingFormData = useSelector(
    (store) => store.onboarding.onboardingFormData
  );
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...existingFormData,
    },
  });
  const dispatch = useDispatch();
  async function processData(data) {
    // Update the checkout Data 
    data.profileImageUrl = imageUrl;
    dispatch(updateOnboardingFormData(data));
    // Update the Current Step
    dispatch(setCurrentStep(currentStep + 1));
  }
  return (
    <form onSubmit={handleSubmit(processData)}>
      <h2 className="text-xl font-semibold mb-4 dark:text-lime-400">
        Additional Information
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <ImageInput
          label="Farmer Profile Image"
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          endpoint="farmerProfileUploader"         
        />
        <TextareaInput
          label="Farmer's Payment Terms"
          name="terms"
          register={register}
          errors={errors}
          isRequired={false}
        />
        <TextareaInput
          label="Notes"
          name="notes"
          register={register}
          errors={errors}
          isRequired={false}
        />                                    
      </div>
      <NavButtons />
    </form>
  );
}
