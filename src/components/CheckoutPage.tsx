"use client";
import { useState } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { StripeError } from "@stripe/stripe-js";
import { useCart } from "@/context/CartContext";

const CheckoutPage = ({ amount, clientSecret }: { amount: number; clientSecret: string }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [loading, setLoading] = useState(false);
  const {cart , getSubtotal} = useCart();



  amount = getSubtotal()
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
  
    if (!stripe || !elements) return;
  
    const { error: submitError } = await elements.submit();
    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }
  
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: { return_url: `${window.location.origin}/payment-success?amount=${amount}` },
    }) as { error?: StripeError; paymentIntent?: { id: string; status: string } };
  
    if (error) {
      setErrorMessage(error.message);
    } else {
      console.log("Payment successful:", paymentIntent);
  
      // ✅ Send order data to Sanity
      const orderData = {
        products: cart.map((item) => ({
          product: { _type: "reference", _ref: item.id },
          quantity: item.quantity,
          price: item.price,
        })),
        totalAmount: amount,
        paymentStatus: "completed",
        paymentMethod: "stripe",
        orderDate: new Date().toISOString(),
      };
  
      await fetch("/api/save-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });
    }
  
    setLoading(false);
  };
  

  if (!stripe || !elements) {
    return <div>Loading...</div>;
  }
  return (
    <form onSubmit={handleSubmit} className="bg-white p-2 rounded-md">
      <PaymentElement />

      {errorMessage && <div>{errorMessage}</div>}

      <button
        disabled={!stripe || loading}
        className="text-white w-full p-5 bg-black mt-2 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse"
        // onClick={}
      >
        {!loading ? `Pay $${amount}` : "Processing..."}
      </button>
    </form>
  );
};

export default CheckoutPage;
