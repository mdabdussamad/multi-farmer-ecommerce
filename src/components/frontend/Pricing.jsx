import React from "react";
import Link from "next/link";
import { Check, X } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      title: "Free",
      isRecommended: false,
      description: "+5% transaction fee. Its Good For Starters",
      price: "$0",
      features: ["All features", "Unlimited products", "Unlimited revenue"],
      nonFeatures: [],
      startPlan: "Start for free",
    },
    {
      title: "Silver",
      isRecommended: true,
      description: "+5% transaction fee. Its Good For Starters",
      price: "$20",
      features: ["All features", "Unlimited products", "Unlimited revenue"],
      nonFeatures: [],
      startPlan: "Get start",
    },
    {
      title: "Gold",
      isRecommended: false,
      description: "+5% transaction fee. Its Good For Starters",
      price: "$99",
      features: ["All features", "Unlimited products", "Unlimited revenue"],
      nonFeatures: [],
      startPlan: "Get start",
    },
  ];
  return (
    <>
      <div className="mt-16 sm:flex sm:flex-col sm:align-center p-2 md:p-10">
        <div className="flex flex-col items-center">
          <div className="relative items-center self-center bg-slate-200 dark:bg-slate-900 rounded-lg p-0 5 flex">
            <button
              type="button"
              className="relative rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none px-4 sm:w-auto sm:px-8 bg-slate-50 border-slate-50 text-slate-900 shadow-sm w-full"
            >
              Choose a plan which suits you
            </button>
          </div>
          <span className="max-w-2xl text-center mt-4">
            Discover simplicity in pricing with us. Our straightforward and
            competitive rates ensure you get the best value. No hidden fees,
            just transparent options to meet your needs. Choose clarity, choose
            Hygienic Commerce.
          </span>
        </div>
        <div className="mt-12 flex space-y-3 sm:mt-16 sm:space-y-0 sm:grid-cols-3 sm:gap-6 md:max-w-5xl md:mx-auto xl:grid-cols-3">
          {/* Starter package */}
          {plans.map((plan, i) => (
            <div
              key={i}
              className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200"
            >
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl leading-6 font-bold text-slate-900 dark:text-white">
                    {plan.title}
                  </h2>
                  {plan.isRecommended && (
                    <span className="uppercase border dark:bg-transparent bg-lime-500 text-white border-lime-500 text-xs rounded-full px-3 py-1">
                      recommended
                    </span>
                  )}
                </div>
                <p className="mt-2 text-base text-slate-700 dark:text-slate-300 leading-tight">
                  {plan.description}
                </p>
                <p className="mt-8">
                  <span className="text-4xl font-bold text-slate-900 dark:text-lime-400 tracking-tighter">
                    {plan.price}
                  </span>

                  <span className="text-base font-medium text-slate-500">
                    /mo
                  </span>
                </p>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-wide uppercase">
                  What's Included
                </h3>
                <div className="mt-8">
                  {plan.features.map((feature, i) => (
                    <p
                      key={i}
                      className="flex text-sm text-slate-700 dark:text-slate-300 leading-tight gap-2"
                    >
                      <Check /> {feature}
                    </p>
                  ))}
                </div>
                <button
                  type="button"
                  className="mt-8 relative rounded-full py-2 text-sm font-medium whitespace-nowrap focus:outline-none px-4 sm:w-auto sm:px-8 bg-lime-50 dark:bg-lime-500 border-lime-50 text-slate-900 dark:text-slate-50 shadow-sm w-full"
                >
                  <Link href={`/register-farmer?plan=${plan.title}`}>
                    {plan.startPlan}
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
