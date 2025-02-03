
import { Billing , Product } from "@/types";
import { client } from "@/sanity/lib/client";


//Save order to Sanity function
export const saveOrderToSanity = async (
  billingDetails: Billing,
  cartItems: Product[],
  totalAmount: number
): Promise<void> => {
  try {
    // costumer exist check 
    const existingCustomer = await client.fetch(
      `*[_type == "customer" && email == $email && fullName == $fullName][0]`,
      { email: billingDetails.email, fullName: billingDetails.fullName }
    );

    let customer;

    // update for existing customers
    if (existingCustomer) {
      customer = existingCustomer;
      console.log("Customer already exists with the same email and name.");
    } else {
      //new costumer record
      customer = await client.create({
        _type: "customer",
        fullName: billingDetails.fullName,
        email: billingDetails.email,
        phoneNumber: billingDetails.phoneNumber,
        address: billingDetails.addressLine1, // Store addressLine1 in customer
        city: billingDetails.city,
      });
      console.log("Customer created:", customer);
    }

    //custom orderId genrator
    const lastOrder = await client.fetch(
      `*[_type == "order"] | order(_createdAt desc)[0]{orderId}`
    );

    // Increament last order id
    const lastOrderNumber = lastOrder?.orderId
      ? parseInt(lastOrder.orderId.split("-")[1], 10)
      : 0;

    const newOrderId = `AvionOID-${(lastOrderNumber + 1)
      .toString()
      .padStart(2, "0")}`;

    // Saving order details with id
    const order = await client.create({
      _type: "order",
      orderId: newOrderId, // costum order id
      customer: { _type: "reference", _ref: customer._id },
      items: cartItems.map((item) => ({
        _type: "orderItem",
        _key: Math.random().toString(36).substring(2, 11), // Unique key for each item
        name: item.name,
        image: item.imageUrl,
        quantity: item.Quantity,
        unitPrice: item.Finalprice,
        totalPrice: item.Finalprice * item.Quantity,
      })),
      totalAmount,
      orderDate: new Date().toISOString(),
      shippingAddress: `${billingDetails.addressLine1} ${
        billingDetails.addressLine2 ? billingDetails.addressLine2 : ""
      }`,
      status: "pending",
    });

    console.log("Order saved successfully:", order);
  } catch (error) {
    console.error("Error saving order to Sanity:", error);
    throw new Error("Failed to save order to Sanity");
  }
};