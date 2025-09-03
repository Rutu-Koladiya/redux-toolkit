import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    }
})

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: String,
      required: true,
    },
    orderItems: {
        type: [orderItemSchema]
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["PENDING", "CANCELLED", "DELIVERED"],
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
