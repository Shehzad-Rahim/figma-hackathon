"use client";

import { useState } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { useCart } from "@/context/CartContext";
import { StripeError } from "@stripe/stripe-js";

const CheckoutPage = ({ amount, clientSecret }: { amount: number; clientSecret: string }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [loading, setLoading] = useState(false);
  const { getSubtotal } = useCart();

  amount = getSubtotal();

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
    ;

    if (error) {
      setErrorMessage(error.message);
      setLoading(false);
      return;
    }

    console.log("✅ Payment successful:", paymentIntent);

    

    setLoading(false);
  };

  return (
    <div className=" px-10 my-10">
      <form onSubmit={handleSubmit} className="p-2 rounded-md ">
        <PaymentElement className="bg-blue-500 px-2 rounded-md" />
        {errorMessage && <div>{errorMessage}</div>}
        <button
          disabled={!stripe || loading}
          className="text-white w-full p-5 bg-black mt-2 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse"
        >
          {!loading ? `Pay $${amount}` : "Processing..."}
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
