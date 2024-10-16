import { db } from "../../../config/db.js";

const blogResolvers = {
  Query: {
    blogs: async () => db.collection("blogs").find().toArray(),
  },
};

export default blogResolvers;
