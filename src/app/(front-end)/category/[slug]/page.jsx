import React from "react";
import FilterComponent from "@/components/frontend/Filter/FilterComponent";
import { getData } from "@/lib/getData";

export default async function page({ params: { slug }, searchParams }) {
  // SHORTING AND FILTERING
  const { sort='asc', min=0, max='', page=1 } = searchParams;
  // console.log(max);
  // const page = searchParams.page || 1;
  const category = await getData(`categories/filter/${slug}`);
  let products = await getData(
    `products?catId=${category.id}&page=${page}&sort=${sort}&min=${min}&max=${max}`
  );
  // let products;
  // if(page){
  //   products = await getData(
  //     `products?catId=${category.id}&page=${page}`
  //   );
  // }else if (max && min) {
  //   products = await getData(
  //     `products?catId=${category.id}&sort=asc&min=${min}&max=${max}`
  //   );
  // } else if (min) {
  //   products = await getData(
  //     `products?catId=${category.id}&sort=asc&min=${min}`
  //   );
  // } else if (max) {
  //   products = await getData(
  //     `products?catId=${category.id}&sort=asc&max=${max}`
  //   );
  // } else if (sort) {
  //   products = await getData(
  //     `products?catId=${category.id}&sort=${sort}`);
  // } else {
  //   products = await getData(
  //     `products?catId=${category.id}`);
  // }
  // PAGINATION
 
  // const {products} = categories;
  // console.log(products);
  return (
    <div className="mt-16">      
      <FilterComponent category={category} products={products} />
    </div>
  );
}
