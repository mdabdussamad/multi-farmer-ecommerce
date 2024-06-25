import React from "react";
import Product from "../Product";
import Paginate from "./Paginate";

export default async function FilteredProducts({ products, productCount }) {
  // PAGINATION
  const pageSize = 3;   
  const totalPages = Math.ceil(productCount / pageSize);
  // const totalPages = 5;
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* {products.map((product, i) => {
          return <Product product={product} key={i} />;
        })} */}
        {products && products.map
          ? products.map((product, i) => {
              return <Product product={product} key={i} />;
            })
          : null}
      </div>
      <div className="p-8 mx-auto items-center justify-between w-full">
        <Paginate totalPages={totalPages} />
      </div>
    </div>
  );
}
