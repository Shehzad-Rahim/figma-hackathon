"use client";

import { useEffect, useState } from "react";
import CheckoutPage from "@/components/CheckoutPage";
import { useCart } from "@/context/CartContext"; // ✅ Import Cart Context
import { useUser } from "@clerk/nextjs"; // ✅ Import user from Clerk Auth
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Home() {
  const { getSubtotal } = useCart(); // ✅ Get total from CartContext
  const { user } = useUser(); // ✅ Get logged-in user details
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const amount = getSubtotal(); // ✅ Use cart subtotal instead of hardcoded amount

  useEffect(() => {
    if (amount <= 0) return; // ✅ Don't fetch if cart is empty

    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((error) => console.error("Error fetching payment intent:", error));
  }, [amount]); // ✅ Fetch when cart total changes

  if (!clientSecret) return <div className="text-center text-xl font-semibold">Loading...</div>;

  return (
    <main className="max-w-4xl mx-auto p-6 md:p-10 bg-white shadow-lg rounded-lg border border-gray-200 mt-10">
      <div className="text-center">
        {/* ✅ Display user name dynamically */}
        <h1 className="text-3xl font-bold text-gray-900">
          {user?.fullName ? user.fullName : "Dear Customer"},
        </h1>
        <h2 className="text-xl text-gray-600 mt-2">
          Your total amount is <span className="font-semibold text-gray-800">${amount.toFixed(2)}</span>
        </h2>
      </div>

      <div className="mt-6 border-t border-gray-300 pt-6">
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutPage amount={amount} clientSecret={clientSecret} />
        </Elements>
      </div>
    </main>
  );
}
