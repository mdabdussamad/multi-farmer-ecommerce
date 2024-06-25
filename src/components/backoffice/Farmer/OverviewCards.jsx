import { ChevronRight,ShoppingBasket,BadgeDollarSign,Receipt } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function OverviewCards({ sales, products }) {
  const productsCount = products.length.toString().padStart(2, 0);
  const salesCount = sales.length.toString().padStart(2, 0);
  const totalSales = sales.reduce((acc, item) => acc + item.total, 0);
  const analytics = [
    {
      title: "Products",
      count: productsCount,
      unit: "",
      link: "/dashboard/products",
      icon: <ShoppingBasket />,
    },
    {
      title: "Sales",
      count: salesCount,
      unit: "",
      link: "/dashboard/sales",
      icon: <BadgeDollarSign />,
    },
    {
      title: "Total Reveniew",
      count: totalSales,
      unit: "",
      link: "/dashboard/sales",
      icon: <Receipt />,
    },
  ];
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-16 sm:gap-4">
      {analytics.map((item, i) => {
        return (
          <div key={i} className="border border-solid">
            <div className="flex items-center justify-between">
              <div className="p-4">
                <h3 className="uppercase text-slate-400 dark:text-slate-400 font-bold">{item.title}</h3>
                <p className="text-slate-400 dark:text-slate-50">{item.count}</p>
              </div>
              <div className="text-slate-400 dark:text-slate-50 p-4 rounded-full bg-blue-800 mr-4">{item.icon}</div>
            </div>
            {item.unit}
            <hr />
            <Link className="flex justify-between p-4 text-slate-400 dark:text-slate-50" href={item.link}>
              View reports <ChevronRight />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
