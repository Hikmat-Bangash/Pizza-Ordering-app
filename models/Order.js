import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  customer: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  status: {
    type: Number,
    default: 0,
  },
  payment:{
    type: Number,
    required: true,
  }
},
 {timestamps: true}
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
