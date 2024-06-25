'use client'
import React from "react";
import { BaggageClaim } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import toast from 'react-hot-toast';

export default function AddToCartButton({product}) {
  const dispatch = useDispatch();
  function handleAddToCart() {
    // Dispatch the reducer
    dispatch(addToCart(product));
    toast.success("Item added successfully");
  }
  return (
    <button onClick={()=>handleAddToCart()}
    className="flex items-center space-x-2 bg-lime-600 px-4 py-2 rounded-md text-white">
      <BaggageClaim />
      <span>Add to Cart</span>
    </button>
  );
}
