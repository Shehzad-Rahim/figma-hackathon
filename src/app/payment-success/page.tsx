'use client'
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useEffect } from "react";

export default function PaymentSuccess({
    searchParams: { amount},
  }: {
    searchParams: { amount: string };
  }) {
    const {clearCart} = useCart();
    useEffect(() => {
      setTimeout(()=>{
        clearCart();
      }, 500)
    });
    return (
      <div className="flex flex-col justify-center items-center text-center gap-3 my-10">
        <div className="success">
          <h1 className="text-4xl font-extrabold mb-2">Thank you!</h1>
          <h2 className="text-2xl">You successfully sent</h2>
  
          <div className="bg-white p-2 rounded-md text-black mt-5 text-4xl font-bold">
            ${amount}
          </div>
        </div>
        <Link className="py-4 px-6 bg-[#2a254b] text-white" href={"/"}>
          Continue Shopping
        </Link>
      </div>
    );
  }