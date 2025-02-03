import { defineType, defineField } from "sanity";

export const order = defineType({
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    defineField({
      name: "user",
      title: "User",
      type: "reference",
      to: [{ type: "user" }],
      description: "Reference to the user who placed the order",
    }),
    defineField({
      name: "products",
      title: "Products",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "product",
              title: "Product",
              type: "reference",
              to: [{ type: "product" }],
              description: "Reference to the ordered product",
            }),
            defineField({
              name: "quantity",
              title: "Quantity",
              type: "number",
              validation: (Rule) => Rule.min(1).required(),
              description: "Number of items ordered",
            }),
            defineField({
              name: "price",
              title: "Price",
              type: "number",
              validation: (Rule) => Rule.min(0).required(),
              description: "Price of the product at the time of purchase",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "totalAmount",
      title: "Total Amount",
      type: "number",
      validation: (Rule) => Rule.min(0).required(),
      description: "Total amount paid for the order",
    }),
    defineField({
      name: "paymentStatus",
      title: "Payment Status",
      type: "string",
      options: {
        list: ["pending", "completed", "failed"],
      },
      validation: (Rule) => Rule.required(),
      description: "Current status of the payment",
    }),
    defineField({
      name: "paymentMethod",
      title: "Payment Method",
      type: "string",
      options: {
        list: ["stripe", "paypal", "creditCard", "other"],
      },
      description: "Payment method used for the transaction",
    }),
    defineField({
      name: "orderDate",
      title: "Order Date",
      type: "datetime",
      description: "Date and time when the order was placed",
    }),
  ],
});
