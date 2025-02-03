import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@sanity/client";
import { currentUser } from "@clerk/nextjs/server"; // ✅ Correct import

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // Ensure this is added to `.env`
});

export async function POST(req: NextRequest) {
  try {
    const user = await currentUser(); // ✅ Get logged-in user
    if (!user || !user.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { products, totalAmount, paymentStatus, paymentMethod, orderDate } = await req.json();

    // Create a new order in Sanity
    const order = await sanityClient.create({
      _type: "order",
      user: { _type: "reference", _ref: user.id }, // ✅ Reference to Clerk user ID
      products,
      totalAmount,
      paymentStatus,
      paymentMethod,
      orderDate,
    });

    return NextResponse.json({ success: true, orderId: order._id });
  } catch (error) {
    console.error("Error saving order:", error);
    return NextResponse.json({ error: "Failed to save order" }, { status: 500 });
  }
}
