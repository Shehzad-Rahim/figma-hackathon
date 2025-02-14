"use client";

import { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/CartContext";
import { createClient } from "@sanity/client";

export default function BillingPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { cart, getSubtotal, clearCart } = useCart();
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    address: false,
    city: false,
    zipCode: false,
    phone: false,
    email: false,
  });

  const subtotal = getSubtotal();
  const cartItems = cart;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      address: !formValues.address,
      city: !formValues.city,
      zipCode: !formValues.zipCode,
      phone: !formValues.phone,
      email: !formValues.email,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    token: process.env.SANITY_API_TOKEN,
    apiVersion: "2025-01-18",
    useCdn: false,
  });

  const handlePlaceOrder = async () => {
    if (validateForm()) {
      setIsLoading(true);
      try {
        const validCartItems = cartItems.filter(
          (item) => item._id && item._id.trim() !== ""
        );

        if (validCartItems.length === 0) {
          throw new Error("No valid items in the cart.");
        }

        const orderData = {
          _type: "orders",
          firstName: formValues.firstName,
          lastName: formValues.lastName,
          address: formValues.address,
          city: formValues.city,
          zipCode: formValues.zipCode,
          phone: formValues.phone,
          email: formValues.email,
          cartItems: validCartItems.map((item) => ({
            _type: "reference",
            _ref: item._id,
          })),
          orderDate: new Date().toISOString(),
          total: subtotal,
        };

        clearCart();

        // Reset the form
        setFormValues({
          firstName: "",
          lastName: "",
          address: "",
          city: "",
          zipCode: "",
          phone: "",
          email: "",
        });

        await client.create(orderData);
        Swal.fire({
          title: "Order placed successfully",
          text: "Your order has been placed successfully",
          icon: "success",
        });
      } catch (error) {
        Swal.fire({
          title: "Failed to place order",
          icon: "error",
        });
        console.error("Error creating order in Sanity:", error);
      } finally {
        setIsLoading(false);
      }
    } else {
      Swal.fire({
        title: "Validation Error",
        text: "Please fill in all the required fields.",
        icon: "error",
      });
    }
  };

  return (
    <div className={`min-h-screen `}>
     
     <h1 className="text-2xl text-center my-5">Checkout</h1>

      {/* Order Summary and Billing Form */}
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="flex flex-col gap-8">
          {/* Order Summary */}
          <div className="border w-full bg-gray-900 shadow-sm px-4 py-4">
            <h2 className="text-lg sm:text-xl font-medium mb-4  ">
              Your Order
            </h2>{" "}
            {/* Changed "Order Summary" to "Your Order" */}
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex items-center gap-4 py-3 border-b border-gray-700"
              >
                <div className="w-16 h-16 overflow-hidden rounded">
                  {item.image && (
                    <Image
                      src={urlFor(item.image).url()}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium  ">{item.name}</h3>
                  <p className="text-xs text-gray-400">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <p className="text-sm  ">${item.price * item.quantity}</p>
              </div>
            ))}
          </div>

          {/* Billing Form */}
          <div className="flex flex-col gap-3 border border-gray-700 rounded-sm  w-full shadow-sm px-4 py-4">
            <h2 className="text-xl sm:text-2xl font-medium mb-6  ">
              Delivery Details
            </h2>{" "}
            {/* Changed "Billing Information" to "Delivery Details" */}
            <div className="flex flex-col gap-2">
                
                <div>
                  <label htmlFor="firstName" className="">
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    placeholder="Enter your first name"
                    value={formValues.firstName}
                    onChange={handleInputChange}
                    aria-invalid={formErrors.firstName ? "true" : "false"}
                    aria-describedby="firstNameError"
                    className=" py-2  px-2 text-black border-gray-700 outline-none"
                  />
                  {formErrors.firstName && (
                    <p
                      id="firstNameError"
                      className="text-red-500 text-sm mt-1"
                    >
                      Please enter your first name
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="lastName" className=" ">
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    placeholder="Enter your last name"
                    value={formValues.lastName}
                    onChange={handleInputChange}
                    aria-invalid={formErrors.lastName ? "true" : "false"}
                    aria-describedby="lastNameError"
                    className=" py-2  px-2 text-black border-gray-700 outline-none"
                  />
                  {formErrors.lastName && (
                    <p id="lastNameError" className="text-red-500 text-sm mt-1">
                      Please enter your last name
                    </p>
                  )}
                </div>

              <div>
                <label htmlFor="address" className=" ">
                  Address
                </label>
                <Input
                  id="address"
                  placeholder="Enter your address"
                  value={formValues.address}
                  onChange={handleInputChange}
                  aria-invalid={formErrors.address ? "true" : "false"}
                  aria-describedby="addressError"
                  className=" py-2  px-2 text-black border-gray-700 outline-none"
                />
                {formErrors.address && (
                  <p id="addressError" className="text-red-500 text-sm mt-1">
                    Please enter your address
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="city" className=" ">
                  City
                </label>
                <Input
                  id="city"
                  placeholder="Enter your city"
                  value={formValues.city}
                  onChange={handleInputChange}
                  aria-invalid={formErrors.city ? "true" : "false"}
                  aria-describedby="cityError"
                  className=" py-2  px-2 text-black border-gray-700 outline-none"
                />
                {formErrors.city && (
                  <p id="cityError" className="text-red-500 text-sm mt-1">
                    Please enter your city
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="zipCode" className=" ">
                  Zip Code
                </label>
                <Input
                  id="zipCode"
                  placeholder="Enter your zip code"
                  value={formValues.zipCode}
                  onChange={handleInputChange}
                  aria-invalid={formErrors.zipCode ? "true" : "false"}
                  aria-describedby="zipCodeError"
                  className=" py-2  px-2 text-black border-gray-700 outline-none"
                />
                {formErrors.zipCode && (
                  <p id="zipCodeError" className="text-red-500 text-sm mt-1">
                    Please enter your zip code
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="phone" className=" ">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  placeholder="Enter your phone number"
                  value={formValues.phone}
                  onChange={handleInputChange}
                  aria-invalid={formErrors.phone ? "true" : "false"}
                  aria-describedby="phoneError"
                  className=" py-2  px-2 text-black border-gray-700 outline-none"
                />
                {formErrors.phone && (
                  <p id="phoneError" className="text-red-500 text-sm mt-1">
                    Please enter your phone number
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className=" ">
                  Email
                </label>
                <Input
                  id="email"
                  placeholder="Enter your email address"
                  value={formValues.email}
                  onChange={handleInputChange}
                  aria-invalid={formErrors.email ? "true" : "false"}
                  aria-describedby="emailError"
                  className=" py-2  px-2 text-black border-gray-700 outline-none"
                />
                {formErrors.email && (
                  <p id="emailError" className="text-red-500 text-sm mt-1">
                    Please enter your email address
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-6 justify-between py-3 text-sm sm:text-base">
              <div className="flex justify-between py-3 border-b border-gray-700 text-sm sm:text-base">
                <span className=" ">Subtotal:</span>
                <span className=" ">${subtotal}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-700 text-sm sm:text-base">
                <span className=" ">Delivery Charges:</span>
                <span className="text-gray-400">Free</span>
              </div>
            </div>
            <Button
              className="w-full h-10 sm:h-12 bg-[#2a254b] text-white hover:bg-[#342d5c] rounded-lg mt-4 text-sm sm:text-base  "
              onClick={handlePlaceOrder}
              disabled={isLoading}
            >
              {isLoading ? "Placing Order..." : "Confirm Order"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
