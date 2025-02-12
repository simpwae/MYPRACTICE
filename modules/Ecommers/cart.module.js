import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  productID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const cartSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    orderedItem: {
      type: [orderItemSchema],
    },
    orderPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    status:{
        type: String,
        enum:["PENDING","CANCELLED","DELIVERED"],
        default:"PENDING",
    },
    Address:{
        type:String,
        required:true,
    }
  },
  { timestamps: true }
);

export const Cart = mongoose.model("Cart", cartSchema);
