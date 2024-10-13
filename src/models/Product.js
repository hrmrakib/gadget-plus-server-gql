import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  img: {
    img: String,
  },
  price: {
    img: Number,
  },
  color: {
    color: String,
  },
  description: {
    description: String,
  },
  brand: {
    img: String,
  },
  category: {
    img: String,
  },
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;
