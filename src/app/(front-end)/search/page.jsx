import React from "react";
import FilterComponent from "@/components/frontend/Filter/FilterComponent";
import { getData } from "@/lib/getData";

export default async function Search({ searchParams }) {
  const { sort, min, max, search } = searchParams;
  // console.log(max);
  const page = searchParams.page || 1;  

  let products;
  if (search) {
    products = await getData(`products?search=${search}`);
  } else {
    products = await getData(`products?search=`);
  }

  const category = {
    title: search,
    slug: "",
    products,
    isSearch: true,
  };

  // PAGINATION
  // const {products} = categories;
  // console.log(products);
  return (
    <div className="mt-16">
      <FilterComponent category={category} products={products} />
    </div>
  );
}
