import { db } from "../../../config/db.js";
import { ObjectId } from "mongodb";

const productResolvers = {
  Query: {
    products: async () =>
      await db.collection("products").find().limit(16).toArray(),

    product: async (parent, { id }) => {
      const query = { _id: new ObjectId(id) };
      return await db.collection("products").findOne(query);
    },

    productByCategories: async (parent, { category }) => {
      console.log(category);
      return await db.collection("products").find({ category }).toArray();
    },
  },

  // TODO: Work in the next
  // Mutation: async (parent, { title, img, price, desc }) => {
  //   const newProduct = new Product({ title, img, price, desc });
  //   await newProduct.save();
  //   return newProduct;
  // },
};

export default productResolvers;
