import React from "react";
import Steps from "@/components/Checkout/Steps";
import CartBanner from "@/components/Checkout/CartBanner";
import StepForm from "@/components/Checkout/StepForm";

export default function page({params:{id}}) {
  const steps = [
    {
      number: 1,
      title: "Basic Information",
    },
    {
      number: 2,
      title: "Farm Details",
    },
    {
      number: 3,
      title: "Additional Information",
    },
    {
      number: 4,
      title: "Summary",
    },
  ];
  return (
    <div className="bg-slate-200 dark:bg-slate-950 min-h-screen mt-16">
      <div className="max-w-3xl my-6 mx-auto border border-slate-700 p-6 rounded-lg">
        {/* STEPS */}
        <Steps steps={steps} />
        <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">           
          {/* Form */}
          <StepForm farmerId={id} />
        </div>
      </div>
    </div>
  );
}
