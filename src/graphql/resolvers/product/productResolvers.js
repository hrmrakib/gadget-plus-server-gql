import Product from "../../../models/Product.js";

const productResolvers = {
  Query: {
    products: async () => await Product.find().limit(16),
    product: async (parent, { _id }) => await Product.findById(_id),
  },

  // TODO: Work in the next
  // Mutation: async (parent, { title, img, price, desc }) => {
  //   const newProduct = new Product({ title, img, price, desc });
  //   await newProduct.save();
  //   return newProduct;
  // },
};

export default productResolvers;
