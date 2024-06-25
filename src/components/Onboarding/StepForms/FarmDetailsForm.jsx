"use client";

import TextInput from "@/components/Forminputs/TextInput";
import { useForm } from "react-hook-form";
import NavButtons from "../NavButtons"; 
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentStep,
  updateonboardingFormData,
} from "@/redux/slices/onboardingSlice";
import ArrayItemsInput from "@/components/Forminputs/ArrayItemsInput";

export default function FarmDetailsForm() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
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
  async function processData(data) {    
    console.log(data);
    data.products = products;
    // Update the checkout Data
    dispatch(updateonboardingFormData(data));
    // Update the Current Step
    dispatch(setCurrentStep(currentStep + 1));
  }
  return (
    <form onSubmit={handleSubmit(processData)}>
      <h2 className="text-xl font-semibold mb-4 dark:text-lime-400">
        Farm Details
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label="What is the Size of Your Land in Accers"
          name="landSize"
          type="number"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="What is your main Crop that you Cultivate"
          name="mainCrop"
          type="text"
          register={register}
          errors={errors}
          className="w-full"
        />
        <ArrayItemsInput
          setItems={setProducts}
          items={products}
          itemTitla="Product"
        />
      </div>
      <NavButtons />
    </form>
  );
}
