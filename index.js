import express from "express";
import cors from "cors";
import connectDB from "./src/config/db.js";
import productSchema from "./src/graphql/typeDefs/product/productSchema.js";

//highlight-start
import gql from "graphql-tag";
import { ApolloServer } from "@apollo/server";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { expressMiddleware } from "@apollo/server/express4";
import productResolvers from "./src/graphql/resolvers/product/productResolvers.js";
import { readFileSync } from "fs";
//highlight-end

const port = process.env.PORT || 4000;
const app = express();

app.use(cors({ origin: [], credentials: true, optionsSuccessStatus: 200 }));
app.use(express.json());

const server = new ApolloServer({
  typeDefs: [productSchema],
  resolvers: [productResolvers],
});

// Connect to the database
connectDB();

await server.start();
//highlight-start
app.use("/graphql", cors(), express.json(), expressMiddleware(server));
//highlight-end

app.listen(port, () => {
  console.log(`🚀 Server is on ${port}`);
});
