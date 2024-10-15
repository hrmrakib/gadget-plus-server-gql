import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb://localhost:27017/gadget";


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export const db = client.db('gadget')

export async function dbConnect() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    console.log("MongoDB connected");

    } finally {
    
  }
}

// run().catch(console.dir);




// import mongoose from "mongoose";

// const uri = "mongodb://localhost:27017/gadget";

// const connectDB = async () => {
//   try {
//     await mongoose.connect(uri);
//     console.log("MongoDB connected");
//   } catch (error) {
//     console.error(error.message);
//     process.exit(1);
//   }
// };

// export default connectDB;
